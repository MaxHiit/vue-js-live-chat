<template>
	<div class="container">
		<Logo />
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et voluptatum eaque, debitis
			dolorum laborum voluptas voluptates rerum neque quo eveniet tempora consequatur perspiciatis
			eligendi, culpa architecto, asperiores similique repudiandae? Ab aspernatur repellendus
			repudiandae, eligendi autem esse facilis voluptate ipsa saepe doloribus, expedita ullam dolore
			eos officia deserunt placeat, reiciendis labore. Corrupti modi aut quidem porro quia beatae.
			Tempore architecto aspernatur reiciendis esse, dicta consequuntur aliquid libero, quas hic
			suscipit aut, animi nemo dignissimos exercitationem accusamus atque. Architecto cumque temporibus
			perspiciatis deserunt laborum! Deserunt, aliquam amet? Eum consequuntur, velit debitis, nesciunt
			nostrum architecto vel iusto odio rerum facilis, eius quibusdam.
		</p>
		<div class="flex flex-row gap-8">
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
					<img class="w-6/12 rounded-lg" alt="Vue logo" src="../assets/image-login.png" />
				</template>
				<template v-else>
					<img class="w-6/12 rounded-lg" alt="Vue logo" src="../assets/image-login.png" />
				</template>
			</transition>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import gsap from 'gsap';
import Logo from '@/components/Logo.vue';
import SignupForm from '@/components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue';
import { useRouter } from 'vue-router';

export default {
	name: 'Welcome',
	components: {
		Logo,
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
