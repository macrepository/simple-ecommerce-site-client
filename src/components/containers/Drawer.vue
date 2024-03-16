<script setup lang="ts">

defineProps<{
    isDrawerOpen: boolean
}>();

const emit = defineEmits(['update:isDrawerOpen'])

</script>

<template>
    <div :class="{
        'drawer': true,
        'drawer--open': isDrawerOpen
    }">
        <div class="drawer__content">
            <slot />
        </div>
        <IconCloseMark class="drawer__close" @click="$emit('update:isDrawerOpen', !isDrawerOpen)" />
    </div>
</template>