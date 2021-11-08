import React, { useEffect, useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { View, Text, Button, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons'; 
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

import { styles } from './styles';
import { useAnimal } from "../../components/contexts/animal";

export function ListAnimals() {
    const { getAnimal, listAnimals, animalsList } = useAnimal();
    const navigation = useNavigation();

    function handleAboutAnimals(id: number) {
        getAnimal(id)
        navigation.navigate('AboutAnimals')
    }

    useEffect(()=>{
        listAnimals();
    })


      const renderItem = ({ item } : any) => (
        <RectButton style={styles.buttonAnimal}  onPress={()=>handleAboutAnimals(item.id)}>
            <View style={styles.infoPrincipal}>
                <Text style={styles.text}>{item.register}</Text>
                <Text style={styles.text}>{item.nameanimal}</Text>
            </View>
            <View style={styles.infoBirthday}>
                <Text style={styles.textBirthday}>{moment(item.birthday).format('DD/MM/YYYY')}</Text>
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
                    <Text style={styles.title}>Lista de Animais</Text>
                </View>
            </View>
            <View style={styles.lineTop}>
                <View style={styles.lineCenter}>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.flatList}>
                    <FlatList
                            data={animalsList}
                            renderItem={renderItem}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                </View>
        </View>
    )
}

