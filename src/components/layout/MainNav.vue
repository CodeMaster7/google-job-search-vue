<script setup>
import { ref } from 'vue'
// Navigation-related logic directly here
const companyName = ref('Google Careers')
</script>

<template>
	<header class="w-full text-sm">
		<div class="fixed top-0 left-0 h-16 w-full bg-white">
			<div class="border-brand-gray-100 mx-auto flex h-full flex-nowrap border-b border-solid px-8">
				<a
					href="/"
					class="flex h-full items-center text-xl"
					>{{ companyName }}</a
				>
			</div>
		</div>
	</header>
</template>

