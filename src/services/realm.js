import Realm from 'realm';
import ChecklistSchema from '../schemas/ChecklistSchema';

export default function getRealm() {
	return Realm.open({
		schema: [ ChecklistSchema ],
	});
}