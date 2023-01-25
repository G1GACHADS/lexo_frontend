import { useEffect, useState } from 'react'
import { Text } from 'react-native'
import Markdown from 'react-native-markdown-package'
import styled from 'styled-components/native'
import { useTextStyleStore } from '../../store/text-styling-store'
import { textContent } from '../../store/text-content-store'
export default function Main() {
  const textSize = useTextStyleStore((state) => state.size)
  const textLineHeight = useTextStyleStore((state) => state.lineHeight)
  const textLetterSpacing = useTextStyleStore((state) => state.letterSpacing)
  const markdown = textContent((state) => state.markdown)
  const markdownStyle = {
    text: {
      textAlign: 'right',
      color: 'black',
      fontSize: textSize,
      lineHeight: textLineHeight,
      letterSpacing: textLetterSpacing,
    },
  }

  // updateCount state is used to force re-rendering of Markdown component
  // when configStore is updated
  const [updateCount, setUpdateCount] = useState(0)
  const [content, setContent] = useState('')
  useEffect(() => {
    setUpdateCount(updateCount + 1)
    setContent(markdown)
    console.log(content)
  }, [textSize, textLineHeight, textLetterSpacing, markdown])

  return (
    <ScrollViewContainer
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1 }}
    >
      {content ? (
        <Markdown styles={markdownStyle} key={updateCount}>
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
