import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 
import { Container, Title, NewButton, ButtonTitle, List } from './styles.js';

import Checklist from '../components/Checklist/Checklist.js';
import { ChecklistContext } from '../contexts/checklists.js';

export default function Home({navigation}) {

	const { checklists } = useContext(ChecklistContext);

  return (
    <Container>

    	<Title> Checklists </Title>
    	<NewButton onPress={() => navigation.navigate('Create')}>
    		<ButtonTitle> Novo </ButtonTitle>
    		<MaterialIcons name="add" size={24} color="black" />
    	</NewButton>

    	<List 
    		keyboardShouldPersistTaps="handled"
    		data={checklists}
    		keyExtractor={item => String(item.id)}
    		renderItem={({ item }) => (
    			<Checklist data={item} />
    		)}
    	/>
    </Container>
  );
}