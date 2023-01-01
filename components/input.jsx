import styled from 'styled-components/native'

import theme from '../theme'

export const Input = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.grey4,
})`
  border: ${({ theme }) => '2px solid ' + theme.colors.grey2};
  background-color: ${({ theme }) => theme.colors.white2};
  border-radius: 8px;
  min-height: 56px;
  padding-left: 15px;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.typography.weight.regular};
  font-size: ${({ theme }) => theme.typography.tall.md};
`

export default Input
