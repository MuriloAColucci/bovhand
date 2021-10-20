import React from "react";
import { View, Text, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { FormikSignIn } from "../../components/FormikSignIn";
import { styles } from './styles';


export function SignIn({navigation}){

    const navigationButton = useNavigation();

    function handleRegister(){
        navigationButton.navigate('Register')
    }

    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.child}>
                        <Image source={require('../../../assets/cow.png')} />
                    <Text style={styles.title}>BOVHAND</Text>
                </View>
            </View>
            <FormikSignIn />
            <View style={styles.footer}>
                <Text style={styles.conta}>Não possui uma conta?</Text>
                <Text style={styles.criarconta} onPress={handleRegister}>Criar conta</Text>
            </View>
        </View>

    )
}