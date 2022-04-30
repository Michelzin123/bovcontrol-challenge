import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 

import { Container, Name, Farm, Dates, DatesTitle, MoreButton, MoreButtonTitle, RowContent } from './styles.js';

export default function Checklist({ data }) {
	const navigation = useNavigation();
  return (
    <Container>
    	<TouchableOpacity onPress={() => navigation.navigate('Detail', { checklist: data })}>
    		<RowContent>
	    		<Name>{ data.from }</Name>
				<AntDesign name="arrowright" size={24} color="black" />
	    	</RowContent>
	    	<Farm>{`${data.farmerName} - ${data.farmerCity}`}</Farm>
	    	<DatesTitle>Criado em:</DatesTitle>
	    	<Dates>{data.created_at}</Dates>
    	</TouchableOpacity>
    </Container>
  );
}