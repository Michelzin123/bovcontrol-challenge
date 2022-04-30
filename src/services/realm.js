import Realm from 'realm';
import ChecklistsSchema from '../schemas/ChecklistsSchema';

export default function getRealm() {
	return Realm.open({
		schema: [ ChecklistsSchema ],
	});
}