import React, { useEffect, useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { View, Text, Button, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';

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

   /*const Item = ({ nameanimal }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{nameanimal}</Text>
        </View>
    );*/
      const renderItem = ({ item }) => (
        <RectButton style={styles.buttonAnimal}  onPress={()=>navigation.goBack()}>
            <Text>{item.nameanimal}</Text>
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
                        <FlatList
                            data={animals}
                            renderItem={renderItem}
                            keyExtractor={item => item.id.toString()}
                        />
                        <Text>{}</Text>
                </View>
            </View>
        </View>
    )
}

