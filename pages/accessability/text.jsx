import React, { useCallback, useRef, useMemo, useState } from "react";
import styled, { useTheme } from 'styled-components/native'
import { View} from "react-native";
import Text from "../../components/text";


import SizeIcon from "../../components/icons/size-icon"
import SpaceIcon from "../../components/icons/space-icon"
import ParagraphIcon from "../../components/icons/paragraph-icon"
import HeightIcon from "../../components/icons/height-icon"


export default function TextSection() {
  const theme = useTheme()

  return (
    <View>
          <Text
            color={theme.colors.black}
            family={theme.typography.family.bold}
            size={theme.typography.label.sz}
            mb={15}
            >
            Text Style
          </Text>
          <CustomContainer>
            <ButtonContainer
            style={{ width:68.75, height: 44, justifyContent: 'center' }}
            >
                <SizeIcon/>
            </ButtonContainer>
            <ButtonContainer
            style={{ width:68.75, height: 44, justifyContent: 'center' }}
            >
                <HeightIcon/>
            </ButtonContainer>
            <ButtonContainer
            style={{ width:68.75, height: 44, justifyContent: 'center' }}
            >
                <SpaceIcon/>
            </ButtonContainer>
            <ButtonContainer
            style={{ width:68.75, height: 44, justifyContent: 'center' }}
            >
                <ParagraphIcon/>
            </ButtonContainer>
          </CustomContainer>
          <Text
            color={theme.colors.black}
            family={theme.typography.family.bold}
            size={theme.typography.label.sz}
            mb={15}
            >
            Font Family
          </Text>

    </View>
  );
}

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
  border: 2px solid #E0E0E0;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.white};
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.grey1};
  border-radius: 5px;
`


