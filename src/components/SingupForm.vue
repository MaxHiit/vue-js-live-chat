<template>
	<form @submit.prevent="handleSubmit">
		<input type="text" v-model="displayName" required placeholder="enter your name" />
		<input type="email" v-model="email" required placeholder="enter your email" />
		<input type="password" v-model="password" required placeholder="enter your password" />
		<div class="text-violet-500">{{ error }}</div>
		<button class="btn">Sign Up</button>
	</form>
</template>

<script>
import { ref } from 'vue';
import useAuth from '@/composables/useAuth';

export default {
	name: 'SignupForm',
	setup(props, context) {
		const { error, signup } = useAuth();

		// refs
		const displayName = ref('');
		const email = ref('');
		const password = ref('');

		const handleSubmit = async () => {
			await signup(email.value, password.value, displayName.value);
			if (!error.value) {
				context.emit('signup');
				console.log('user sign up');
			}
		};

		return { handleSubmit, displayName, email, password, error };
	}
};
</script>

<style>
form {
	width: 300px;
	margin: 20px auto;
	display: flex;
	flex-direction: column;
	align-items: baseline;
	gap: 20px;
}

input {
	width: 100%;
	padding: 10px !important;
	border-radius: 20px;
	border: 1px solid #eee;
}
</style>
