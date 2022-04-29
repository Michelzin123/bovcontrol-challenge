import React, { useState } from 'react';
import { Text, View, Keyboard } from 'react-native';

import getRealm from '../services/realm';

import { Container, Input, NewButton, ButtonTitle} from './styles.js';

import { MaterialIcons } from '@expo/vector-icons'; 

export default function Create() {

	const [ input, setInput ] = useState('');

	async function saveChecklistLocal(checklist){
		const data = {
			id: checklist.id,
			type: checklist.type,
			amount_of_milk_produced: checklist.amount_of_milk_produced,
			// number_of_cows_head: checklist.number_of_cows_head,
			// had_supervision: checklist.had_supervision,
			// farmer: checklist.farmer,
			// from: checklist.from,
			// to: checklist.to,
			// created_at: checklist.created_at,
			// updated_at: checklist.updated_at,
		}

		const realm = await getRealm();

		realm.write(() => {
			realm.create('Checklist', data);
		})
	}

	function handleAddChecklist() {
		console.log("Input: ", input);
		Keyboard.dismiss();
	}

  return (
    <Container>
    	<Input 
    		value={input}
    		onChangeText={setInput}
    		autoCapitalize="none"
    		autocorrect={false}
    		placeholder="Adicionar checklist..."
    	/>

    	<NewButton onPress={handleAddChecklist}>
    		<ButtonTitle> Novo </ButtonTitle>
    		<MaterialIcons name="add" size={24} color="black" />
    	</NewButton>
    </Container>
  );
}