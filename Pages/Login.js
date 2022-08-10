import React, { useState,Component } from 'react';
import {
  SafeAreaView, Text, TextInput, StyleSheet, View, TouchableOpacity,ScrollView,Image,Button,Dimensions,Alert
} from 'react-native';
import Links from "../Request/Links"
const width  = Dimensions.get('window').width;
const paddingSize = 0.15 * width;



export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState('');


  const validateInput = () => {
    return email.trim().length > 0 &&
           password.trim().length > 0;
  }
  const alertPopUp = (message) => {
    Alert.alert(message)
  }
  const fetchRequest = async () => {
    if (validateInput==false) {
      setStatus('Input fields cannot be blank');
      return;
    }
    const formData = new FormData();
    formData.append('user-id', email);
    formData.append('user-password', password);


    let response = await fetch(Links.LoginLink, {
      method: "POST",
      body: formData,
    });
    response = await response.json()
    if (response.message == 'Success') {
      await setStatus("success");
      await alertPopUp("success");
      navigation.navigate('Home');
    } else {
      await setStatus(response.message);
      await alertPopUp(response.message);
    }
  };

  return (
    <SafeAreaView style={styles.white}>
    <ScrollView style={styles.white}>

    <View style={styles.logo}>
      <Image source={require('../assets/LoginPage/logo.png')}/>
    </View>

    <View>
    <Text style={styles.label}>Email</Text>
    <TextInput placeholder="Email"
      style={styles.inputField}
      onChangeText={(text) => setEmail(text)}
      autoCapitalize="none"
      />
     <View style={styles.line}></View>
    </View>


    <View>
    <Text style={styles.label}>Password</Text>
    <TextInput placeholder="Password"
      style={styles.inputField}
      onChangeText={(text) => setPassword(text)}
      autoCapitalize="none"
      secureTextEntry
      />
     <View style={styles.line}></View>
    </View>
    <View>
      <Text style={styles.underline}>Forgot password?</Text>
    </View>

    <TouchableOpacity style={styles.touchableOpacity}>
      {/* login button */}
      <Button title="Login" style={styles.buttonLogin} onPress={fetchRequest}/>
    </TouchableOpacity>

    <View style={styles.flex}>
      <Text>Or,</Text>
      <Text onPress={() => navigation.navigate('Register')} style={styles.boldunderline}> create an account</Text>
    </View>
    <Image source={require('../assets/LoginPage/city.png')} style={styles.bottomCenter}/>
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  white:{
    backgroundColor:'white'
  },
  logo:{
    marginTop:90,
    marginBottom:30,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLabel:{
    textAlign: 'center',
  },
  label:{
    fontWeight:'bold',
    margin:paddingSize,
    marginVertical:10,
  },
  line:{
    height:1,
    marginHorizontal:paddingSize,
    backgroundColor:'#3298FF',
  },
  underline: {
    marginTop:5,
    marginBottom:10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize:12,
    color:'#757575',
    marginHorizontal:paddingSize,
  },
  inputField: {
    height: 40,
    padding: 0,
    marginHorizontal:paddingSize,
    borderRadius: 15,
  },
  touchableOpacity: {
    backgroundColor:'#3298FF',
    marginHorizontal: paddingSize,
  },
  buttonLogin:{
    borderRadius: 10,
  },
  flex:{
    flexDirection:'row',
    justifyContent:'center',
  },
  // fixed here
  boldunderline: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  city:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: -1
  },
  bold:{
    fontWeight: 'bold'
  },
  scrollview:{
    showVerticalScrollIndicator: false,
  },
  bottomCenter: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 0
  },
  //unused
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginBtn: {
    alignItems: 'center',
    backgroundColor: '#62E37B',
    padding: 10,
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  text: {
    margin: 10,
    marginHorizontal: 20,
    fontSize: 18,
  },
  divider: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderHeight: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  registerBtn: {
    alignItems: 'center',
    backgroundColor: '#885AD1',
    padding: 10,
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  error: {
    color: 'red',
    fontWeight: '600',
    backgroundColor: '#FFC4C4',
    padding: 10,
  },
});
