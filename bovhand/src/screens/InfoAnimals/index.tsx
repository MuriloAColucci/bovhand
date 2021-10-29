import React from "react";
import { View, Text } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from "../../global/styles/theme";
import { InfoFormAnimal } from "../../components/InfoFormAnimal";


export function InfoAnimals() {


    return (
      <View style={styles.container}>
            <View style={styles.infos}>
                <InfoFormAnimal/>
            </View>
      </View>
    )
}