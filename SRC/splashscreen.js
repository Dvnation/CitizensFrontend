

import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomePage from './Home';

const SplashScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token!== "undefined" && token!==null) {
        // If token exists, navigate to main app
        console.log(token);
        navigation.navigate('Home');
      } else {
        // If no token, navigate to login
        navigation.navigate('AuthScreen');
      }
      setLoading(false);
    };

    checkToken();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
    <HomePage navigation={navigation}/>
    {/* <View style={{justifyContent:"center",alignSelf :"center", flex:1}}>
      <Text style={{fontSize:30}}>REPORT APP</Text>
    </View> */}
    </>
  )
};

export default SplashScreen;
