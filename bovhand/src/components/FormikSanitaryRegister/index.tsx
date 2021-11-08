import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView, Button } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { ButtonPrimary } from "../ButtonPrimary";

import { Formik } from "formik";
import * as yup from "yup";
import api from "../../services/api";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CurrencyInput from "react-native-currency-input";
import { theme } from "../../global/styles/theme";
import { useAnimal } from "../contexts/animal";
import { styles } from './styles';

const reviewSchema = yup.object({
    namesanitary: yup.string().required("Por favor, informe um nome").max(40, "Número máximo de 40 caracteres"),
    dose: yup.string().required("Por favor, informe a dose").max(40, "Número máximo de 40 caracteres"),
});

type Sanitary = {
    date: string,
    namesanitary: string,
    dose: string,
    price: number,
}

export function FormikSanitaryRegister() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState("");

    const { animals } = useAnimal();
    
    const navigation = useNavigation();

    let titleDate = "";

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        setDate(moment(date).format("DD/MM/YYYY"));
        hideDatePicker();
    };

    if (date === "") {
        titleDate = "SELECIONE UMA DATA";
    } else {
        titleDate = date;
    }

    const initialState = {
        date: "",
        namesanitary: "",
        dose: "",
        price: 0,
    };

    async function onSubmit(values: Sanitary) {
        const data = {
            date: date,
            namesanitary: values.namesanitary,
            dose: values.dose,
            price: values.price,
        };

        try {
            const storagedToken = await AsyncStorage.getItem("@Bovhand:token");

            const animalId = animals?.id;

            await api.post(`/animals/${animalId}/sanitary`, data, {
                headers: { Authorization: "Bearer " + storagedToken },
            });
            navigation.goBack();
        } catch (err) {
            alert("Não foi possível criar o cadastro");
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
                  <Text style={styles.text}>DATA DA APLICACAO</Text>
                  <Button title={titleDate} color={theme.colors.primary} onPress={showDatePicker}/>
                  <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date"
                      locale="pt-br"
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                  />
                  <Text style={styles.text}>NOME DO MEDICAMENTO/VACINA</Text>
                  <TextInput
                      style={styles.input}
                      placeholder="Digite o nome da medicação"
                      onChangeText={formikProps.handleChange("namesanitary")}
                      value={formikProps.values.namesanitary}
                  />
                  <Text style={styles.errorText}>{formikProps.errors.namesanitary}</Text>
                  <Text style={styles.text}>DOSE APLICADA</Text>
                  <TextInput
                      style={styles.input}
                      placeholder="Digite a dose aplicada"
                      onChangeText={formikProps.handleChange("dose")}
                      value={formikProps.values.dose}
                  />
                  <Text style={styles.errorText}>{formikProps.errors.dose}</Text>
                  <Text style={styles.text}>PREÇO</Text>
                  <CurrencyInput
                      style={styles.currency}
                      value={formikProps.values.price}
                      onChangeValue={(itemValue) =>
                        formikProps.setFieldValue("price", itemValue)
                      }
                      prefix="R$"
                      delimiter=","
                      separator="."
                      placeholder="R$"
                      precision={2}
                      onChangeText={(formattedValue) => {}}
                  />
                  <View style={styles.buttonRegister}>
                      <ButtonPrimary title="CADASTRAR" onPress={formikProps.handleSubmit} />
                  </View>
                </KeyboardAwareScrollView>
            )}
        </Formik>
    </SafeAreaView>
  );
}
