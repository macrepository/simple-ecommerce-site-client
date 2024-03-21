<script setup lang="ts">
const props = defineProps<{
    accent?: boolean,
    primary?: boolean,
    vertical?: boolean
}>();


</script>

<template>
    <span :class="{
        'badge': true,
        'badge--accent': accent,
        'badge--primary': primary,
        'badge--vertical': vertical
    }">
        <slot />
    </span>
</template>