import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaA from '../Views/TelaA';
import TelaB from '../Views/TelaB';
import TelaC from '../Views/TelaC';
import PassoStack from '../Components/PassoStack';

const Stack = createStackNavigator();

export default props => (
    <Stack.Navigator initialRouteName="TelaA">
        <Stack.Screen 
            name="TelaA" 
            options={{title: 'Informações iniciais'}}>
                {props => (
                    <PassoStack {...props} avancar="TelaB">
                        <TelaA/>
                    </PassoStack>
                )}
            </Stack.Screen>
        <Stack.Screen name="TelaB">
            {props => (
                <PassoStack {...props} avancar="TelaC" voltar>
                    <TelaB/>
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaC" component={TelaC}/>
    </Stack.Navigator>
);