import React, { useContext } from "react";
import { View, Text, SafeAreaView, TextInput, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons'; 

import { ButtonPrimary } from "../ButtonPrimary";
import { styles } from "./styles";
import { useAuth } from "../contexts/auth";

import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
  email: yup.string().email('Inserir um endereço de e-mail válido').required('Por favor, informe seu e-mail'),
  password: yup.string().required('Por favor, inserir uma senha').min(4, 'Deve conter 5 caracteres ou mais'),
})

type Values ={
    email: string,
    password: string,
}

export function FormikSignIn(){
    const { AuthSignIn } = useAuth();
    

    const navigation = useNavigation();

    function onSubmit(values: Values){
            const data={
                email: values.email,
                password: values.password,
                islogged: true,
            }
            
            AuthSignIn(data);
    }

    const initialState = {
        email: '',
        password: '',
    };

    return(
      <SafeAreaView style={styles.container}>
              <Formik
                  initialValues={initialState}
                  validationSchema={reviewSchema}
                  onSubmit={onSubmit}
              >
              {(formikProps) => (
                  <View style={styles.form}>
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
                            placeholder='Digite sua senha'
                            secureTextEntry={true}
                            onChangeText={formikProps.handleChange('password')}
                            value={formikProps.values.password}
                        />
                        
                        <Text style={styles.errorText}>{formikProps.errors.password}</Text>
                        <Text style={styles.forgot}>Esqueceu sua senha?</Text>

                        <ButtonPrimary title="ENTRAR" onPress={formikProps.handleSubmit}/>
                  </View>
              )}
              </Formik>
        </SafeAreaView>
    )
}