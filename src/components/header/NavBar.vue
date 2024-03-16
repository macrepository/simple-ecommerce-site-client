<script setup lang="ts">

import { ref } from 'vue';

const search = ref('');
const NumberOfCartItems = ref(0);
const isDrawerOpen = ref(false);

</script>

<template>
    <header class="header">
        <nav class="nav">
            <div class="nav__top">
                <IconHamburger class="nav__icon-hamburger" @click="isDrawerOpen = true" />
                <RouterLink to="/" class="brand">Shopping</RouterLink>
                <ul class="list list--inline">
                    <li class="list__item">
                        <RouterLink to="/cart">
                            <ListWithBadge>
                                <IconCart />
                                <template #badge>{{ NumberOfCartItems }}</template>
                            </ListWithBadge>
                        </RouterLink>
                    </li>
                    <li class="list__item">
                        <RouterLink to="/account">
                            <IconUser />
                        </RouterLink>
                    </li>
                </ul>
                <div class="search-block">
                    <TextField no-label id="search" placeholder="Search..." v-model="search" />
                </div>
            </div>
            <div class="nav__bottom">
                <Drawer v-model:isDrawerOpen="isDrawerOpen">
                    <Collapsible class="header__collapsible">
                        <span>categories</span>
                        <template #icon>
                            <IconChevronDown />
                        </template>
                        <template #content>
                            <ul class="list header__links">
                                <li class="list__item">
                                    <RouterLink to="/pc">PC</RouterLink>
                                </li>
                                <li class="list__item">
                                    <RouterLink to="/mobile">MOBILE</RouterLink>
                                </li>
                                <li class="list__item">
                                    <RouterLink to="/shoes">SHOES</RouterLink>
                                </li>
                            </ul>
                        </template>
                    </Collapsible>
                </Drawer>
            </div>
        </nav>
    </header>
</template>