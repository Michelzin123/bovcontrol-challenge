import React, { createContext, useState } from 'react';

export const ChecklistContext = createContext({})

function ChecklistProvider({children}) {
	return(
		<ChecklistContext.Provider value={{
			checklists: [
    			{
					"id": "1", // Identificação única
					"type": "BPA", // Tipo de checklist
					"amount_of_milk_produced": "300", // Quantidade de produção de leite
					"number_of_cows_head": "17", // Quantidade de vacas
					"had_supervision": true, // Flag para identificar se teve supervisão
					"farmer": { // Dados da fazenda
						"name": "Fazenda São Rock",
						"city": "São Rock",
					},
					"from": {
						"name": "Luciano Camargo" // Nome do fazendeiro
					},
					"to": {
						"name": "Fernando Siqueira" // Nome do supervisor
					},
					"created_at": "2022-02-01T10:10:21.748Z", // Data de criação
					"updated_at": "2022-02-01T10:10:21.748Z", // Data de atualização
				},
			]
		}}>
			{children}
		</ChecklistContext.Provider>
	)
}

export default ChecklistProvider;