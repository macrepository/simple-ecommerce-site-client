<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { imageGallery } from '@/types/product'

const imageSelected = ref()
const imageWidth = ref()
const galleryImagesContainer = ref()
const isDragging = ref(false)
const startX = ref(0)
const scrollStartX = ref(0)
const scrollPosition = ref(0);
const maxScroll = ref(0);

let scrollInterval: any = null

const props = defineProps<{
    gallery: imageGallery[]
}>();

const selectImage = (imgSelected: number) => {
    const [selectedImge] = props.gallery.filter(image => image.id == imgSelected);
    imageSelected.value = selectedImge;
}

const prevClick = () => {
    if (galleryImagesContainer?.value) {
        galleryImagesContainer.value.scrollLeft -= imageWidth.value
    }
}

const nextClick = () => {
    if (galleryImagesContainer?.value) {
        galleryImagesContainer.value.scrollLeft += imageWidth.value
    }
}

const startDrag = (event: MouseEvent) => {
    isDragging.value = true
    startX.value = event.pageX
    scrollStartX.value = galleryImagesContainer.value.scrollLeft
}

const duringDrag = (event: MouseEvent) => {
    if (!isDragging.value) return
    const dx = event.pageX - startX.value
    galleryImagesContainer.value.scrollLeft = scrollStartX.value - dx
}

const startScrolling = (action: () => void) => {
    action()
    scrollInterval = setInterval(action, 100)
}

const stopScrolling = () => {
    if (scrollInterval) {
        clearInterval(scrollInterval)
        scrollInterval = null
    }
}

const toggleGalleryAction = () => {
    scrollPosition.value = galleryImagesContainer.value.scrollLeft;
    maxScroll.value = galleryImagesContainer.value.scrollWidth - galleryImagesContainer.value.clientWidth;
}

onMounted(() => {
    galleryImagesContainer.value = document.querySelector('.gallery__images')
    imageWidth.value = galleryImagesContainer.value.querySelector('.gallery__image').offsetWidth
    toggleGalleryAction();
    imageSelected.value = props.gallery[0];
})

</script>
<template>
    <div class="gallery">
        <div class="gallery__picked">
            <img class="gallery__picked-image" :src="imageSelected?.url" :alt="imageSelected?.alt" />
        </div>
        <div class="gallery__images-container">
            <div :class="{ 'gallery__images': true, 'grabbing': isDragging }" @scroll="toggleGalleryAction"
                @mousedown.prevent="startDrag" @mousemove="duringDrag" @mouseleave="isDragging = false"
                @mouseup="isDragging = false">
                <img v-for="image in gallery" :key="image.id" :src="image.url" :alt="image.alt"
                    :class="{ 'gallery__image': true, 'active': image.id == imageSelected?.id }"
                    @click="selectImage(image.id)" @mouseover="selectImage(image.id)" />
            </div>
            <button class="gallery__btn gallery__btn-prev" v-if="scrollPosition != 0" @mousedown="startScrolling(prevClick)"
                @mouseup="stopScrolling" @mouseleave="stopScrolling">
                <IconChevronLeft />
            </button>
            <button class="gallery__btn gallery__btn-next" v-if="scrollPosition != maxScroll"
                @mousedown="startScrolling(nextClick)" @mouseup="stopScrolling" @mouseleave="stopScrolling">
                <IconChevronRight />
            </button>
        </div>
    </div>
</template>
