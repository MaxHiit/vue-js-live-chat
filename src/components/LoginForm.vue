<template>
	<form @submit.prevent="handleSubmit">
		<input type="email" v-model="email" required placeholder="enter your email" />
		<input type="password" v-model="password" required placeholder="enter your password" />
		<div class="error">{{ error }}</div>
		<button class="btn">Sign In</button>
	</form>
</template>

<script>
import { ref } from 'vue';
import useAuth from '@/composables/useAuth';

export default {
	name: 'LoginForm',
	setup(props, context) {
		const { error, login } = useAuth();

		// refs
		const email = ref('');
		const password = ref('');

		const handleSubmit = async () => {
			await login(email.value, password.value);
			if (!error.value) {
				context.emit('login');
				console.log('user logged in');
			}
		};

		return { handleSubmit, email, password, error };
	}
};
</script>

<style scoped>
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
