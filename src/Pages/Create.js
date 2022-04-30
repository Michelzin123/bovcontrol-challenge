import React, { useState } from 'react';
import { Keyboard, Alert, Picker } from 'react-native';

// import Picker from '@react-native-picker/picker';

import { useNavigation } from '@react-navigation/native';

import getRealm from '../services/realm';

import { ScrollContainer, Input, NewButton, ButtonTitle, FormRow, LineText} from './styles.js';

import { MaterialIcons } from '@expo/vector-icons'; 

export default function Create() {

	const navigation = useNavigation();

	const [ form, setForm ] = useState({
		"id": "",
		"type": "",
		"amount_of_milk_produced": "",
		"number_of_cows_head": "",
		"had_supervision": "",
		"farmer": {"name": "", "city": ""},
		"from": {"name": ""},
		"to": {"name": ""},
		"created_at": "",
		"updated_at": "",
	});

	async function saveChecklistLocal(checklist){

		const id = Math.floor(Math.random() * 256);
		let date = new Date();
		let dateAux = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);

		const dateBrazil = dateAux.toISOString();

		const data = {
			id: id,
			type: checklist.type,
			amount_of_milk_produced: checklist.amount_of_milk_produced,
			number_of_cows_head: checklist.number_of_cows_head,
			had_supervision: checklist.had_supervision,
			farmerName: checklist.farmer.name,
			farmerCity: checklist.farmer.city,
			from: checklist.from.name,
			to: checklist.to.name,
			created_at: dateBrazil.toString(),
			updated_at: dateBrazil.toString(),
		}

		console.log("DATA: ", data);

		const realm = await getRealm();

		realm.write(() => {
			realm.create('Checklists', data);
			// realm.delete(realm.objectForPrimaryKey('Checklist', Checklist.id));
			// realm.deleteAll();
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
    		value={form.from.name}
    		onChangeText={value => onFormChange('from', {"name": value})}
    		autoCapitalize="none"
    		autocorrect={false}
    		placeholder="Nome do Fazendeiro"
    	/>

    	<Input 
    		value={form.farmer.name}
    		onChangeText={value => onFormChange('farmer', {"name": value, "city": form.farmer.city})}
    		autoCapitalize="none"
    		autocorrect={false}
    		placeholder="Nome da Fazenda"
    	/>

    	<Input 
    		value={form.farmer.city}
    		onChangeText={value => onFormChange('farmer', {"name": form.farmer.name, "city": value})}
    		autoCapitalize="none"
    		autocorrect={false}
    		placeholder="Cidade da Fazenda"
    	/>

    	<Input 
    		value={form.farmer.amount_of_milk_produced}
    		onChangeText={value => onFormChange('amount_of_milk_produced', value)}
    		autoCapitalize="none"
    		keyboardType='numeric'
    		autocorrect={false}
    		placeholder="Quantidade de leite produzido"
    	/>

    	<Input 
    		value={form.farmer.number_of_cows_head}
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
    		value={form.to.name}
    		onChangeText={value => onFormChange('to', {"name": value})}
    		autoCapitalize="none"
    		autocorrect={false}
    		placeholder="Nome do Supervisor"
    	/>

    	<NewButton onPress={handleAddChecklist}>
    		<ButtonTitle> Novo </ButtonTitle>
    		<MaterialIcons name="add" size={24} color="black" />
    	</NewButton>
    </ScrollContainer>
  );
}