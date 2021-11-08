import React from "react";
import { View, Text, Image } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import { styles } from './styles';
import { theme } from "../../global/styles/theme";


export function Animals() {
    const navigation = useNavigation();

    function handleListAnimals() {
      navigation.navigate('ListAnimals')
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
                    <Text style={styles.title}>Animais</Text>
                </View>
            </View>
            <View style={styles.lineTop}>
                <View style={styles.lineCenter}>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.containerButtons}>
                    <View style={styles.containerButtonsOne}>
                        <RectButton style={styles.buttonList} onPress={handleListAnimals} >
                            <Image style={styles.buttonIcon} source={require('../../../assets/iconList.png')}/>
                            <Text style={styles.buttonText}>Lista de Animais</Text>
                        </RectButton>
                        {/* <RectButton style={styles.buttonBirth} >
                            <Image style={styles.buttonIcon} source={require('../../../assets/iconCows.png')}/>
                            <Text style={styles.buttonText}>Cadastro de partos</Text>
                        </RectButton> */}
                    </View>
                </View>
                <View style={styles.containerCounter}>
                    
                </View>
            </View>
      </View>
    )
}