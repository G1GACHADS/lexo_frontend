import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components/native'

export const Loading = () => {
  const theme = useTheme()
  return <ActivityIndicator size="large" color={theme.colors.black} />
}

export default Loading
