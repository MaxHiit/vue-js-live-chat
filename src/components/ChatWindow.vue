<template>
	<div class="chat-window bg-slate-100 p-5 w-full">
		<div v-if="error" class="error">{{ error }}</div>
		<div
			v-if="documents"
			class="messages flex flex-col gap-3 max-h-[400px] h-full overflow-auto"
			ref="messages"
		>
			<div v-for="doc in formattedDocuments" :key="doc.id" class="single flex flex-col gap-1 w-full">
				<p class="created-at text-xs text-neutral-500">{{ doc.createdAt }}</p>
				<div class="flex gap-4">
					<p class="name font-semibold capitalize text-zinc-600">{{ doc.name }}</p>
					<p class="message">{{ doc.message }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import { formatDistanceToNow } from 'date-fns';
import { ref, computed, onUpdated } from 'vue';

export default {
	name: 'ChatWindow',
	setup() {
		const { error, documents } = getCollection('messages');

		const formattedDocuments = computed(() => {
			if (documents.value) {
				return documents.value.map((doc) => {
					let time = formatDistanceToNow(doc.createdAt.toDate());

					return { ...doc, createdAt: time };
				});
			}
		});

		// auto-scroll to bottom of messages
		const messages = ref(null);

		onUpdated(() => {
			messages.value.scrollTop = messages.value.scrollHeight;
		});

		return { error, documents, formattedDocuments, messages };
	}
};
</script>

<style></style>
