<script setup lang="ts">
defineProps<{
    primary?: boolean
}>();
</script>

<template>
    <button :class="{
        'btn': true,
        'btn--primary': primary
    }">
        <slot />
    </button>
</template>