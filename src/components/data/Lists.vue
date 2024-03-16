<script setup lang="ts">

defineProps<{
    items: string[],
    inline?: boolean
}>();

</script>

<template>
    <ul :class="{
        'list': true,
        'list--inline': inline
    }">
        <li v-for="item in items" :key="item" class="list__item">{{ item }}</li>
    </ul>
</template>