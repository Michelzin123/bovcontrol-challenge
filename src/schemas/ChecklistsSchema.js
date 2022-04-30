export default class ChecklistsSchema {
	static schema = {
		name: 'Checklists',
		primaryKey: 'id',
		properties: {
			id: { type: 'int', indexed: true },
			type: 'string',
			amount_of_milk_produced: 'string',
			number_of_cows_head: 'string',
			had_supervision: 'bool',
			farmerName: 'string',
			farmerCity: 'string',
			from: 'string',
			to: 'string',
			created_at: 'string',
			updated_at: 'string',
		},
	};
}