import { ref } from 'vue';
import { db } from '@/firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const useCollection = (collectionName) => {
	const error = ref(null);

	// add new document into firestore collection
	const addNewDoc = async (doc) => {
		error.value = null;

		try {
			await addDoc(collection(db, collectionName), doc);
		} catch (err) {
			console.log(err.message);
			error.value = 'could not send the message';
		}
	};

	return { error, addNewDoc };
};

export default useCollection;
