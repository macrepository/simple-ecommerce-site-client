<script setup lang="ts">
import { ref } from 'vue';

const isToggled = ref(false);

function toggle() {
    isToggled.value = !isToggled.value;
}

</script>
<template>
    <div :class="{
        'collapsible': true,
        'collapsible--expanded': isToggled
    }">
        <header class="collapsible__header" @click="toggle">
            <p class="collapsible__title">
                <slot />
            </p>
            <slot name="icon" />
        </header>
        <div class="collapsible__content">
            <slot name="content" />
        </div>
    </div>
</template>