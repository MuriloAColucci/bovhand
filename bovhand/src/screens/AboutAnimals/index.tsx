import React from "react";
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

//import { Sanitarys, InfoApp } from "../../global/imports/import";

import { styles } from './styles';
import { theme } from "../../global/styles/theme";
import { InfoSanitarys } from "../InfoSanitarys";
import { InfoAnimals } from "../InfoAnimals";

const Tab = createMaterialTopTabNavigator();

export function AboutAnimals() {
    const navigation = useNavigation();


    return (
      <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.containerBack}>
                    <RectButton style={styles.buttonBack} onPress={()=>navigation.goBack()}>
                        <AntDesign style={styles.iconBack} name="arrowleft" size={32} color={theme.colors.white} />
                    </RectButton>
                    
                </View>
                <View style={styles.titleMenu}>
                        <Text style={styles.title}>Animal</Text>
                    </View>
            </View>
            <View style={styles.lineTop}>
                <View style={styles.lineCenter}>
                </View>
            </View>
            <View style={styles.front}>
                <Tab.Navigator>
                    <Tab.Screen name="Informações" component={InfoAnimals} />
                    <Tab.Screen name="Sanitarios" component={InfoSanitarys} />
                </Tab.Navigator>
            </View>
      </View>
    )
}