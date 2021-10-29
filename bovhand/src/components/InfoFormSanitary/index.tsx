import React from "react";
import { Text,  SafeAreaView, TextInput, View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";


export function InfoFormSanitary() {
    // const cfpRef = useRef(null);

    const navigation = useNavigation();
    //const alou = "teste"

    return (

        <SafeAreaView style={styles.container}>
                    <KeyboardAwareScrollView style={styles.scroll}>
                        <Text style={styles.text}>DATA DA APLICAÇÃO</Text>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            value={"teste"}
                        />
                        {/*<View>{alou != '' ? <Text>data</Text>: null }</View>*/}

                        <Text style={styles.text}>NOME DA MEDICAÇÃO</Text>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            value={"teste"}
                        />
                        <Text style={styles.text}>DOSE UTILIZADA</Text>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            value={"teste"}
                        />
                    </KeyboardAwareScrollView>
                
        </SafeAreaView>
    )
}