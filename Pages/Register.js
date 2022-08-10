import React, { useState } from 'react';
import {
  SafeAreaView, Text,Alert, TextInput, StyleSheet, View, TouchableOpacity,ScrollView,Image,Button,Dimensions
} from 'react-native';
import Links from "../Request/Links"

const width  = Dimensions.get('window').width;
const paddingSize = 0.15 * width;

export default function Register({ navigation }) {

  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState('');


  const validateInput = () => {
    return email.trim().length > 0 &&
           password.trim().length > 0 &&
           phonenumber.trim().length > 0 &&
           username.trim().length > 0;
  }
  const alertPopUp = (message) => {
    Alert.alert(message)
  }
  const fetchRequest = async () => {
    if (validateInput==false) {
      await alertPopUp('Input fields cannot be blank');
      return;
    }
    const formData = new FormData();
    formData.append('user-email', email);
    formData.append('user-phone', phonenumber);
    formData.append('user-name', username);
    formData.append('user-password', password);

    let response = await fetch(Links.RegisterLink, {
      method: "Post",
      body: formData,
    });
    response = await response.json()

    if (response.message == 'Success') {
      await setStatus("success");
      await alertPopUp("success");
      await navigation.navigate('Login');
    } else {
      await setStatus(response.message);
      await alertPopUp(status);
    }
  };

  return (
    <SafeAreaView style={styles.blue}>
    <ScrollView style={styles.blue}>

    <View style={styles.heading}>
      <Image source={require('../assets/RegisterPage/registerImg.png')} style={{transform:[{scale:0.8}]} }/>
    </View>
    <View style={styles.container}>
      <View>
      <Text style={styles.labelHeading}>Create an Account</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="Email"
        style={styles.inputField}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        />
      <View style={styles.line}></View>
      </View>


      <View>
      <Text style={styles.label}>Phone Number</Text>
      <TextInput placeholder="089621760818"
        style={styles.inputField}
        onChangeText={(text) => setPhonenumber(text)}
        autoCapitalize="none"
        />
      <View style={styles.line}></View>
      </View>

      <View>
      <Text style={styles.label}>username</Text>
      <TextInput placeholder="lisaexplores"
        style={styles.inputField}
        onChangeText={(text) => setUsername(text)}
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


      <TouchableOpacity style={styles.touchableOpacity}>
        {/* login button */}
        <Button title="Register" style={styles.buttonLogin} onPress={fetchRequest}/>
      </TouchableOpacity>

      <View style={styles.flex}>
        <Text >already have an account?</Text>
        <Text onPress={() => navigation.navigate('Login')} style={styles.boldunderline}> Login Instead</Text>
      </View>

    </View>


    </ScrollView>
  </SafeAreaView>
    // <SafeAreaView>

    //   <View
    //     style={{
    //       marginBottom: 10,
    //     }}
    //   >

    //     <View>
    //       {invalidRegistration && <Text style={styles.error}>{status}</Text>}
    //     </View>

    //     <Text style={styles.text}>Email</Text>
    //     <TextInput
    //       style={styles.textInput}
    //       onChangeText={(text) => setEmail(text)}
    //       autoCapitalize="none"
    //     />

    //     <Text style={styles.text}>Phone</Text>
    //     <TextInput
    //       style={styles.textInput}
    //       onChangeText={(text) => setPhone(text)}
    //       keyboardType="numeric"
    //     />

    //     <Text style={styles.text}>Name</Text>
    //     <TextInput
    //       style={styles.textInput}
    //       onChangeText={(text) => setName(text)}
    //     />

    //     <Text style={styles.text}>Password</Text>
    //     <TextInput
    //       style={styles.textInput}
    //       onChangeText={(text) => setPassword(text)}
    //       autoCapitalize="none"
    //       secureTextEntry
    //     />

    //     <View style={styles.checkboxContainer}>
    //       <BouncyCheckbox
    //         text="I agree to the terms and conditions"
    //         textStyle={{
    //           textDecorationLine: 'none',
    //           color: '#000',
    //         }}
    //         size={30}
    //         fillColor="#885AD1"
    //         onPress={() => setIsAgreed(!isAgreed)}
    //       />
    //     </View>

    //     <TouchableOpacity
    //       style={styles.registerBtn}
    //       onPress={sendRequest}
    //     >
    //       <Text
    //         style={{
    //           color: 'blue',
    //           fontSize: 18,
    //         }}
    //       >
    //         Register
    //       </Text>
    //     </TouchableOpacity>
    //   </View>

    // </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  blue:{
    backgroundColor:'#3298FF'
  },
  heading:{
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:paddingSize/4,
  },
  headingTitle:{
    fontSize:28,
    fontWeight:'semibold',
    color:'#fff',
  },
  logo:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLabel:{
    textAlign: 'center',
  },
  labelHeading:{
    paddingVertical:15,
    fontWeight:'bold',
    fontSize:20,
    margin:paddingSize,
    marginVertical:10,
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
    marginVertical: 10,
  },
  buttonLogin:{
    borderRadius: 10,
  },
  flex:{
    flexDirection:'row',
    justifyContent:'center',
    marginVertical: 10,
    marginBottom:20,
  },
  container: {
    flex:1.5,
    backgroundColor:'white',
    borderTopStartRadius:30,
    borderTopEndRadius:30,
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