import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { useAuth } from "./auth";

type Animal = {
    id: number,
    register: string,
    nameanimal: string,
    race: string,
    gender: string,
    origin: string,
    birthday: Date,
    price: number,
    mother: string,
    father: string,
}

type AnimalList = Array<Animal>

type AnimalContextData={
    animals: Animal | undefined,
    animalsList: AnimalList,
    getAnimal: (animalId: number) => void,
    listAnimals: () => void,
}

export const AnimalContext = createContext({} as AnimalContextData);

export function AnimalProvider({children} : any){
    const [animals, setAnimals] = useState<Animal | undefined>();
    const [animalsList, setAnimalsList] = useState<AnimalList>([]);
    //const [countAnimal, setCountAnimal] = useState<number>(0);

    const { user } = useAuth();

    async function getAnimal(animalId: number) {
        const storagedToken = await AsyncStorage.getItem("@Bovhand:token");

          const userId = user?.id;

          const response = await api.get(
            `/users/${userId}/animal/${animalId}`,
            { headers: { Authorization: "Bearer " + storagedToken } }
          );
        
        setAnimals(response.data)
    }

    async function listAnimals() {
        const storagedToken = await AsyncStorage.getItem("@Bovhand:token");

        const userId = user?.id;

        const response = await api.get(`/users/${userId}/animal`, 
        { headers: { Authorization: 'Bearer ' + storagedToken}})
          
        //setCountAnimal(response.data.length)
        setAnimalsList(response.data);
    }

    return(
        <AnimalContext.Provider value={{animals, getAnimal, animalsList, listAnimals}}>
            {children}
        </AnimalContext.Provider>
    )
}
 
export function useAnimal(){
    const context = useContext(AnimalContext);

    return context;
};