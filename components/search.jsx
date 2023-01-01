import styled from 'styled-components/native'

import theme from '../theme'

export const Search = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.grey4,
})`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white2};
  padding-left: 8px;
  font-family: ${({ theme }) => theme.typography.weight.regular};
  font-size: ${({ theme }) => theme.typography.tall.md};
`

export default Search