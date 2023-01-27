import { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import Markdown from 'react-native-markdown-package'
import styled from 'styled-components/native'
import { useReadingThemeStore } from '../../store/reading-theme-store'
import { useTextContentStore } from '../../store/text-content-store'
import { useTextStyleStore } from '../../store/text-styling-store'

export default function Main() {
  const textFontFamily = useTextStyleStore((state) => state.fontFamily)
  const textFontFamilyStrong = useTextStyleStore(
    (state) => state.fontFamilyStrong
  )
  const textSize = useTextStyleStore((state) => state.size)
  const textLineHeight = useTextStyleStore((state) => state.lineHeight)
  const textLetterSpacing = useTextStyleStore((state) => state.letterSpacing)
  const textAlignment = useTextStyleStore((state) => state.alignment)
  const readingTheme = useReadingThemeStore((state) => state.readingTheme)

  const markdown = useTextContentStore((state) => state.markdown)

  const markdownStyle = StyleSheet.create({
    paragraph: {
      textAlign: textAlignment,
      fontSize: textSize,
      lineHeight: textLineHeight,
      letterSpacing: textLetterSpacing,
    },
    text: {
      fontSize: textSize,
      fontFamily: textFontFamily,
      color: readingTheme.fg,
    },
    strong: {
      fontSize: textSize,
      fontFamily: textFontFamilyStrong,
      fontWeight: 'normal',
      color: readingTheme.fg,
    },
  })

  // forceUpdate state is used to force re-rendering of Markdown component
  // when configStore is updated
  const [forceUpdate, setForceUpdate] = useState(false)

  useEffect(() => {
    setForceUpdate(!forceUpdate)
  }, [
    textFontFamily,
    textSize,
    textLineHeight,
    textLetterSpacing,
    textAlignment,
    readingTheme,
  ])

  console.log({
    markdownStyle,
    markdown,
    state: useTextStyleStore((state) => state),
  })

  return (
    <ScrollViewContainer
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1 }}
    >
      {markdown ? (
        <Markdown styles={markdownStyle} key={forceUpdate}>
          {markdown}
        </Markdown>
      ) : (
        <Text style={{ textAlign: 'center', padding: 50 }}>
          No result, please try again
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
  padding: 20px;
`
