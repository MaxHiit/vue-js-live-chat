<template>
	<div class="container">
		<h1>Welcome</h1>
		<div class="flex flex-row gap gap-8">
			<div class="w-6/12">
				<img v-if="showLogin == false" alt="Vue logo" src="../assets/image-login.png" />
				<div v-if="showLogin">
					<h2>Login</h2>
					<LoginForm />
					<p>No account yet? <span @click="handleShowSignup">Sign Up</span> instead</p>
				</div>
			</div>

			<div class="w-6/12">
				<img v-if="showLogin" alt="Vue logo" src="../assets/image-login.png" />
				<div v-else>
					<h2>Sign Up</h2>
					<SignupForm />
					<p>Already registered? <span @click="handleShowSignup">Sign In</span> instead</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import SignupForm from '@/components/SingupForm.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
	name: 'Welcome',
	components: {
		SignupForm,
		LoginForm
	},
	setup() {
		const showLogin = ref(true);

		const handleShowSignup = () => {
			showLogin.value = !showLogin.value;
		};

		return { showLogin, handleShowSignup };
	}
};
</script>
