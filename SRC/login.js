import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

// Replace with your backend API URL
const API_URL = 'https://citizens-5.onrender.com';


 const login =  (email,password,navigation) => {
  
    fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then(res=>{
      if (res.ok) {
        
        return res.json()
      }
      else{
        // setError("Login failed")
        
        return { error: 'Login failed' };

      }
    })
    .then(data=>{

      AsyncStorage.setItem('token', data.token);
      console.log(data);

if(data.token!=="unde" && data!==null && !data.error){
 return navigation.navigate('Report Page')

}
alert("check login details")

    })
   

   
   .catch (err => {
    return { error: 'An error occurred' };
  })

};

const LoginComponent = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigation = useNavigation()

  const handleLogin = async () => {
  login(email,password,navigation)

  setEmail("")
    setPassword("")
  
 
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12 }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12 }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button title="Login" onPress={handleLogin} />
      {error && <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>}
    </View>
  );
};

export default LoginComponent;
