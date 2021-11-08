import React, { useEffect } from "react";
import { Text, View, FlatList} from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons'; 

import moment from "moment";
import { styles } from "./styles";
import { useSanitary } from "../contexts/sanitary";


export function InfoFormSanitary() {

    const { sanitarysList, listSanitarys, deleteSanitary } = useSanitary();

    useEffect(()=>{
        listSanitarys()
    })

    const renderItem = ({ item } : any) => (
        <View>
            <View style={styles.container}>
                <View style={styles.containerList}>
                    <Text style={styles.text}>DATA DA APLICAÇÃO</Text>
                    <Text style={styles.input}>{moment(item.date).format('DD/MM/YYYY')}</Text>

                    <Text style={styles.text}>NOME DA MEDICAÇÃO</Text>
                    <Text style={styles.input}>{item.namesanitary}</Text>
                </View>
                <View style={styles.containerList}>
                    <Text style={styles.text}>DOSE UTILIZADA</Text>
                    <Text style={styles.input}>{item.dose}</Text>

                    <Text style={styles.text}>PREÇO</Text>
                    <Text style={styles.input}>{item.price.toString()}</Text>
                </View>
            </View>
            <View style={styles.deleteContainer}>
                <RectButton style={styles.delete}>
                    <AntDesign name="delete" size={32} color="black" onPress={()=>deleteSanitary(item.id)}/>
                </RectButton>
            </View>
            <View>
                <Text style={styles.line}></Text>
            </View>
        </View>
      );

    return (

        <View>
            <FlatList
                data={sanitarysList}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}