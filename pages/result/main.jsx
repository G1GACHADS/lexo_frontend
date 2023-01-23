import { useEffect, useState } from 'react'
import { Text } from 'react-native'
import Markdown from 'react-native-markdown-package'
import styled from 'styled-components/native'
import { useTextStyleStore } from '../../store/text-styling-store'

export default function Main({ content }) {
  const textFontFamily = useTextStyleStore((state) => state.fontFamily)
  const textSize = useTextStyleStore((state) => state.size)
  const textLineHeight = useTextStyleStore((state) => state.lineHeight)
  const textLetterSpacing = useTextStyleStore((state) => state.letterSpacing)

  const markdownStyle = {
    text: {
      textAlign: 'right',
      color: 'black',
      fontFamily: textFontFamily,
      fontSize: textSize,
      lineHeight: textLineHeight,
      letterSpacing: textLetterSpacing,
    },
  }

  // forceUpdate state is used to force re-rendering of Markdown component
  // when configStore is updated
  const [forceUpdate, setForceUpdate] = useState(false)

  useEffect(() => {
    setForceUpdate(!forceUpdate)
  }, [textFontFamily, textSize, textLineHeight, textLetterSpacing])

  return (
    <ScrollViewContainer
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1 }}
    >
      {content ? (
        <Markdown styles={markdownStyle} key={forceUpdate}>
          {content}
        </Markdown>
      ) : (
        <Text style={{ textAlign: 'center', padding: 50 }}>
          There is no result
        </Text>
      )}
    </ScrollViewContainer>
  )
}

const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  margin: 10px auto;
  width: 100%;
  height: 100%;
  padding: 0 10px;
`
