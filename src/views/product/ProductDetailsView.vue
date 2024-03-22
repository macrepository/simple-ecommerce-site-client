<script setup lang="ts">

const gallery = [
    { id: 1, alt: 'running shoes', url: '/shoes.jpg' },
    { id: 2, alt: 'active shoes', url: '/activeshoes_l.jpg' },
    { id: 3, alt: 'active shoes', url: '/activeshoes_m.jpg' },
    { id: 4, alt: 'active shoes', url: '/activeshoes_s.jpg' },
    { id: 5, alt: 'running shoes', url: '/shoes.jpg' },
    { id: 6, alt: 'running shoes', url: '/shoes.jpg' },
    { id: 7, alt: 'running shoes', url: '/shoes.jpg' },
    { id: 8, alt: 'running shoes', url: '/shoes.jpg' },
    { id: 9, alt: 'running shoes', url: '/shoes.jpg' },
    { id: 10, alt: 'running shoes', url: '/shoes.jpg' },
    { id: 11, alt: 'running shoes', url: '/shoes.jpg' },
    { id: 12, alt: 'running shoes', url: '/shoes.jpg' },
    { id: 13, alt: 'running shoes', url: '/shoes.jpg' },
    { id: 14, alt: 'running shoes', url: '/shoes.jpg' },
    { id: 15, alt: 'running shoes', url: '/shoes.jpg' },
    { id: 16, alt: 'running shoes', url: '/shoes.jpg' },

];

</script>
<template>
    <div class="product container">
        <div class="product__main">
            <div class="product__gallery">
                <Gallery :gallery="gallery" />
            </div>
            <div class="product__information">
                <div class="product__name"><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea accusamus vel nostrum, nobis nesciunt?</span></div>
                <div class="product__price"><span>P 200</span></div>
                <div class="product__actions"><Button primary>Add to Cart</Button></div>
            </div>
        </div>
        <div class="product__description">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facere in ex asperiores a quibusdam, ratione
                aperiam? Consectetur eum necessitatibus quo quaerat debitis, soluta quae! Suscipit voluptatibus dolore
                delectus, soluta consectetur eum impedit nisi optio laborum fugit doloribus veniam dolorem autem, unde
                nesciunt? Illum optio deleniti at iste neque debitis.
            </span>
        </div>
    </div>
</template>