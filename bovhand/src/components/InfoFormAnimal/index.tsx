import React from "react";
import { Text,  SafeAreaView, View} from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import moment from "moment";

import { styles } from "./styles";
import { useAnimal } from "../contexts/animal";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";


export function InfoFormAnimal() {

    const { animals } = useAnimal();


    const invisibleDate = "Nascimento";
    const invisiblePrice = "Compra";

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView style={styles.scroll}>
                <Text style={styles.text}>REGISTRO DO ANIMAL</Text>
                <Text style={styles.input}>{animals?.register}</Text>

                <Text style={styles.text}>NOME DO ANIMAL</Text>
                <Text style={styles.input}>{animals?.nameanimal}</Text>
                        
                <Text style={styles.text}>GENERO DO ANIMAL</Text>
                <Text style={styles.input}>{animals?.gender}</Text>

                <Text style={styles.text}>ORIGEM DO ANIMAL</Text>
                <Text style={styles.input}>{animals?.origin}</Text>

                <View>
                {invisibleDate == animals?.origin ? 
                <View>
                    <Text style={styles.text}>NASCIMENTO</Text>
                    <Text style={styles.input}>{moment(animals?.birthday).format('DD/MM/YYYY')}</Text>
                </View>: null }
                </View>

                <View>
                {invisiblePrice == animals?.origin ? 
                <View>
                <Text style={styles.text}>PREÇO</Text>
                <Text style={styles.input}>{animals?.price.toString()}</Text>
                </View>: null }
                </View>

                <Text style={styles.text}>MÃE</Text>
                <Text style={styles.input}>{animals?.mother}</Text>

                <Text style={styles.text}>PAI</Text>
                <Text style={styles.input}>{animals?.father}</Text>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}