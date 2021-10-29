import React from "react";
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RectButton } from "react-native-gesture-handler";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { FormikAnimalRegister } from "../../components/FormikAnimalRegister";

export function RegisterAnimals(){
    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.containerBack}>
                    <RectButton style={styles.buttonBack} onPress={()=>navigation.goBack()}>
                        <AntDesign style={styles.iconBack} name="arrowleft" size={32}/>
                    </RectButton>
                </View>
                <View style={styles.titleMenu}>
                    <Text style={styles.title}>Registrar Animal</Text>
                </View>
            </View>
            <View style={styles.lineTop}>
                <View style={styles.lineCenter}>
                </View>
            </View>
                <FormikAnimalRegister/>
        </View>
    )
}