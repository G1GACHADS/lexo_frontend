import styled, { useTheme } from 'styled-components/native'

import BaseText from './base-text'

const StatusBg = styled.View`
  padding: 1px 8px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 4px;
  align-self: flex-start;
`

export const Status = ({ paid, unpaid, returned, cancelled }) => {
  const theme = useTheme()

  let textColor, bgColor
  if (paid || returned) {
    textColor = theme.colors.success1
    bgColor = theme.colors.success2
  }

  if (unpaid || cancelled) {
    textColor = theme.colors.danger1
    bgColor = theme.colors.danger2
  }

  let statusText
  if (paid) {
    statusText = 'Paid'
  } else if (unpaid) {
    statusText = 'Unpaid'
  } else if (returned) {
    statusText = 'Returned'
  } else if (cancelled) {
    statusText = 'Cancelled'
  }

  return (
    <StatusBg bgColor={bgColor}>
      <BaseText color={textColor} semiBold tall sm>
        {statusText}
      </BaseText>
    </StatusBg>
  )
}

export default Status
