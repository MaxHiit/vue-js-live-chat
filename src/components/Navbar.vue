<template>
	<nav v-if="user" class="flex justify-between items-center rounded-t-lg p-5 bg-violet-200">
		<div>
			<p>Hey {{ user.displayName }}</p>
			<p>Currently logged in as {{ user.email }}</p>
		</div>
		<button class="btn w-fit" @click="handleClick">Logout</button>
	</nav>
</template>

<script>
import useAuth from '@/composables/useAuth';
import getUser from '@/composables/getUser';

export default {
	setup() {
		const { logout, error } = useAuth();
		const { user } = getUser();

		const handleClick = async () => {
			await logout();
			if (!error.value) {
				console.log('user loged out');
			}
		};
		return { handleClick, user };
	}
};
</script>

<style></style>
