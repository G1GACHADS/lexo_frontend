import { ActivityIndicator, Dimensions, View } from 'react-native'
import styled, { css, useTheme } from 'styled-components/native'

const CoreButton = styled.Pressable`
  max-width: ${props =>
    props.sm
      ? Dimensions.get('window').width * 0.5
      : Dimensions.get('window').width - 30}px;

  ${props =>
    props.stroke &&
    css`
      border: 2px solid ${props.strokeColor};
    `}

  height: 56px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: ${props =>
    props.disabled
      ? props.theme.colors.grey1
      : props.backgroundColor ?? props.theme.colors.primary};
  border-radius: 5px;

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
`

const Title = styled.Text`
  color: ${({ titleColor, theme }) => titleColor ?? theme.colors.white1};
  font-family: ${({ theme }) => theme.typography.weight.semiBold};
  font-size: ${({ theme }) => theme.typography.tall.lg};
`

export const Button = ({
  sm,
  disabled,
  loading,
  loadingColor,
  title,
  titleColor,
  stroke,
  strokeColor,
  icon,
  backgroundColor,
  rippleColor,
  mb,
  mt,
  ml,
  mr,
  onPress,
}) => {
  const theme = useTheme()
  return (
    <CoreButton
      sm={sm}
      stroke={stroke}
      strokeColor={strokeColor}
      backgroundColor={backgroundColor}
      android_ripple={{
        color: rippleColor ?? theme.colors.primaryDark,
      }}
      disabled={disabled}
      mb={mb}
      mt={mt}
      ml={ml}
      mr={mr}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator
          size="large"
          color={loadingColor ?? theme.colors.white1}
        />
      ) : (
        <>
          {icon && (
            <View style={{ marginRight: 10, marginBottom: 6 }}>{icon}</View>
          )}

          <Title titleColor={titleColor} icon={icon}>
            {title}
          </Title>
        </>
      )}
    </CoreButton>
  )
}

export default Button
