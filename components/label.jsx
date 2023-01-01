import styled from 'styled-components/native'

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.tall.lg};
`

export default Label
