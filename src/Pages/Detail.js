import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 

import { 
	Container, 
	Title, 
	NumbersSection, 
	FarmerName,
	FarmName,
	Supervision,
	Item,
	DescriptionSection,
	LineRow,
	LineText,
	SectionTitle,
	Dates,
	TextNumber,
	LineTextNumber,
	NumbersRow,
	EditButton,
	ButtonTitle,
	ScrollContainer,
} from './styles.js';

export default function Detail({ route }) {

	const checklist = route.params?.checklist;

	const navigation = useNavigation();

  return (
    <ScrollContainer>
    	<Title>Detalhes do checklist</Title>

    	<FarmerName>
			{ checklist.from.name }
		</FarmerName>

		<FarmName>
			{`${checklist.farmer.name} - ${checklist.farmer.city}`}
		</FarmName>

    	<NumbersSection>
    		<NumbersRow>
				<MaterialCommunityIcons name="baby-bottle-outline" size={35} color="black" />
				<TextNumber>{ checklist.amount_of_milk_produced }</TextNumber>
				<MaterialCommunityIcons name="cow" size={40} color="brown" />
				<TextNumber>{ checklist.number_of_cows_head }</TextNumber>
			</NumbersRow>
    	</NumbersSection>

    	<DescriptionSection>
    		<SectionTitle>
    			Descrição
    		</SectionTitle>

			<LineRow>
	    		<LineText>Teve supervisão? </LineText>
				{ checklist.had_supervision == true 
					? <AntDesign name="checksquareo" style={{ marginTop: 2 }} size={24} color="black" /> 
					: <Entypo name="cross" size={24} style={{ marginTop: 2 }} color="black" />
				}
			</LineRow>
    		
			<LineText>Nome do supervisor: </LineText>
			<Item>
		 		{checklist.had_supervision == true ? checklist.to.name : "Não aplicável"}
			</Item>

			<LineText>Criado em: </LineText>
			<Dates>
		 		{ checklist.created_at }
			</Dates>

			<LineText>Atualizado em: </LineText>
			<Dates>
		 		{ checklist.updated_at }
			</Dates>

			<EditButton onPress={() => navigation.navigate('Update')}>
	    		<ButtonTitle> Editar </ButtonTitle>
	    		<AntDesign name="edit" size={24} color="black" />
	    	</EditButton>
    		
    	</DescriptionSection>
    </ScrollContainer>
  );
}