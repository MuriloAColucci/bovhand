import React from "react";
import { View, Text } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import { styles } from './styles';
import { InfoFormSanitary } from "../../components/InfoFormSanitary";



export function InfoSanitarys() {

    return (
      <View style={styles.container}>
            <View style={styles.infos}>
                <InfoFormSanitary/>
            </View>
      </View>
    )
}