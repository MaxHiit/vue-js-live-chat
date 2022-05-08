import { ref, watchEffect } from 'vue';
import { db } from '@/firebase/config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const getCollection = (collectionName) => {
	const documents = ref(null);
	const error = ref(null);

	// look for the collection corresponding to the name
	let collectionRef = collection(db, collectionName);

	// create a specific query
	const q = query(collectionRef, orderBy('createdAt'));

	const unsub = onSnapshot(
		q,
		(querySnapshot) => {
			// browse the documents in the collection and add them in a table
			const results = [];
			querySnapshot.forEach((doc) => {
				results.push({ ...doc.data(), id: doc.id });
			});

			documents.value = results;
			error.value = null;
		},
		(err) => {
			console.log(err.message);
			documents.value = null;
			error.value = 'could not fetch data';
		}
	);

	watchEffect((onInvalidate) => {
		// unsub from prev collection when watcher is stopped (component unmounted)
		onInvalidate(() => unsub());
	});

	return { documents, error };
};

export default getCollection;
