<template>
	<form @submit.prevent="handleSubmit">
		<input type="email" v-model="email" required placeholder="enter your email" />
		<input type="password" v-model="password" required placeholder="enter your password" />
		<button class="btn">Sign In</button>
	</form>
</template>

<script>
import { ref } from 'vue';

export default {
	name: 'LoginForm',
	setup() {
		const email = ref('');
		const password = ref('');

		const handleSubmit = () => {
			console.log(email.value, password.value);
		};

		return { handleSubmit, email, password };
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
