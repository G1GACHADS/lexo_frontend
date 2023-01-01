import styled, { css } from 'styled-components/native'

export const Text = styled.Text`
  color: ${({ color }) => color};
  font-family: ${({ weight }) => weight};
  font-size: ${({ size }) => size};

  ${props => props.capitalize && `text-transform: capitalize`}
  ${props => props.padding && `padding: ${props.padding}`}
  ${props => props.margin && `margin: ${props.margin}`}
  ${props => props.textAlign && `text-align: ${props.textAlign}`}

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

export default Text
