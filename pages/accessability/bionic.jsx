import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import Api from '../../api'
import Text from '../../components/text'

import Slider from '@react-native-community/slider'
import HelpIcon from '../../components/icons/help-icon'

import DotsGridMini from '../../assets/accessability/dots_grid_mini.svg'
import DotsGridNormal from '../../assets/accessability/dots_grid_normal.svg'

export default function BionicSection(contentChange,text) {
  const theme = useTheme()
  const [fixation, setFixation] = useState()

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
    text = cleanText(text)
    const data = createFormData({ text, fixation, saccade })
    const response = await Api.post('bionicconfig', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).catch((err) => {
      console.log(err)
    })
    const { result, result_raw, bounding_box } = response.data
    contentChange(result)
    console.log(result)
  }, [])

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
          onSlidingComplete={() =>
            console.log('sliding complete') & fetchBionicWithConfig()
          }
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
          onSlidingComplete={() =>
            console.log('sliding complete') & fetchBionicWithConfig()
          }
        />
        <DotsGridNormal />
      </Container>
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
