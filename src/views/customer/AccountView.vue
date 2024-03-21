<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRouteName = computed(() => route.name)
</script>

<template>
    <div class="account container">
        <div class="account__content">
            <div v-if="currentRouteName == 'account'">My Account page</div>
            <RouterView />
        </div>
        <div class="account__sidebar">
            <ul class="list">
                <li :class="{ 'list__item': true, 'active': currentRouteName == 'account' }">
                    <RouterLink :to="{ name: 'account' }">My Acount</RouterLink>
                </li>
                <li :class="{ 'list__item': true, 'active': currentRouteName == 'order_history' }">
                    <RouterLink :to="{ name: 'order_history' }">Orders</RouterLink>
                </li>
                <li :class="{ 'list__item': true, 'active': currentRouteName == 'logout' }">
                    <RouterLink :to="{ name: 'logout' }">Logout</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
