import React, { useRef, useMemo, useState } from "react";
import styled, { useTheme } from 'styled-components/native'
import { View} from "react-native";
import Text from "../../components/text";

import HelpIcon from "../../components/icons/help-icon"

export default function BionicSection() {
  const theme = useTheme()

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
    </View>
  );
}

const Container = styled.View`
    display: flex;
    justify-content:space-between;
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
  border: 2px solid #E0E0E0;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.white};
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.grey1};
  border-radius: 5px;
`