import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from "../screens/SignIn";
import { Register } from "../screens/Register";

const AuthStack = createStackNavigator();

export function AuthRoutes(){
    return(
        <AuthStack.Navigator headerMode= 'none' screenOptions={{cardStyle:{backgroundColor: 'transparent'}}}>
            <AuthStack.Screen name="SignIn" component={SignIn} />
            <AuthStack.Screen name="Register" component={Register} />
        </AuthStack.Navigator>
    )
}