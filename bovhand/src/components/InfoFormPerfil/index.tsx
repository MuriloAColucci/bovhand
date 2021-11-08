import React from "react";
import { Text,  SafeAreaView, View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from "./styles";
import { useAuth } from "../contexts/auth";


export function InfoFormPerfil() {

    const { user } = useAuth();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView style={styles.scroll}>
                <Text style={styles.text}>NOME</Text>
                <Text style={styles.input}>{user?.nameusers}</Text>

                <Text style={styles.text}>NOME DA FAZENDA</Text>
                <Text style={styles.input}>{user?.farm}</Text>
                        
                <Text style={styles.text}>EMAIL</Text>
                <Text style={styles.input}>{user?.email}</Text>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}