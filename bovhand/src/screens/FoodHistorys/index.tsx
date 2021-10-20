import React, { useRef, useState } from "react";
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';

import { ButtonPrimary } from "../../components/ButtonPrimary";
import { styles } from "./styles";

import { Formik } from 'formik';
import * as yup from 'yup';

const teste = 1;

const reviewSchema = yup.object({
    dateStart: yup.date().nullable().max(new Date(), `enDate should be equal or earlier than`),
    dateFinal: yup.string().required('Por favor, informe o nome da fazenda').max(40, 'Número máximo de 40 caracteres'),
    typeFood: yup.string().required('Por favor, informe seu e-mail'),
})

type Values = {
    dateStart: string,
    dateFinal: string,
    typeFood: string,
}

export function FoodHistorys({navigation }) {
    const [ date, setDate ] = useState('');
    const [ date2, setDate2 ] = useState('');
    const [ typeFood, setTypeFood ] = useState('');

    const initialState = {
        dateStart: '',
        dateFinal: '',
        typeFood: '',
    };

    function onSubmit(values: Values) {
        const data = {
            dateStart: values.dateStart,
            dateFinal: values.dateFinal,
            typeFood: values.typeFood,
        }
        console.log(data);
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.containerBack}>
                    <RectButton style={styles.buttonBack} onPress={()=>navigation.goBack()}>
                        <AntDesign style={styles.iconBack} name="arrowleft" size={32}/>
                    </RectButton>
                </View>
                <View style={styles.titleMenu}>
                    <Text style={styles.title}>Histórico de Gastos</Text>
                </View>
            </View>
            <View style={styles.lineTop}>
                <View style={styles.lineCenter}>
                </View>
            </View>
            <View style={styles.body}>
            <Formik
                initialValues={initialState}
                validationSchema={reviewSchema}
                onSubmit={onSubmit}
            >
                {(formikProps) => (
                    <View style={styles.scroll}>
                        <Text style={styles.text}>DATA INICIAL</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite a data inicial'
                            onChangeText={formikProps.handleChange('dateStart')}
                            value={formikProps.values.dateStart}
                            keyboardType='number-pad'
                        />
                        <Text style={styles.errorText}>{formikProps.errors.dateStart}</Text>
                        <Text style={styles.text}>DATA FINAL</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite a data final'
                            onChangeText={formikProps.handleChange('dateFinal')}
                            value={formikProps.values.dateFinal}
                            keyboardType='number-pad'
                        />
                        <Text style={styles.errorText}>{formikProps.errors.dateFinal}</Text>
                        <Text style={styles.text}>ESCOLHA O ALIMENTO</Text>
                        <Picker style={styles.picker}
                            mode= 'dropdown'
                            selectedValue={formikProps.values.typeFood}
                            onValueChange={itemValue => formikProps.setFieldValue('typeFood', itemValue)}
                        >
                            <Picker.Item label="Selecione um alimento" value={initialState.typeFood} />
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                        <Text style={styles.errorText}>{formikProps.errors.typeFood}</Text>
                        <View style={styles.buttonRegister}>
                            <ButtonPrimary title="CADASTRAR" onPress={formikProps.handleSubmit} />
                        </View>
                    </View>
                )}
            </Formik>
            </View>
        </SafeAreaView>
    )
}