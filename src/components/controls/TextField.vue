<script setup lang="ts">

const props = defineProps<{
    noLabel?: boolean
    inline?: boolean
    label?: string
    id: string
    placeholder?: string
    modelValue: any
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <div :class="{
        'input-group': true,
        'input-group--nolabel': noLabel,
        'input-group--inline': inline
    }">
        <label v-if="!noLabel" :for="id">{{ label }}</label>
        <input :id="id" :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" type="text"
            :placeholder="placeholder" />
    </div>
</template>
