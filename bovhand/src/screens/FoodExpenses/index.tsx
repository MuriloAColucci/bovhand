import React from "react";
import { View, Text, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import { styles } from './styles';
import { theme } from "../../global/styles/theme";


export function FoodExpenses() {
    const navigation = useNavigation();

    const navigationButton = useNavigation();

    function handleListAnimals(){
        navigationButton.navigate('FoodHistorys')
    }
    function handleRegisterFoods(){
        navigationButton.navigate('RegisterFoods')
    }

    return (
      <View style={styles.container}>
          <View style={styles.header}>
                <View style={styles.containerBack}>
                    <RectButton style={styles.buttonBack} onPress={()=>navigation.goBack()}>
                        <AntDesign style={styles.iconBack} name="arrowleft" size={32}/>
                    </RectButton>
                </View>
                <View style={styles.titleMenu}>
                    <Text style={styles.title}>Gastos Alimentícios</Text>
                </View>
            </View>
            <View style={styles.lineTop}>
                <View style={styles.lineCenter}>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.containerButtons}>
                    <View style={styles.containerButtonsOne}>
                        <RectButton style={styles.buttonList} onPress={handleListAnimals}>
                            <Image style={styles.buttonIcon} source={require('../../../assets/iconHistorys.png')}/>
                            <Text style={styles.buttonText}>Histórico de Gastos</Text>
                        </RectButton>
                        <RectButton style={styles.buttonBirth} onPress={handleRegisterFoods}>
                            <Image style={styles.buttonIcon} source={require('../../../assets/iconRegister.png')}/>
                            <Text style={styles.buttonText}>Cadastrar Gastos</Text>
                        </RectButton>
                    </View>
                </View>
                <View style={styles.containerCounter}>
                    
                </View>
            </View>
      </View>
    )
}