import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import CurrencyInput from 'react-native-currency-input';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { ButtonPrimary } from "../../components/ButtonPrimary";
import { styles } from "./styles";

import { Formik } from 'formik';
import * as yup from 'yup';
import moment from "moment";
import { theme } from "../../global/styles/theme";


const reviewSchema = yup.object({
    typeFood: yup.string().required('Por favor, informe seu e-mail'),
})

type Values = {
    date: string,
    typeFood: string,
    quantity: string,
    currency: number,
}


export function RegisterFoods({ navigation } : any) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState('');
    let titleDate='';

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        console.log(moment(date).format('DD/MM/YYYY'))
        setDate(moment(date).format('DD/MM/YYYY'))
        hideDatePicker();
    };

    if(date === ''){
        titleDate = 'SELECIONE UMA DATA'
    }else{
        titleDate = date
    }

    const initialState = {
        date: '',
        typeFood: '',
        quantity: '',
        currency: 0,
    };

    function onSubmit(values: Values) {
        const data = {
            date: date,
            typeFood: values.typeFood,
            quantity: values.quantity,
            currency: values.currency,
        }
        console.log(date)
        console.log(data);
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.containerBack}>
                    <RectButton style={styles.buttonBack} onPress={() => navigation.goBack()}>
                        <AntDesign style={styles.iconBack} name="arrowleft" size={32} />
                    </RectButton>
                </View>
                <View style={styles.titleMenu}>
                    <Text style={styles.title}>Cadastrar Gastos</Text>
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
                            <Text style={styles.text}>DATA DA COMPRA</Text>
                            <Button title={titleDate} color={theme.colors.primary} onPress={showDatePicker} />
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode='date'
                                locale="pt-br"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                            <Text style={styles.errorText}></Text>
                            <Text style={styles.text}>ESCOLHA O ALIMENTO</Text>
                            <Picker style={styles.picker}
                                mode='dropdown'
                                selectedValue={formikProps.values.typeFood}
                                onValueChange={itemValue => formikProps.setFieldValue('typeFood', itemValue)}
                            >
                                <Picker.Item label="Selecione um alimento" value={initialState.typeFood} />
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                            </Picker>
                            <Text style={styles.errorText}>{formikProps.errors.typeFood}</Text>
                            <Text style={styles.text}>QUANTIDADE</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Digite uma quantidade'
                                onChangeText={formikProps.handleChange('quantity')}
                                value={formikProps.values.quantity}
                            />
                            <Text style={styles.errorText}>{formikProps.errors.quantity}</Text>
                            <Text style={styles.text}>VALOR</Text>
                            <CurrencyInput
                                style={styles.currency}
                                value={formikProps.values.currency}
                                onChangeValue={itemValue => formikProps.setFieldValue('currency', itemValue)}
                                prefix="R$"
                                delimiter=","
                                separator="."
                                placeholder='R$'
                                precision={2}
                                onChangeText={(formattedValue) => { }}
                            />
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