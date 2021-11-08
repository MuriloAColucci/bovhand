import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';
import { useAnimal } from "./animal";

type Sanitary = {
    id: number,
    date: string,
    namesanitary: string,
    dose: string,
    price: number,
}

type SanitaryList = Array<Sanitary>

type SanitaryContextData={
    sanitarysList: SanitaryList,
    listSanitarys: () => void,
    deleteSanitary: (sanitaryId: number) => void
}

export const SanitaryContext = createContext({} as SanitaryContextData);

export function SanitaryProvider({children} : any){
    const [sanitarysList, setSanitarysList] = useState<SanitaryList>([]);

    const { animals } = useAnimal();

    async function listSanitarys(){
        const storagedToken = await AsyncStorage.getItem("@Bovhand:token");

        const animalId = animals?.id;

        const response = await api.get(`/animals/${animalId}/sanitary`, 
        { headers: { Authorization: 'Bearer ' + storagedToken}})
          
        setSanitarysList(response.data);
    }

    async function deleteSanitary(sanitaryId: number) {
            const storagedToken = await AsyncStorage.getItem("@Bovhand:token");

            await api.delete(`/animals/${sanitaryId}/sanitary`, 
            { headers: { Authorization: 'Bearer ' + storagedToken}}).catch(()=>{})
    }

    return(
        <SanitaryContext.Provider value={{sanitarysList, listSanitarys, deleteSanitary}}>
            {children}
        </SanitaryContext.Provider>
    )
}
 
export function useSanitary(){
    const context = useContext(SanitaryContext);

    return context;
};