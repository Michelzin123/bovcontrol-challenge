import React, { useState, useEffect } from 'react';
import { Keyboard, Alert, Picker } from 'react-native';

import { useNavigation } from '@react-navigation/native';
// import Picker from '@react-native-picker/picker';

import getRealm from '../services/realm';

import { ScrollContainer, Input, EditButton, ButtonTitle, FormRow, LineText} from './styles.js';

import { Feather } from '@expo/vector-icons'; 

export default function Create({ route }) {

	const navigation = useNavigation();

	const checklist = route.params?.checklist;

	const [ form, setForm ] = useState({
		"id": checklist.id,
		"type": checklist.type,
		"amount_of_milk_produced": checklist.amount_of_milk_produced,
		"number_of_cows_head": checklist.number_of_cows_head,
		"had_supervision": checklist.had_supervision,
		"farmerName": checklist.farmerName,
		"farmerCity": checklist.farmerCity,
		"from": checklist.from,
		"to": checklist.to,
		"created_at": checklist.created_at,
		"updated_at": checklist.updated_at,
	});

	async function saveChecklistLocal(checklistEdited){
		let date = new Date();
		let dateAux = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);

		const dateBrazil = dateAux.toISOString();

		const data = {
			id: checklistEdited.id,
			type: checklistEdited.type,
			amount_of_milk_produced: checklistEdited.amount_of_milk_produced,
			number_of_cows_head: checklistEdited.number_of_cows_head,
			had_supervision: checklistEdited.had_supervision,
			farmerName: checklistEdited.farmerName,
			farmerCity: checklistEdited.farmerCity,
			from: checklistEdited.from,
			to: checklistEdited.to,
			created_at: checklistEdited.created_at,
			updated_at: dateBrazil.toString(),
		}

		const realm = await getRealm();

		realm.write(() => {
			realm.create('Checklists', data, "modified");
		})
	}

	function onFormChange(field, value) {

		setForm({
			...form,
			[field]: value
		});		
	}

	async function handleAddChecklist() {
		await saveChecklistLocal(form);
		Keyboard.dismiss();
		Alert.alert("Sucesso!", "Checklist criado.");
		navigation.goBack();
		navigation.goBack();
	}

  return (
    <ScrollContainer>

    	<FormRow>
    		<LineText>Tipo de checklist</LineText>
	    	<Picker
				selectedValue={form.type}
				style={{ height: 50, width: 150 }}
				onValueChange={(itemValue, itemIndex) => onFormChange('type', itemValue)}
			>
				<Picker.Item label="BPA" value="BPA" />
				<Picker.Item label="Antibiótico" value="Antibiótico" />
				<Picker.Item label="BPF" value="BPF" />
			</Picker>
		</FormRow>
    	<Input 
    		value={form.from}
    		onChangeText={value => onFormChange('from', value)}
    		autoCapitalize="none"
    		autocorrect={false}
    		placeholder="Nome do Fazendeiro"
    	/>

    	<Input 
    		value={form.farmerName}
    		onChangeText={value => onFormChange('farmerName', value)}
    		autoCapitalize="none"
    		autocorrect={false}
    		placeholder="Nome da Fazenda"
    	/>

    	<Input 
    		value={form.farmerCity}
    		onChangeText={value => onFormChange('farmerCity', value)}
    		autoCapitalize="none"
    		autocorrect={false}
    		placeholder="Cidade da Fazenda"
    	/>

    	<Input 
    		value={form.amount_of_milk_produced}
    		onChangeText={value => onFormChange('amount_of_milk_produced', value)}
    		autoCapitalize="none"
    		keyboardType='numeric'
    		autocorrect={false}
    		placeholder="Quantidade de leite produzido"
    	/>

    	<Input 
    		value={form.number_of_cows_head}
    		onChangeText={value => onFormChange('number_of_cows_head', value)}
    		autoCapitalize="none"
    		keyboardType='numeric'
    		autocorrect={false}
    		placeholder="Quantidade de vacas"
    	/>

    	<FormRow>
    		<LineText>Houve supervisão</LineText>
	    	<Picker
				selectedValue={form.had_supervision}
				style={{ height: 50, width: 150 }}
				onValueChange={(itemValue, itemIndex) => onFormChange('had_supervision', itemValue)}
			>
				<Picker.Item label="Não" value={false} />
				<Picker.Item label="Sim" value={true} />
			</Picker>
		</FormRow>

    	<Input 
    		value={form.to}
    		onChangeText={value => onFormChange('to', value)}
    		autoCapitalize="none"
    		autocorrect={false}
    		placeholder="Nome do Supervisor"
    	/>

    	<EditButton onPress={handleAddChecklist}>
    		<ButtonTitle> Salvar </ButtonTitle>
    		<Feather name="save" size={24} color="black" />
    	</EditButton>
    </ScrollContainer>
  );
}