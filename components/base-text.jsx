import { useMemo } from 'react'
import styled, { css } from 'styled-components/native'
import { useTheme } from 'styled-components/native'

export const CoreBaseText = styled.Text`
  color: ${({ color }) => color};
  font-family: ${({ weight }) => weight};
  font-size: ${({ size }) => size};

  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth};
    `}

  ${props =>
    props.capitalize &&
    css`
      text-transform: capitalize;
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding.join(' ')};
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin.join(' ')};
    `}
  ${props =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `}

  ${props =>
    props.mb &&
    css`
      margin-bottom: ${props.mb}px;
    `};
  ${props =>
    props.mt &&
    css`
      margin-top: ${props.mt}px;
    `};
  ${props =>
    props.ml &&
    css`
      margin-left: ${props.ml}px;
    `};
  ${props =>
    props.mr &&
    css`
      margin-right: ${props.mr}px;
    `};

  ${props =>
    props.pb &&
    css`
      padding-bottom: ${props.pb}px;
    `};
  ${props =>
    props.pt &&
    css`
      padding-top: ${props.pt}px;
    `};
  ${props =>
    props.pl &&
    css`
      padding-left: ${props.pl}px;
    `};
  ${props =>
    props.pr &&
    css`
      padding-right: ${props.pr}px;
    `};
`

export const BaseText = props => {
  const theme = useTheme()

  const color = useMemo(
    () => theme.colors[props.color] || theme.colors.black,
    [props.color]
  )

  const weight = useMemo(() => {
    let _weight = theme.typography.weight.regular
    if (props.bold) {
      _weight = theme.typography.weight.bold
    } else if (props.semiBold) {
      _weight = theme.typography.weight.semiBold
    } else if (props.medium) {
      _weight = theme.typography.weight.medium
    }

    return _weight
  }, [props.bold, props.semiBold, props.medium])

  const size = useMemo(() => {
    let _size = theme.typography
    if (props.tall) {
      _size = _size.tall
    } else if (props.grande) {
      _size = _size.grande
    } else if (props.venti) {
      _size = _size.venti
    }

    if (props.xs) {
      _size = _size.xs
    } else if (props.sm) {
      _size = _size.sm
    } else if (props.md) {
      _size = _size.md
    } else if (props.lg) {
      _size = _size.lg
    } else if (props.xl) {
      _size = _size.xl
    }

    return _size
  }, [
    props.tall,
    props.grande,
    props.venti,
    props.xs,
    props.sm,
    props.md,
    props.lg,
    props.xl,
  ])

  return (
    <CoreBaseText {...{ ...props, weight, color, size }}>
      {props.children}
    </CoreBaseText>
  )
}

export default BaseText
