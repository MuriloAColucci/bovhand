import React from "react";
import { View, Text, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';

export function Sanitarys() {
    const navigation = useNavigation();
    const navigationButton = useNavigation();

    function handleVaccines(){
        navigationButton.navigate('SanitaryAnimals')
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
                    <Text style={styles.title}>Sanitários</Text>
                </View>
            </View>
            <View style={styles.lineTop}>
                <View style={styles.lineCenter}>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.containerButtons}>
                    <View style={styles.containerButtonsOne}>
                        <RectButton style={styles.buttonList} onPress={handleVaccines}>
                            <Image style={styles.buttonIcon} source={require('../../../assets/iconVaccines.png')}/>
                            <Text style={styles.buttonText}>Vacinas e Medicações</Text>
                        </RectButton>
                        {/* <RectButton style={styles.buttonBirth} >
                            <Image style={styles.buttonIcon} source={require('../../../assets/iconDescart.png')}/>
                            <Text style={styles.buttonText}>Descartes</Text>
                        </RectButton> */}
                    </View>
                </View>
                <View style={styles.containerCounter}>
                    
                </View>
            </View>
      </View>
    )
}