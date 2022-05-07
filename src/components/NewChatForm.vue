<template>
	<form class="w-full p-5 bg-violet-200 rounded-b-lg">
		<textarea
			class="w-full p-2.5 border-none rounded-2xl"
			placeholder="Type a message and hit enter to send..."
			v-model="message"
			@keypress.enter.prevent="handleSubmit"
		></textarea>
		<div class="error">{{ error }}</div>
	</form>
</template>

<script>
import { ref } from 'vue';
import getUser from '@/composables/getUser';
import useCollection from '@/composables/useCollection';
import { timestamp } from '@/firebase/config';

export default {
	name: 'NewChatForm',
	setup() {
		const { user } = getUser();
		const { addNewDoc, error } = useCollection('messages');

		const message = ref('');

		const handleSubmit = async () => {
			if (!message.value) {
				error.value = 'Input value is empty';
				return;
			}

			const chat = {
				name: user.value.displayName,
				message: message.value,
				createdAt: timestamp()
			};

			await addNewDoc(chat);
			if (!error.value) {
				message.value = '';
			}
			console.log('message send');
		};

		return { message, handleSubmit, error };
	}
};
</script>

<style></style>
