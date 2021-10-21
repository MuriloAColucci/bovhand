import React from "react";
import { View, Text } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"; 

import { FormikRegister } from "../../components/FormikRegister";
import { styles } from './styles';
import { theme } from "../../global/styles/theme";


export function Register(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <RectButton style={styles.buttonLeft}  onPress={()=>navigation.goBack()}>
                    <AntDesign style={styles.arrowLeft} name="arrowleft" size={32} color={theme.colors.white} />
                </RectButton>
                <View style={styles.header}>
                    <Text style={styles.title}>CADASTRO</Text>
                </View>
            </View>
            <FormikRegister />
        </View>

    )
}