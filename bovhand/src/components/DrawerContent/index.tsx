import React, { useContext } from "react";
import { View } from "react-native";
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';

import { useAuth } from "../../components/contexts/auth";
import { styles } from "./styles";


export function DrawerContent({props, navigation}) {
    const { AuthSignOut } = useAuth();

    function handleSignOut() {
        AuthSignOut();
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <Drawer.Section>
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
                        <DrawerItem
                        label="Animals"
                        icon={({ color, size }) => (
                            <Ionicons name="person" size={size} color={color} />
                        )}
                        onPress={() => navigation.navigate('Animals')} />
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
