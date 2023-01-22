import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function ThreeButtonToggle() {
  const [isFirstActive, setIsFirstActive] = useState(false);
  const [isSecondActive, setIsSecondActive] = useState(false);
  const [isThirdActive, setIsThirdActive] = useState(false);

  const handleFirstPress = () => {
    setIsFirstActive(true);
    setIsSecondActive(false);
    setIsThirdActive(false);
  };

  const handleSecondPress = () => {
    setIsFirstActive(false);
    setIsSecondActive(true);
    setIsThirdActive(false);
  };

  const handleThirdPress = () => {
    setIsFirstActive(false);
    setIsSecondActive(false);
    setIsThirdActive(true);
  };

  return (
    <View>
      <Button
        title="Button 1"
        color={isFirstActive ? 'green' : 'black'}
        onPress={handleFirstPress}
      />
      <Button
        title="Button 2"
        color={isSecondActive ? 'green' : 'black'}
        onPress={handleSecondPress}
      />
      <Button
        title="Button 3"
        color={isThirdActive ? 'green' : 'black'}
        onPress={handleThirdPress}
      />
      {!isFirstActive && !isSecondActive && !isThirdActive && <InitialComponent1 />}
      {isFirstActive && <FirstComponent />}
      {isSecondActive && <SecondComponent />}
      {isThirdActive && <ThirdComponent />}
    </View>
  );
}

const InitialComponent1 = () => <Text>Please select button 1</Text>
const InitialComponent2 = () => <Text>Please select button 2</Text>
const InitialComponent3 = () => <Text>Please select button 3</Text>
const FirstComponent = () => <Text>This is the content for button 1</Text>
const SecondComponent = () => <Text>This is the content for button 2</Text>
const ThirdComponent = () => <Text>This is the content for button 3</Text>

export default ThreeButtonToggle;
