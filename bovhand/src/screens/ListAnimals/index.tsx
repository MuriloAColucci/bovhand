import React, { useEffect, useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { View, Text, Button, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons'; 
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';

import moment from "moment";

import { useAuth } from "../../components/contexts/auth";
import api from "../../services/api";

import { styles } from './styles';

export function ListAnimals() {
    const [animals, setAnimals] = useState([]);

    const { user } = useAuth();
    const navigation = useNavigation();

    useEffect(()=>{
        async function getAnimal() {
            const storagedToken = await AsyncStorage.getItem('@Bovhand:token');

            const userId = user?.id;

            const { data } = await api.get(`/users/${userId}/animal`, 
            { headers: { Authorization: 'Bearer ' + storagedToken}})
            
            setAnimals(data);
        }
        getAnimal()
    })


    function teste(alo: string){
        console.log(alo)
    }

      const renderItem = ({ item }) => (
        <RectButton style={styles.buttonAnimal}  onPress={()=>navigation.goBack()}>
            <View>
                <Text>{item.nameanimal}</Text>
                <Text>{moment(item.birthday).format('DD/MM/YYYY')}</Text>
            </View>
                <View>
                <Text>{item.nameanimal}</Text>
            </View>
            <MaterialIcons style={styles.iconEnter} name="keyboard-arrow-right" size={32}/>
        </RectButton>
      );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.containerBack}>
                    <RectButton style={styles.buttonBack} onPress={()=>navigation.goBack()}>
                        <AntDesign style={styles.iconBack} name="arrowleft" size={32}/>
                    </RectButton>
                </View>
                <View style={styles.titleMenu}>
                    <Text style={styles.title}>Home</Text>
                </View>
            </View>
            <View style={styles.lineTop}>
                <View style={styles.lineCenter}>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.containerButtons}>
                    <View style={styles.containerButtonsOne}>
                    <FlatList
                            data={animals}
                            renderItem={renderItem}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

