import React, {Component} from 'react';

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Criação do Stack Navigator
const Stack = createNativeStackNavigator();

//Importando telas
import Home from './Pages/Home.js';
import Detail from './Pages/Detail.js';
import Create from './Pages/Create.js';
import Update from './Pages/Update.js';

export default function Router() {
	return (
		<NavigationContainer>
			<Stack.Navigator 
				initialRouteName="Home"
				screenOptions={{
			        headerStyle: {
						backgroundColor: '#46a0cd',
					},
					headerTintColor: 'black',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
			    }}
			>
				<Stack.Screen 
					name="Home" 
					component={Home} 
					options={{ title: "Meus Checklists", headerShown: false}}
				/>
				<Stack.Screen 
					name="Detail" 
					component={Detail} 
				/>
				<Stack.Screen 
					name="Create" 
					component={Create}
					options={{ title: "Novo checklist"}} 
				/>
				<Stack.Screen 
					name="Update" 
					component={Update} 
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}