import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import getRealm from '../services/realm';

import { MaterialIcons } from '@expo/vector-icons'; 
import { Container, Title, NewButton, ButtonTitle, List } from './styles.js';

import Checklist from '../components/Checklist/Checklist.js';
import { ChecklistContext } from '../contexts/checklists.js';

export default function Home({navigation}) {

    const [ checklistsState, setChecklists ] = useState([]);

    const isFocused = useIsFocused();

	const { checklists } = useContext(ChecklistContext);

    async function postAPI(data){
        await fetch("http://localhost:3000/checklists/1", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
                body: JSON.stringify({
                  data
                })
        })
    }

    useEffect(() => {
        async function loadChecklistsLocal(){
            const realm = await getRealm();

            const data = realm.objects('Checklists').sorted('id', true);

            console.log("HOME: ", data);

            setChecklists(data);
            postAPI(data);
        }

        loadChecklistsLocal();
    }, [useIsFocused])

  return (
    <Container>

    	<Title> Checklists </Title>
    	<NewButton onPress={() => navigation.navigate('Create')}>
    		<ButtonTitle> Novo </ButtonTitle>
    		<MaterialIcons name="add" size={24} color="black" />
    	</NewButton>

    	<List 
    		keyboardShouldPersistTaps="handled"
    		data={checklistsState}
    		keyExtractor={item => String(item.id)}
    		renderItem={({ item }) => (
    			<Checklist data={item} />
    		)}
    	/>
    </Container>
  );
}