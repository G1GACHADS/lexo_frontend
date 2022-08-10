import React, { useState,useEffect } from 'react';
import {
  SafeAreaView, Text, TextInput, StyleSheet, View, TouchableOpacity,ScrollView,Image,Button,Dimensions
} from 'react-native';

import Links from "../Request/Links"

const width  = Dimensions.get('window').width;
const paddingSize = 0.15 * width;

export default function Home() {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isErrorContent, setErrorContent] = useState(false);
  useEffect(()=>{
    fetch(Links.DestinationLink)
     .then(response => response.json())
     .then(res => {
        setIsLoading(false);
        setIsError(false);
        setPlaces(res.data);
     },
      (error) => {
        setIsLoading(false);
        setIsError(true);
        setErrorContent(error);
      }
      )},[])

  const populatePlace=()=>{
    return (places.map((place)=>(
      <View  key={place['place-id']} style={{ display:'flex',backgroundColor:'#fff',marginHorizontal:paddingSize/4,paddingHorizontal :10,paddingVertical:10,borderRadius :10,marginTop:10}}>
      <Image source ={{ uri:place["place-thumb-image"]}} style={{ marginRight:10 ,width:300,height:200 }}/>
      <View >
            <Text style={{ fontSize:20,fontWeight:'bold' }}>{place["place-name"]}</Text>
            <View style={{ flexDirection : 'row' ,flexWrap:'wrap' }}>
            <Text style={{ fontSize:12, marginRight : 10,fontWeight:'bold' }}>Rating</Text>
            <Text style={{ fontSize:12,fontWeight:'bold' }}>{place["place-rating"]|"0"}</Text>
            </View>

            <View style={{ flexDirection : 'row',flexWrap:'wrap'}}>
              <Text style={{ marginRight : 5 ,fontSize:12,fontWeight:'bold'}}>Min budget</Text>
              <Text style={{ marginRight : 10,fontSize:12 ,fontWeight:'bold'}}>{place["place-budget-min"]}</Text>
              <Text style={{ marginRight : 5 ,fontWeight:'bold'}}>Max budget</Text>
              <Text style={{ marginRight : 10,fontSize:12 ,fontWeight:'bold'}}>{place["place-budget-max"]}</Text>
            </View>

            <View style={{ flexDirection : 'row',flexWrap:'wrap' }}>
              <Text style={{ marginRight : 5 ,fontSize:12,fontWeight:'bold'}}>Open at</Text>
              <Text style={{ marginRight : 10,fontSize:12,fontWeight:'bold'}}>{place["open-time"]}</Text>
              <Text style={{ marginRight : 5 ,fontSize:12,fontWeight:'bold'}}>Closes at</Text>
              <Text style={{ marginRight : 10,fontSize:12,fontWeight:'bold'}}>{place["close-time"]}</Text>
            </View>
            <View style={{ }}>
                {/* <Favicon url={[]} /> */}
                <Text style={{ fontSize:12,flexWrap:'wrap'}}>{place["place-address"]}</Text>
            </View>
      </View>
     </View>
    )))
  }
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollview}>
        <View style={{ paddingHorizontal:paddingSize/8}}>

        <Image source ={require("../assets/HomePage/explore.png")} style={styles.heading}/>
        <Image source ={require("../assets/HomePage/gmaps.png")} style={styles.gmaps} />
        <TextInput style={styles.inputField}/>

        {/* populate places */}
        {populatePlace()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  blue:{
    backgroundColor:'#3298FF'
  },
  heading:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:paddingSize,
    marginHorizontal:paddingSize/2
  },
  gmaps:{
    // marginHorizontal:paddingSize,
    marginTop:10,
    transform: [{ scale: 1 }],
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
    marginHorizontal:paddingSize/4,
    borderRadius: 15,
    borderWidth: 1,
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