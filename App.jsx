
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import {
  StyleSheet
} from 'react-native';
//
const Stack = createStackNavigator();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsSignedIn(true);
      }
    };

    checkToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {isSignedIn && <Stack.Screen name="SignIn" component={SignInScreen} />}
        {isSignedIn && <Stack.Screen name="SignUp" component={SignUpScreen} />}
        {/* Add other screens here as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#45D6B6',
    marginTop: 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderColor: 'gray',
    borderRadius: 5,
  },
  response: {
    marginTop: 20,
    padding: 10,
    color: 'black',
  },
  /* 
    image: {
      marginTop: 20,
      width: 200, // Set the width and height as needed
      height: 200,
      resizeMode: 'cover', // Adjust the resize mode as needed
    },
     */
  playBtn: {
    padding: 20,
  },
});

export default App;
