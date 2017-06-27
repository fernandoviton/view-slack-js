import { setUsers } from '../actions/index';
import users from '../reducers/users';

test('default user state', () => {
	expect(users(undefined, { type: undefined })).toEqual(
		{
			isLoading: false,
			items: [] });
		});

test('sets user replaces with specified users', () => {
	const a = new Map();
	a.a = 1;
	a.set('a', 2);
	const usersMap = users({ items: 'something' }, setUsers([{ name: 'new', id: 'a' }, { name: 'new2', id: 'b' }])).items;
	expect(usersMap.get('a')).toEqual({ name: 'new' });
	expect(usersMap.get('b')).toEqual({ name: 'new2' });
	expect(usersMap.size).toEqual(2);
});