<script setup lang="ts">
import { ref } from 'vue';

const quantity = ref(0);
const increment = (): void => {
    let qtyCounter = +quantity.value;
    quantity.value = qtyCounter + 1;
}

const decrement = (): void => {
    let qtyCounter = +quantity.value;
    if (qtyCounter > 0) {
        quantity.value = qtyCounter - 1;
    } else {
        quantity.value = 0;
    }
}

const allowIntegersOnly = (event: KeyboardEvent): void => {
    if (!/[\d]|Backspace|Tab|ArrowLeft|ArrowRight/.test(event.key)) {
        event.preventDefault();
    }
}
</script>

<template>
    <div class="quantity">
        <Button primary @click="decrement">
            <IconMinus />
        </Button>
        <TextField noLabel id="quantity" type="number" name="quantity" v-model="quantity"
            @keydown="allowIntegersOnly" />
        <Button primary @click="increment">
            <IconPlus />
        </Button>
    </div>
</template>