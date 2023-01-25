import { useMemo } from 'react'
import styled, { css, useTheme } from 'styled-components/native'

export const CoreBaseText = styled.Text`
  color: ${({ color }) => color};
  font-family: ${({ family }) => family};
  font-size: ${({ size }) => size};

  ${(props) =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth};
    `}

  ${(props) =>
    props.capitalize &&
    css`
      text-transform: capitalize;
    `}
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding.join(' ')};
    `}
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin.join(' ')};
    `}
  ${(props) =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `}

  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb}px;
    `};
  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt}px;
    `};
  ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml}px;
    `};
  ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr}px;
    `};

  ${(props) =>
    props.pb &&
    css`
      padding-bottom: ${props.pb}px;
    `};
  ${(props) =>
    props.pt &&
    css`
      padding-top: ${props.pt}px;
    `};
  ${(props) =>
    props.pl &&
    css`
      padding-left: ${props.pl}px;
    `};
  ${(props) =>
    props.pr &&
    css`
      padding-right: ${props.pr}px;
    `};
`

export const BaseText = (props) => {
  const theme = useTheme()

  const color = useMemo(
    () => theme.colors[props.color] || theme.colors.black,
    [props.color]
  )

  const family = useMemo(() => {
    let _family = theme.typography.family.medium
    if (props.bold) {
      _family = theme.typography.family.bold
    } else if (props.semiBold) {
      _family = theme.typography.family.semiBold
    } else if (props.robotoSerifMedium) {
      _family = theme.typography.family.robotoSerifMedium
    } else if (props.robotoSerifSemiBold) {
      _family = theme.typography.family.robotoSerifSemiBold
    } else if (props.robotoSerifBold) {
      _family = theme.typography.family.robotoSerifBold
    } else if (props.ptSerifRegular) {
      _family = theme.typography.family.ptSerifRegular
    } else if (props.ptSerifBold) {
      _family = theme.typography.family.ptSerifBold
    } else if (props.interMedium) {
      _family = theme.typography.family.interMedium
    } else if (props.interSemiBold) {
      _family = theme.typography.family.interSemiBold
    } else if (props.interBold) {
      _family = theme.typography.family.interBold
    } else if (props.openDyslexicRegular) {
      _family = theme.typography.family.openDyslexicRegular
    } else if (props.openDyslexicBold) {
      _family = theme.typography.family.openDyslexicBold
    } else if (props.comicRegular) {
      _family = theme.typography.family.comicRegular
    } else if (props.comicBold) {
      _family = theme.typography.family.comicBold
    }

    return _family
  }, [
    props.bold,
    props.semiBold,
    props.robotoSerifMedium,
    props.robotoSerifSemiBold,
    props.robotoSerifBold,
    props.ptSerifRegular,
    props.ptSerifBold,
    props.interMedium,
    props.interSemiBold,
    props.interBold,
  ])

  const size = useMemo(() => {
    let _size = theme.typography
    if (props.heading) {
      _size = _size.heading
    } else if (props.subheading) {
      _size = _size.subheading
    } else if (props.body) {
      _size = _size.body
    } else if (props.label) {
      _size = _size.label
    } else if (props.mini) {
      _size = _size.mini
    }

    _size = _size.sz

    return _size
  }, [props.tall, props.grande, props.venti])

  return (
    <CoreBaseText {...{ ...props, family, color, size }}>
      {props.children}
    </CoreBaseText>
  )
}

export default BaseText
