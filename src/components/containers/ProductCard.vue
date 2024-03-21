<script setup lang="ts">
const props = defineProps<{
    link: string
    image: string
    alt: string
    price: string
    isSoldOut?: boolean
    productId: number
}>()
</script>

<template>
    <div class="product-card">
        <RouterLink :to="link">
            <figure class="product-card__figure">
                <img class="product-card__photo" :src="image" :alt="alt">
                <figcaption class="product-card__name"><slot /></figcaption>
            </figure>
        </RouterLink>
        <div class="product-card__information">
            <span class="product-card__price">{{ price }}</span>
            <Badge primary vertical class="product-card__sold" v-if="isSoldOut">sold out</Badge>
        </div>
        <div class="product-card__actions">
            <Button primary v-if="!isSoldOut">Add to cart</Button>
        </div>
    </div>
</template>