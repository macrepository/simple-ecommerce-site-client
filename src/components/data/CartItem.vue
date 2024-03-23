<script setup lang="ts">

</script>
<template>
    <div class="cart-item">
        <div class="cart-item__photo">
            <img src="/activeshoes_l.jpg" alt="Running shoes">
        </div>
        <div class="cart-item__product-information">
            <div class="cart-item__main-info">
                <div class="cart-item__name w-500">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, commodi!</span>
                </div>
                <div class="cart-item__price mt-2">
                    <span class="w-500">Price: </span>
                    <span>P 2000</span>
                </div>
            </div>
            <div class="cart-item__qty mt-1">
                <span class="w-500">Quantity: </span>
                <Counter />
            </div>
            <div class="cart-item__subtotal mt-1">
                <span class="w-500">Subtotal: </span>
                <span>P 2000</span>
            </div>
            <div class="cart-item__actions">
                <Button primary>Remove</Button>
            </div>
        </div>
    </div>
</template>