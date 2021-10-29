import React, { useEffect, useState } from "react";
import { Text,  SafeAreaView, TextInput, View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from "moment";
import { useAuth } from "../../components/contexts/auth";
import api from "../../services/api";

import { styles } from "./styles";
import { useAnimal } from "../contexts/animal";

export function InfoFormAnimal() {

    const { user } = useAuth();
    const { animals } = useAnimal();
    const navigation = useNavigation();

    //const alou = "teste"
    return (
        <SafeAreaView style={styles.container}>
                    <KeyboardAwareScrollView style={styles.scroll}>
                        <Text style={styles.text}>REGISTRO</Text>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            value={animals?.register}
                        />
                        {/*<View>{alou != '' ? <Text>data</Text>: null }</View>*/}

                        <Text style={styles.text}>NOME</Text>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            value={animals?.nameanimal}
                        />
                        <Text style={styles.text}>GENERO</Text>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            value={animals?.gender}
                        />
                        <Text style={styles.text}>ORIGEM</Text>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            value={animals?.origin}
                        />
                        <Text style={styles.text}>NASCIMENTO</Text>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            value={moment(animals?.birthday).format('DD/MM/YYYY')}
                        />
                        <Text style={styles.text}>PREÇO</Text>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            value={animals?.price.toString()}
                        />
                        <Text style={styles.text}>MÃE</Text>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            value={animals?.mother}
                        />
                        <Text style={styles.text}>PAI</Text>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            value={animals?.father}
                        />
                    </KeyboardAwareScrollView>
                
        </SafeAreaView>
    )
}