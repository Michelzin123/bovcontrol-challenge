export default class RepositorySchema {
	static schema ={
		name: 'Checklist',
		primaryKey: 'id',
		properties: {
			id: { type: 'int', indexed: true },
			type: 'string',
			amount_of_milk_produced: 'string',
			// number_of_cows_head: 'string',
			// had_supervision: 'bool',
			// farmer: 'object',
			// from: 'object',
			// to: 'object',
			// created_at: 'string',
			// updated_at: 'string',
		},
	};
}