import React, { useContext } from "react";
import { View, Text } from "react-native";
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

import { useAuth } from "../../components/contexts/auth";
import { styles } from "./styles";


export function DrawerContent({props, navigation} : any) {
    const { AuthSignOut } = useAuth();

    const { user } = useAuth();

    function handleSignOut() {
        AuthSignOut();
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.container}>
                    <View style={styles.containerCircle}>
                        <View style={styles.circle}>
                                <Ionicons name="person" size={32} color={theme.colors.white} />
                        </View>
                    </View>
                        
                    <View style={styles.containerProfile}>
                        <Text style={styles.textTitle}>{user?.farm.toUpperCase()}</Text>
                        <Text style={styles.textName}>{user?.nameusers}</Text>
                    </View>
                </View>
                <Drawer.Section style={styles.drawer}>
                    <DrawerItem
                        label="Home"
                        icon={({ color, size }) => (
                            <Entypo name="home" size={size} color={color} />
                        )}
                        onPress={() => navigation.navigate('Home')} />
                       <DrawerItem
                        label="Perfil"
                        icon={({ color, size }) => (
                            <Ionicons name="person" size={size} color={color} />
                        )}
                        onPress={() => navigation.navigate('Perfil')} />
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem
                    label="Logout"
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons name="logout-variant" size={size} color={color} />
                    )}
                    onPress={handleSignOut} />
            </Drawer.Section>
        </View>
    )
}
