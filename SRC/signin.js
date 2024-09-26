import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

// Replace with your backend API URL
const API_URL = 'https://citizens-5.onrender.com';

export const signUp = async (email, password, confirmPassword,name) => {
  if (password !== confirmPassword) {
    return { error: 'Passwords do not match' };
  }

  try {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name:name
      }),
    });

    if (!response.ok) {
   return   alert("signup failed")
    }

    const data = await response.json();
    alert("successfully signed up")
    return data;
  } catch (err) {
    console.log('error', err);
    return { error: 'An error occurred' };
  }
};

const SignUpComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [name,setName]= useState("")

  const handleSignUp = async () => {
     signUp(email, password, confirmPassword,name);
   
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  };

  return (
    <View style={{ padding: 20 }}>
       <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12 }}
      placeholder="name"
      value={name}
      onChangeText={setName}
      autoCapitalize="none"
    />
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
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12 }}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      {error && <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>}
    </View>
  );
};

export default SignUpComponent;
