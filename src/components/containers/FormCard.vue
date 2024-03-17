<template>
    <section class="form-card container">
        <div class="form-card__container">
            <h4 class="form-card__title text-center"><slot name="title"/></h4>
            <div class="form-card__content">
                <slot name="content"/>
            </div>
            <div class="form-card__footer">
                <slot name="footer" />
            </div>
        </div>
    </section>
</template>