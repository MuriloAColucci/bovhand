import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';

type SignData={
    email: string,
    password: string,
    islogged: boolean,
}

type User={
    id: string,
    name: string,
    farm: string,
    email: string;
}

type AuthContextData={
    signed: boolean;
    user: User | null;
    loading: boolean;
    AuthSignIn: (data: SignData)=>Promise<void>;
    AuthSignOut: ()=>void;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children} : any){
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadStoragedData() {
            const storagedUser = await AsyncStorage.getItem('@Bovhand:user');
            const storagedToken = await AsyncStorage.getItem('@Bovhand:token');

            if(storagedUser && storagedToken){
                api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;

                setUser(JSON.parse(storagedUser));
            }
            setLoading(false);
        }

        loadStoragedData();
    },[]);
 
    async function AuthSignIn({email, password, islogged}: SignData){
        const response = await api.post('users/login',{
            email, password, islogged
        })

        const data = response.data
        
        if(data.status === 200){
            api.defaults.headers['Authorization'] = `Bearer ${data.token}`;

            await AsyncStorage.setItem('@Bovhand:user', JSON.stringify(response.data.user));
            await AsyncStorage.setItem('@Bovhand:token', response.data.token);

            const user = {
                id: data.user.id,
                name: data.user.name,
                farm: data.user.farm,
                email: data.user.email,
            }
            setUser(user)
        }
        if(data.status === 500){
            alert('Esse email não existe')
        }        
    }

    function AuthSignOut(){
        AsyncStorage.clear().then(() =>{
            setUser(null);
        });      
    }

    return(
    <AuthContext.Provider value={{signed: !!user, user, loading, AuthSignIn, AuthSignOut}}>
        {children}
    </AuthContext.Provider>)
};


export function useAuth(){
    const context = useContext(AuthContext);

    return context;
};