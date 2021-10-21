import React from "react";
import { View, Text, Image } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { theme } from "../../global/styles/theme";
import { styles } from './styles';
import { useAuth } from "../../components/contexts/auth";
import api from "../../services/api";

export function Home({navigation}){
    const { user } = useAuth();

    async function asyncFunc() {
        try {
            const storagedToken = await AsyncStorage.getItem('@Bovhand:token');
           // console.log(storagedToken)

            const userId = user?.id;
            
            const response = await api.get(`/users/${userId}/animal`, 
            { headers: { Authorization: 'Bearer ' + storagedToken}});
      
           // return console.log(response.data);
        } catch (error) {
          alert(error); 
        }
      }

    asyncFunc();

    const navigationButton = useNavigation();

    function handleAnimals(){
        navigationButton.navigate('Animals')
    }
    function handleReports(){
        navigationButton.navigate('Reports')
    }
    function handleSanitarys(){
        navigationButton.navigate('Sanitarys')
    }
    function handleFoodExpenses(){
        navigationButton.navigate('FoodExpenses')
    } 

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.drawerMenu}>
                    <RectButton style={styles.buttonMenu} onPress={()=>navigation.openDrawer()}>
                        <Entypo style={styles.iconMenu} name="menu" size={32}/>
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
                        <RectButton style={styles.buttonAnimals} onPress={handleAnimals}>
                            <Image style={styles.buttonIcon} source={require('../../../assets/iconAnimals.png')}/>
                            <Text style={styles.buttonText}>Animais</Text>
                        </RectButton>
                        <RectButton style={styles.buttonReports} onPress={handleReports}>
                            <Image style={styles.buttonIcon} source={require('../../../assets/iconReports.png')}/>
                            <Text style={styles.buttonText}>Relatórios</Text>
                        </RectButton>
                    </View>
                    <View style={styles.containerButtonsTwo}>    
                        <RectButton style={styles.buttonSanitarys} onPress={handleSanitarys}>
                            <Image style={styles.buttonIcon} source={require('../../../assets/iconSanitarys.png')}/>
                            <Text style={styles.buttonText}>Sanitários</Text>   
                        </RectButton>
                        <RectButton style={styles.buttonFoodExpenses} onPress={handleFoodExpenses}>
                            <Image style={styles.buttonIcon} source={require('../../../assets/iconFoodExpenses.png')}/>
                            <Text style={styles.buttonText}>Alimentos</Text>
                        </RectButton>
                    </View>
                    <Text style={styles.counterText}>{user?.email}</Text>
                </View>
                <View style={styles.containerCounter}>
                    <View style={styles.counter}>
                        <Text style={styles.counterTitle}>Ativos</Text>
                        <View style={styles.circleCounter}>
                            <Text style={styles.counterText}>15</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}