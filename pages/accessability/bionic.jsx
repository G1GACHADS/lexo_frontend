import React, { useCallback, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import Text from '../../components/text'

import Slider from '@react-native-community/slider'
import HelpIcon from '../../components/icons/help-icon'

import DotsGridMini from '../../assets/accessability/dots_grid_mini.svg'
import DotsGridNormal from '../../assets/accessability/dots_grid_normal.svg'

import { useTextContentStore } from '../../store/text-content-store'

import Api from '../../api'
export default function BionicSection() {
  const theme = useTheme()
  const markdown = useTextContentStore((state) => state.markdown)
  const setContent = useTextContentStore((state) => state.setContent)
  const [isLoading, setIsLoading] = useState(false)
  const [saccade, setSaccade] = useState(10)
  const [fixation, setFixation] = useState(1)
  const createFormData = ({ text, fixation, saccade }) => {
    const data = new FormData()
    data.append('text', text)
    data.append('fixation', fixation)
    data.append('saccade', saccade)
    return data
  }
  const cleanText = (text) => {
    return text.replace(/\*/g, '')
  }
  const fetchBionicWithConfig = useCallback(async () => {
    setIsLoading(true)
    let text = cleanText(markdown)
    //demo update content
    // const markdownBoldAndRegularTextParagraph = [
    //   '**hi** **this** **is** **a** **test**',
    //   '**hi** **this** **is** **a** **test2**',
    //   '**hi** **this** **is** **a** **test3**',
    //   '**hi** **this** **is** **a** **test4**',
    //   '**hi** **this** **is** **a** **test5**',
    // ]
    // setTimeout(() => {
    //   const random = Math.round(
    //     Math.random() * markdownBoldAndRegularTextParagraph.length
    //   )
    //   console.log(random)
    //   const newText = markdownBoldAndRegularTextParagraph[random]
    //   setContent(newText)
    // }, 100)
    // console.log('normal text:' + text)
    let data = createFormData({ text, fixation, saccade })
    // console.log(data)
    const response = await Api.post('bionicconfig', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).catch((err) => {
      console.log(err)
    })

    setIsLoading(false)

    const { result, result_raw, bounding_box } = response.data
    setContent(result)
    // console.log('result text:' + result)
    // console.log('result_raw text:' + result_raw)
    // console.log('bounding_box text:' + bounding_box)
  }, [markdown])

  return (
    <View>
      <Container>
        <Text
          color={theme.colors.black}
          family={theme.typography.family.bold}
          size={theme.typography.label.sz}
          mb={15}
        >
          Fixation
        </Text>
        <HelpIcon />
      </Container>
      <Container>
        <DotsGridMini />
        <Slider
          style={{ width: '80%', height: 50 }}
          minimumValue={1}
          maximumValue={5}
          step={1}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          thumbTintColor="#000000"
          onValueChange={(value) => setFixation(value)}
          onSlidingComplete={() => fetchBionicWithConfig()}
        />
        <DotsGridNormal />
      </Container>
      <Container>
        <Text
          color={theme.colors.black}
          family={theme.typography.family.bold}
          size={theme.typography.label.sz}
          mb={15}
        >
          Saccade
        </Text>
        <HelpIcon />
      </Container>
      <Container>
        <DotsGridMini />
        <Slider
          style={{ width: '80%', height: 40 }}
          minimumValue={10}
          maximumValue={50}
          step={10}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          thumbTintColor="#000000"
          onValueChange={(value) => setSaccade(value)}
          onSlidingComplete={() => fetchBionicWithConfig()}
        />
        <DotsGridNormal />
      </Container>
      {isLoading && (
        <ActivityIndicator size="large" color={theme.colors.black} />
      )}
    </View>
  )
}

const Container = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

const CustomContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

const ButtonContainer = styled.Pressable`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px 10px;
  border: 2px solid #e0e0e0;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.white};
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.grey1};
  border-radius: 5px;
`
