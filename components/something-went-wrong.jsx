import styled, { useTheme } from 'styled-components'
import XIcon from '../assets/global/errorToGetContent.svg'
import Adjust from './icons/icon-adjust'
import Retake from './icons/icon-retake'
import Text from './text'

export default function SomethingWentWrong() {
  const theme = useTheme()
  return (
    <ViewFullScreen>
      <Card>
        <AlignHorizontally>
          <XIcon style={{ marginVertical: 10 }} />
        </AlignHorizontally>
        {/* <Image source={require("https://via.placeholder.com/350x150")}/> */}
        <Text
          color={theme.colors.black}
          family={theme.typography.family.bold}
          size={theme.typography.heading.sz}
          textAlign="center"
          mb={10}
        >
          Something went wrong
        </Text>
        <Text
          color={theme.colors.black}
          family={theme.typography.family.medium}
          size={theme.typography.subheading.sz}
          textAlign="center"
          mb={10}
        >
          Try adjust the image or retake the picture.
        </Text>
        <AlignHorizontally>
          <Adjust spacing={10} text="Adjust" />
          <Retake
            spacing={10}
            text="Retake"
            style={{ backgroundColor: theme.colors.black, borderRadius: 20 }}
          />
        </AlignHorizontally>
      </Card>
    </ViewFullScreen>
  )
}

const Card = styled.View`
  padding: 10px;
  background: white;
  text-align: center;
  width: 270px;
  border-radius: 20px;
`

const ViewFullScreen = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const AlignHorizontally = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
