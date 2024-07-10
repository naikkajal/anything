import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from '../../firebase';  

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleRegister = () => {
    navigation.navigate("Signup");
  };
  const handleAlert = () => {
    navigation.navigate("Alert");
  };
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message));
  };
  return (
    <View style={styles.welcontainer}>
      <Text style={styles.weltext}>Welcome</Text>
      <Text style={styles.logtext}>Sign in to your Account</Text>
      <View style={styles.usercontainer}>
        <TextInput style={styles.usertext}
          placeholder='Username'
          placeholderTextColor={"black"}
        />

      </View>
      <View style={styles.passcontainer}>
      <TextInput style={styles.usertext}
          secureTextEntry
          placeholder='Password'
          placeholderTextColor={"black"}
        />  
      </View>
      <Text style={styles.forgottext}>Forgot Password?</Text>
      <View style={styles.signinbutton}>
      <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.signintext}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.createtext}>
          Don't have an Account?<Text style={{textDecorationLine:"underline"}}>Create</Text>
        </Text>
      </TouchableOpacity>
      </View>
    </View>

  )
}

export default Login

const styles = StyleSheet.create({
    welcontainer:{
        alignContent:"center"
    },
    weltext:{
        textAlign:"center",
        marginTop:100,
        fontSize:35,
        fontWeight:"bold"
    },
    logtext:{
        textAlign:"center",
        marginTop:10,
        fontSize:20,
        fontWeight:"bold"
    },
    usercontainer:{
      backgroundColor:"lightgrey",
      flexDirection:"row",
      marginTop:70,
      height:60,
      marginHorizontal:50,
      borderRadius:50
    },
    usertext:{
      marginLeft:30
    },
    passcontainer:{
      backgroundColor:"lightgrey",
      flexDirection:"row",
      marginTop:40,
      height:60,
      marginHorizontal:50,
      borderRadius:50
    },
    forgottext:{
      textAlign:"right",
      marginRight:60,
      marginTop:15,
      color:"darkblue"
    },
    signinbutton:{ 
      backgroundColor:"firebrick",
      height:50,
      marginTop:30,
      marginHorizontal:50,
      borderRadius:50,
      alignItems:"center",
    },
    signintext:{
      textAlign:"centre",
      color:"white",
      fontSize:20,
      marginVertical:10
    },
    createtext:{
      textAlign:"center",
      marginTop:200
    }
})