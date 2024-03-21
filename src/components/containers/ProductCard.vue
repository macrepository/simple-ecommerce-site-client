<template>
    <div class="product-card">
        <RouterLink to="/shoes">
            <figure class="product-card__figure">
                <img class="product-card__photo" src="/shoes.jpg" alt="running shoes">
                <figcaption class="product-card__name">running shoes</figcaption>
            </figure>
        </RouterLink>
        <div class="product-card__information">
            <span class="product-card__price">P 2000</span>
            <Badge primary vertical class="product-card__sold">1 sold</Badge>
        </div>
        <div class="product-card__actions">
            <Button primary>Add to cart</Button>
        </div>
    </div>
</template>