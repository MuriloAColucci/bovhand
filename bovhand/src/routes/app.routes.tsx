import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator} from '@react-navigation/drawer';
import { Entypo, MaterialCommunityIcons, FontAwesome, Ionicons  } from '@expo/vector-icons'; 

import { 
    Alarms, 
    InfoApp, 
    Home, 
    RegisterAnimals, 
    Perfil, 
    Animals, 
    Sanitarys,
    SanitaryAnimals,
    FoodExpenses, 
    FoodHistorys, 
    RegisterFoods, 
    InfoAnimals,
    InfoSanitarys,
    AboutAnimals,
    ListAnimals,
    RegisterVaccines, 
} from "../global/imports/import";
import { theme } from "../global/styles/theme";
import { ButtonNew } from "../components/ButtonNew";
import { DrawerContent } from "../components/DrawerContent";
import { Reports } from "../screens/Reports";


const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();


function myApp(){
    return (
        <Tab.Navigator
            initialRouteName='Home' 
            tabBarOptions={{
                showLabel: false,
                style:{ 
                    backgroundColor: theme.colors.secondary,
                    borderTopColor: 'transparent',
                    height: '8%',
                    position: 'absolute',
                },
                activeTintColor: theme.colors.white,
                tabStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,
                    paddingHorizontal: 5,
                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({size, color}) =>(
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name="ListAnimals" 
                component={ListAnimals}
                options={{
                    tabBarIcon: ({size, color}) =>(
                        <MaterialCommunityIcons name="cow" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name="Novo" 
                component={RegisterAnimals}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({size}) =>(
                        <ButtonNew size={size}  />
                    )
                }}  
            />
            <Tab.Screen 
                name="Perfil" 
                component={Perfil}
                options={{
                    tabBarIcon: ({size, color}) =>(
                        <Ionicons name="person" size={size} color={color} />
                    )
                }} 
            />
            {/* <Tab.Screen 
                name="Alarms" 
                component={Alarms}
                options={{
                    tabBarIcon: ({size, color}) =>(
                        <FontAwesome name="bell" size={size} color={color} />
                    )
                }} 
            /> */}
            <Tab.Screen 
                name="InfoApp" 
                component={InfoApp}
                options={{
                    tabBarIcon: ({size, color}) =>(
                        <Entypo name="info-with-circle" size={size} color={color} />
                    )                    
                }} 
            />
        </Tab.Navigator>
    )
}

function mainScreen(){
    return(
    <AppStack.Navigator headerMode= 'none' screenOptions={{cardStyle:{backgroundColor: 'transparent'}}}>
        <AppStack.Screen name="myApp" component={myApp} />
        <AppStack.Screen name='Animals' component={Animals}/>
        <AppStack.Screen name='AboutAnimals' component={AboutAnimals}/>
        <AppStack.Screen name='InfoAnimals' component={InfoAnimals}/>
        <AppStack.Screen name='listAnimals' component={ListAnimals}/>
        <AppStack.Screen name='Reports' component={Reports}/>
        <AppStack.Screen name="InfoSanitarys" component={InfoSanitarys}/>
        <AppStack.Screen name="Sanitarys" component={Sanitarys}/>
        <AppStack.Screen name="SanitaryAnimals" component={SanitaryAnimals}/>
        <AppStack.Screen name='FoodExpenses' component={FoodExpenses}/>
        <AppStack.Screen name='FoodHistorys' component={FoodHistorys}/>
        <AppStack.Screen name='RegisterFoods' component={RegisterFoods}/>
        <AppStack.Screen name='RegisterVaccines' component={RegisterVaccines}/>
        <AppStack.Screen name='Perfil' component={Perfil}/>
    </AppStack.Navigator>)
    
}

export function AppRoutes(){
    return(
        <Drawer.Navigator drawerContent={props => <DrawerContent props={undefined} {...props}/>}>
            <Drawer.Screen name='Home' component={mainScreen}/>
        </Drawer.Navigator>
    )
}