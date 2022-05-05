import { ref } from 'vue';
import {
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';
import { auth } from '@/firebase/config';

const error = ref(null);

const login = async (email, password) => {
	error.value = null;
	try {
		const res = await signInWithEmailAndPassword(auth, email, password);
		error.value = null;
		return res;
	} catch (err) {
		console.log(err.message);
		error.value = 'Incorrect login credentials';
	}
};

const logout = async () => {
	error.value = null;

	try {
		await signOut(auth);
	} catch (err) {
		console.log(err.message);
		error.value = err.message;
	}
};

const signup = async (email, password, displayName) => {
	error.value = null;

	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);

		if (!res) {
			throw new Error('Could not complete the signup');
		}

		await updateProfile(res.user, { displayName });

		error.value = null;
		return res;
	} catch (err) {
		console.log(err.message);
		error.value = err.message;
	}
};

const useAuth = () => {
	return { error, login, logout, signup };
};

export default useAuth;
