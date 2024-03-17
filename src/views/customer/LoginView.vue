<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');

</script>
<template>
    <FormCard class="login">
        <template #title>Shopping Login</template>
        <template #content>
            <form action="">
                <TextField type="email" label="Email" id="email" placeholder="Enter your email.." v-model="email" />
                <TextField type="password" label="Password" id="password" placeholder="Enter your password.."
                    v-model="password" />
                <div class="login__action">
                    <Button primary>Login</Button>
                    <RouterLink to="/forgotpassword">Forgot Password</RouterLink>
                </div>
            </form>
        </template>
        <template #footer>
            <p>No account yet?</p>
            <RouterLink to="/customer/create">Create an account</RouterLink>
        </template>
    </FormCard>
</template>