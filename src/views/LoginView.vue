<script setup lang="ts">
import { ref } from 'vue';


const email = ref('');
const password = ref('');

</script>
<template>
    <section class="login container">
        <div class="login__container">
            <h4 class="login__title">Shopping Login</h4>
            <form action="" class="login__content">
                <TextField type="email" label="Email" id="email" placeholder="Enter your email.." v-model="email" />
                <TextField type="password" label="Password" id="password" placeholder="Enter your password.."
                    v-model="password" />
                <div class="login__action">
                    <Button />
                    <RouterLink to="/forgotpassword">Forgot Password</RouterLink>
                </div>
            </form>
        </div>
    </section>
</template>