<template>
	<div class="container">
		<Logo />
		<h1 class="text-center text-xl my-6">
			Leave a comment below. It could be anything – appreciation, information, wisdom, or even humor.
			Surprise me!
		</h1>
		<div class="flex flex-col lg:flex-row gap-8 h-full lg:h-[310px]">
			<transition
				appear
				@before-enter="formAnimationBeforeEnter"
				@enter="formAnimationEnter"
				:css="false"
			>
				<div v-if="showLogin" class="w-full lg:w-6/12 order-2 lg:order-1">
					<LoginForm @login="enterChat" />
				</div>
				<div v-else class="w-full lg:w-6/12 order-2 lg:order-1">
					<SignupForm @signup="enterChat" />
				</div>
			</transition>

			<div v-if="showLogin" class="w-full lg:w-6/12 order-1 lg:order-2 flex flex-col items-center">
				<LoginLogo />
				<p class="text-center">
					No account yet?
					<span @click="handleShowSignup" class="text-violet-700 cursor-pointer font-semibold"
						>Sign Up</span
					>
					instead
				</p>
			</div>
			<div
				v-else
				class="w-full lg:w-6/12 order-1 lg:order-2 flex flex-col items-center justify-center"
			>
				<SignupLogo />
				<p class="text-center">
					Already registered?
					<span @click="handleShowSignup" class="text-violet-700 cursor-pointer font-semibold"
						>Sign In</span
					>
					instead
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import Logo from '@/components/Logo.vue';
import SignupForm from '@/components/SignupForm.vue';
import LoginLogo from '@/components/LoginLogo.vue';
import SignupLogo from '@/components/SignupLogo.vue';
import LoginForm from '@/components/LoginForm.vue';
import { useRouter } from 'vue-router';
import useAnimation from '@/composables/useAnimation';

export default {
	name: 'Welcome',
	components: {
		Logo,
		LoginLogo,
		SignupLogo,
		SignupForm,
		LoginForm
	},
	setup() {
		const showLogin = ref(true);
		const router = useRouter();

		const { formAnimationBeforeEnter, formAnimationEnter } = useAnimation();

		const handleShowSignup = () => {
			showLogin.value = !showLogin.value;
		};

		const enterChat = () => {
			router.push({ name: 'Chatroom' });
		};

		return {
			showLogin,
			handleShowSignup,
			enterChat,
			formAnimationBeforeEnter,
			formAnimationEnter
		};
	}
};
</script>

<style></style>
