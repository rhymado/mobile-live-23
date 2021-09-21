import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MyHeader from './src/components/Header/component';
import Home from './src/screens/Home/component';
import Profile from './src/screens/Profile/component';

const App = () => {
  const {Navigator: StackNav, Screen: StackScreen} = createStackNavigator();
  return (
    <NavigationContainer>
      <StackNav initialRouteName="Home">
        <StackScreen
          name="Profile"
          options={{
            header: props => <MyHeader {...props} text="Profil User" />,
          }}>
          {props => <Profile {...props} />}
        </StackScreen>
        <StackScreen name="Home">{props => <Home {...props} />}</StackScreen>
      </StackNav>
    </NavigationContainer>
  );
};

export default App;
