import React, { useRef, useState } from "react";
import { View, Text, TextInput, SafeAreaView, Button} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import { ButtonPrimary } from "../ButtonPrimary";
import { styles } from "./styles";

import { Formik } from 'formik';
import { useAuth } from "../contexts/auth";
import * as yup from 'yup';
import api from '../../services/api';
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CurrencyInput from 'react-native-currency-input';
import { theme } from "../../global/styles/theme";

const reviewSchema = yup.object({
    register: yup.string().required('Por favor, informe um registro').max(40, 'Número máximo de 40 caracteres'),
    race: yup.string().required('Por favor, informe a raça do animal').max(40, 'Número máximo de 40 caracteres'),
    gender: yup.string().required('Por favor, informe o genero do animal').max(40, 'Número máximo de 40 caracteres'),
})

type Animal = {
    register: string,
    nameanimal: string,
    race: string,
    gender: string,
    origin: string,
    birthday: string,
    price: number,
    mother: string,
    father: string,
}

export function FormikAnimalRegister() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState('');

    const { user } = useAuth();

    const navigation = useNavigation();

    let titleDate='';

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        setDate(moment(date).format('DD/MM/YYYY'))
        hideDatePicker();
    };

    if(date === ''){
        titleDate = 'SELECIONE UMA DATA'
    }else{
        titleDate = date
    }

    const initialState = {
        register: '',
        nameanimal: '',
        race: '',
        gender: '',
        origin: '',
        birthday: '',
        price: 0,
        mother: '',
        father: ''
    };

    async function onSubmit(values: Animal) {
        const data = {
            register: values.register,
            nameanimal: values.nameanimal,
            race: values.race,
            gender: values.gender,
            origin: values.origin,
            birthday: date,
            price: values.price,
            mother: values.mother,
            father: values.father
        }
        
        try{
            const storagedToken = await AsyncStorage.getItem("@Bovhand:token");

            const userId = user?.id;
          
            await api.post(`users/${userId}/animal`, data,
            { headers: { Authorization: "Bearer " + storagedToken } })
            navigation.navigate('Home')

        }catch(err){
            alert('Não foi possível criar o cadastro')
        }
    }

    return (

        <SafeAreaView style={styles.container}>
            <Formik
                initialValues={initialState}
                validationSchema={reviewSchema}
                onSubmit={onSubmit}
            >
                {(formikProps) => (
                    <KeyboardAwareScrollView style={styles.scroll}>
                        <Text style={styles.text}>REGISTRO DO ANIMAL</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite o Registro do animal'
                            onChangeText={formikProps.handleChange('register')}
                            value={formikProps.values.register}
                        />
                        <Text style={styles.errorText}>{formikProps.errors.register}</Text>
                        <Text style={styles.text}>NOME DO ANIMAL</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite o nome do animal'
                            onChangeText={formikProps.handleChange('nameanimal')}
                            value={formikProps.values.nameanimal}
                        />
                        <Text style={styles.errorText}>{formikProps.errors.nameanimal}</Text>
                        <Text style={styles.text}>RACA DO ANIMAL</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite a raça do animal'
                            onChangeText={formikProps.handleChange('race')}
                            value={formikProps.values.race}
                        />
                        <Text style={styles.errorText}>{formikProps.errors.race}</Text>
                        <Text style={styles.text}>GENERO DO ANIMAL</Text>
                        <Picker style={styles.picker}
                                mode='dropdown'
                                selectedValue={formikProps.values.gender}
                                onValueChange={itemValue => formikProps.setFieldValue('gender', itemValue)}
                            >
                                <Picker.Item label="Selecione um genero" value={initialState.gender} />
                                <Picker.Item label="Macho" value="macho" />
                                <Picker.Item label="Femea" value="femea" />
                            </Picker>
                            <Text style={styles.errorText}>{formikProps.errors.gender}</Text>
                        <Text style={styles.text}>DATA DE NASCIMENTO</Text>
                        <Button title={titleDate} color={theme.colors.primary} onPress={showDatePicker} />
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode='date'
                                locale="pt-br"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                        <Text style={styles.text}>PREÇO</Text>
                        <CurrencyInput
                                style={styles.currency}
                                value={formikProps.values.price}
                                onChangeValue={itemValue => formikProps.setFieldValue('price', itemValue)}
                                prefix="R$"
                                delimiter=","
                                separator="."
                                placeholder='R$'
                                precision={2}
                                onChangeText={(formattedValue) => { }}
                            />
                        <Text style={styles.errorText}>{formikProps.errors.price}</Text>
                        <Text style={styles.text}>MAE DO ANIMAL</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite o nome da mae do animal'
                            onChangeText={formikProps.handleChange('mother')}
                            value={formikProps.values.mother}
                        />
                        <Text style={styles.errorText}>{formikProps.errors.mother}</Text>
                        <Text style={styles.text}>PAI DO ANIMAL</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite o nome do pai do animal'
                            onChangeText={formikProps.handleChange('father')}
                            value={formikProps.values.father}
                        />
                        <Text style={styles.errorText}>{formikProps.errors.father}</Text>
                        <View style={styles.buttonRegister}>
                            <ButtonPrimary title="CADASTRAR" onPress={formikProps.handleSubmit} />
                        </View>
                    </KeyboardAwareScrollView>
                )}
            </Formik>
        </SafeAreaView>
    )
}