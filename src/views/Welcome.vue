<template>
	<div class="container">
		<h1>Welcome</h1>

		<div class="flex flex-row gap gap-8">
			<transition
				appear
				@before-enter="beforeEnterOpacity"
				@enter="enterOpacity"
				@before-leave="beforeLeave"
				@leave="leaveOpacity"
				:css="false"
			>
				<div v-if="showLogin" class="w-6/12">
					<h2>Login</h2>
					<LoginForm @login="enterChat" />
					<p>
						No account yet?
						<span @click="handleShowSignup" class="text-violet-700 cursor-pointer font-semibold"
							>Sign Up</span
						>
						instead
					</p>
				</div>
				<div v-else class="w-6/12">
					<h2>Sign Up</h2>
					<SignupForm @signup="enterChat" />
					<p>
						Already registered?
						<span @click="handleShowSignup" class="text-violet-700 cursor-pointer font-semibold"
							>Sign In</span
						>
						instead
					</p>
				</div>
			</transition>
			<transition appear @before-enter="beforeEnterScale" @enter="enterScale">
				<template v-if="showLogin">
					<img class="w-6/12" alt="Vue logo" src="../assets/image-login.png" />
				</template>
				<template v-else>
					<img class="w-6/12" alt="Vue logo" src="../assets/image-login.png" />
				</template>
			</transition>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import gsap from 'gsap';
import SignupForm from '@/components/SingupForm.vue';
import LoginForm from '@/components/LoginForm.vue';
import { useRouter } from 'vue-router';

export default {
	name: 'Welcome',
	components: {
		SignupForm,
		LoginForm
	},
	setup() {
		const showLogin = ref(true);
		const router = useRouter();

		const handleShowSignup = () => {
			showLogin.value = !showLogin.value;
		};

		const enterChat = () => {
			router.push({ name: 'Chatroom' });
		};

		const beforeEnterScale = (el) => {
			el.style.transform = 'scaleX(0)';
		};

		const enterScale = (el, done) => {
			gsap.to(el, {
				scaleX: 1,
				transformOrigin: 'right center',
				duration: 0.4,
				onComplete: done
			});
		};

		const beforeLeave = (el) => {
			console.log('before leave - make transition');
		};

		const leave = (el) => {
			gsap.to(el, {
				scaleX: 0,
				transformOrigin: 'left center',
				duration: 0.4
			});
		};

		const beforeEnterOpacity = (el) => {
			el.style.opacity = 0;
			el.style.transform = 'translateX(100px)';
		};

		const enterOpacity = (el, done) => {
			gsap.to(el, {
				opacity: 1,
				x: 0,
				duration: 0.4,
				onComplete: done
			});
		};

		return {
			showLogin,
			handleShowSignup,
			enterChat,
			beforeEnterScale,
			enterScale,
			beforeLeave,
			leave,
			beforeEnterOpacity,
			enterOpacity
		};
	}
};
</script>
