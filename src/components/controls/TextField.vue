<script setup lang="ts">
import { computed } from 'vue';
import { Field, ErrorMessage } from 'vee-validate';

const props = defineProps<{
    noLabel?: boolean
    inline?: boolean
    label?: string
    id?: string
    type?: string
    name: string
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
        <Field :type="type" :id="id" :name="name" :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" :placeholder="placeholder" />
        <ErrorMessage :name="name" />
    </div>
</template>
