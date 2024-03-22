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
    <div class="container">
        <Gallery :gallery="gallery"></Gallery>
    </div>
</template>