import React from 'react';
import TelaA from '../Views/TelaA';
import TelaB from '../Views/TelaB';
import TelaC from '../Views/TelaC';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default props => {  
    return (
    <Tab.Navigator
        initialRouteName="TelaB" 
        tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            labelStyle: { fontSize: 30 }
        }}
    >
      <Tab.Screen name="TelaA" component={TelaA} />
      <Tab.Screen name="TelaB" component={TelaB} />
      <Tab.Screen name="TelaC" component={TelaC} numero={50}/>
    </Tab.Navigator>
  );
}

