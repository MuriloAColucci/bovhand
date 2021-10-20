import React, { useRef } from "react";
import { View, Text, TextInput, SafeAreaView, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from "@react-navigation/native";

import { ButtonPrimary } from "../../components/ButtonPrimary";
import { styles } from "./styles";

import { Formik } from 'formik';
import * as yup from 'yup';
import api from '../../services/api';

const reviewSchema = yup.object({
    nameusers: yup.string().required('Por favor, informe seu nome').max(40, 'Número máximo de 40 caracteres'),
    farm: yup.string().required('Por favor, informe o nome da fazenda').max(40, 'Número máximo de 40 caracteres'),
    //cpf: yup.string().required('Por favor, informe seu CPF'),
    email: yup.string().email('Inserir um endereço de e-mail válido').required('Por favor, informe seu e-mail'),
    password: yup.string().required('Por favor, inserir uma senha').min(4, 'Deve conter 4 caracteres ou mais'),
    passwordConfirmation: yup.string().required('Deve conter 4 caracteres ou mais').min(4).oneOf([yup.ref('password'), null], 'A senha não coincide')
})

type Values = {
    nameusers: string,
    farm: string,
    // cpf: string,
    email: string,
    password: string,
    passwordConfirmation: string
}

export function FormikRegister() {
    // const cfpRef = useRef(null);

    const navigation = useNavigation();

    const initialState = {
        nameusers: '',
        farm: '',
        //   cpf: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    };

    async function onSubmit(values: Values) {
        /*  const unmask = cfpRef?.current.getRawValue();
            const cpfIsValid = cfpRef?.current.isValid();
              if(cpfIsValid){*/

        const data = {
            nameusers: values.nameusers,
            farm: values.farm,
            // cpf: unmask,
            email: values.email,
            password: values.password,
        }
        console.log(data)
        
        try{
            await api.post('users', data)
            navigation.navigate('SignIn')

        }catch(err){
            alert('Não foi possível criar o cadastro')
        }

        /*    }
              if(cpfIsValid==false){
              alert('CPF inválido');
          } */
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
                        <Text style={styles.text}>NOME COMPLETO</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite seu nome'
                            onChangeText={formikProps.handleChange('nameusers')}
                            value={formikProps.values.nameusers}
                        />
                        <Text style={styles.errorText}>{formikProps.errors.nameusers}</Text>
                        <Text style={styles.text}>NOME DA FAZENDA</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite o nome da fazenda'
                            onChangeText={formikProps.handleChange('farm')}
                            value={formikProps.values.farm}
                        />
                        <Text style={styles.errorText}>{formikProps.errors.farm}</Text>
                        {/*  <Text style={styles.text}>CPF</Text>
                        <TextInputMask
                            style={styles.input}
                            type={"cpf"}
                            placeholder='Digite seu CPF'
                            onChangeText={formikProps.handleChange('cpf')}
                            value={formikProps.values.cpf}
                            keyboardType="numeric"
                            ref={cfpRef}
                        />
                        <Text style={styles.errorText}>{formikProps.errors.cpf}</Text>*/}
                        <Text style={styles.text}>EMAIL</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite seu e-mail'
                            onChangeText={formikProps.handleChange('email')}
                            value={formikProps.values.email}
                        />
                        <Text style={styles.errorText}>{formikProps.errors.email}</Text>
                        <Text style={styles.text}>SENHA</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder='Digite sua senha'
                            onChangeText={formikProps.handleChange('password')}
                            value={formikProps.values.password}
                        />
                        <Text style={styles.errorText}>{formikProps.errors.password}</Text>
                        <Text style={styles.text}>CONFIRMAR SENHA</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder='Confirme sua senha'
                            onChangeText={formikProps.handleChange('passwordConfirmation')}
                            value={formikProps.values.passwordConfirmation}
                        />
                        <Text style={styles.errorText}>{formikProps.errors.passwordConfirmation}</Text>
                        <View style={styles.buttonRegister}>
                            <ButtonPrimary title="CADASTRAR" onPress={formikProps.handleSubmit} />
                        </View>
                    </KeyboardAwareScrollView>
                )}
            </Formik>
        </SafeAreaView>
    )
}