<script setup lang="ts">

import { ref, computed } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRouteName = computed(() => route.name)

const search = ref('');
const NumberOfCartItems = ref(0);
const isDrawerOpen = ref(false);

const closeDrawer = (): void => {
    isDrawerOpen.value = false;
}

</script>

<template>
    <header class="header">
        <nav class="nav container">
            <div class="nav__top">
                <IconHamburger class="nav__icon-hamburger" @click="isDrawerOpen = true" />
                <RouterLink to="/" class="brand">Shopping</RouterLink>
                <ul class="list list--inline">
                    <li :class="{ 'list__item': true, 'active': currentRouteName == 'cart' }">
                        <RouterLink to="/cart">
                            <ListWithBadge>
                                <IconCart />
                                <template #badge>{{ NumberOfCartItems }}</template>
                            </ListWithBadge>
                        </RouterLink>
                    </li>
                    <li :class="{ 'list__item': true, 'active': currentRouteName == 'account' }">
                        <RouterLink :to="{ name: 'account' }">
                            <IconUser />
                        </RouterLink>
                    </li>
                </ul>
                <div class="search-block">
                    <TextField no-label id="search" placeholder="Search..." v-model="search" name="search" />
                </div>
            </div>
            <div class="nav__bottom">
                <Drawer v-model:isDrawerOpen="isDrawerOpen">
                    <Collapsible class="header__collapsible">
                        <span>All</span>
                        <template #icon>
                            <IconChevronDown />
                        </template>
                        <template #content>
                            <ul class="list header__links">
                                <li :class="{ 'list__item': true, 'active': currentRouteName == 'category' }">
                                    <RouterLink to="/category" @click="closeDrawer">Category</RouterLink>
                                </li>
                                <li :class="{ 'list__item': true, 'active': currentRouteName == 'new_arrival' }">
                                    <RouterLink to="/new-arrival" @click="closeDrawer">New Arrival</RouterLink>
                                </li>
                                <li :class="{ 'list__item': true, 'active': currentRouteName == 'products' }">
                                    <RouterLink :to="{ name: 'products' }" @click="closeDrawer">Products</RouterLink>
                                </li>
                            </ul>
                        </template>
                    </Collapsible>
                    <Collapsible class="header__collapsible">
                        <span>categories</span>
                        <template #icon>
                            <IconChevronDown />
                        </template>
                        <template #content>
                            <ul class="list header__links">
                                <li :class="{ 'list__item': true, 'active': currentRouteName == 'pc' }">
                                    <RouterLink to="/pc" @click="closeDrawer">PC</RouterLink>
                                </li>
                                <li :class="{ 'list__item': true, 'active': currentRouteName == 'mobile' }">
                                    <RouterLink to="/mobile" @click="closeDrawer">Mobile</RouterLink>
                                </li>
                                <li :class="{ 'list__item': true, 'active': currentRouteName == 'shoes' }">
                                    <RouterLink to="/shoes" @click="closeDrawer">Shoes</RouterLink>
                                </li>
                            </ul>
                        </template>
                    </Collapsible>
                </Drawer>
            </div>
        </nav>
    </header>
</template>