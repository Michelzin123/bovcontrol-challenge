import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import 'expo-dev-client'

import Router from './src/Router.js';

//Importando ContextAPI
import ChecklistProvider from './src/contexts/checklists';

export default function App() {
  return (
    <ChecklistProvider>
      <Router />
    </ChecklistProvider>
  );
}

