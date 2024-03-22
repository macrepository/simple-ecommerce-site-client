<script setup lang="ts">

</script>
<template>
    <div class="container">
        <div class="cart">
            <div class="cart__item">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div class="cart__total">
                <TotalSummary />
                <div class="cart__checkout-action">
                    <Button primary>Proceed to Checkout</Button>
                </div>
            </div>
        </div>
    </div>
</template>