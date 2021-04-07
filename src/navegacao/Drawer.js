import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaA from '../Views/TelaA';
import TelaB from '../Views/TelaB';
import TelaC from '../Views/TelaC';

const Drawer = createDrawerNavigator();

export default props => {  
    return (
    <Drawer.Navigator
        initialRouteName="TelaB"
    >
      <Drawer.Screen name="TelaA" component={TelaA} />
      <Drawer.Screen name="TelaB" component={TelaB} />
      <Drawer.Screen name="TelaC" component={TelaC} numero={50}/>
    </Drawer.Navigator>
  );
}

