<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps<{
    noLabel?: boolean
    inline?: boolean
    label?: string
    id: string,
    type?: string
    placeholder?: string
    modelValue: any
}>()

const emit = defineEmits(['update:modelValue']);

const type = computed(() => props.type ?? 'text');

</script>

<template>
    <div :class="{
        'input-group': true,
        'input-group--nolabel': noLabel,
        'input-group--inline': inline
    }">
        <label v-if="!noLabel" :for="id">{{ label }}</label>
        <input :type="type" :id="id" :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" :placeholder="placeholder" />
    </div>
</template>
