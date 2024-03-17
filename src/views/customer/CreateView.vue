<script setup lang="ts">
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

</script>

<template>
    <FormCard class="login">
        <template #title>Create an Account</template>
        <template #content>
            <form action="">
                <TextField type="text" label="First Name" id="first-name" placeholder="Enter your first name.."
                    v-model="firstName" />
                <TextField type="text" label="Last Name" id="last-name" placeholder="Enter your last name.."
                    v-model="lastName" />
                <TextField type="email" label="Email" id="email" placeholder="Enter your email.." v-model="email" />
                <TextField type="password" label="Password" id="password" placeholder="Enter your password.."
                    v-model="password" />
                <TextField type="password" label="Confirm Password" id="confirm-password"
                    placeholder="Confirm your password.." v-model="confirmPassword" />
                <div class="create__action">
                    <Button primary>Create Account</Button>
                </div>
            </form>
        </template>
        <template #footer>
            <p>Already have an account?</p>
            <RouterLink to="/customer/login">Click Login</RouterLink>
        </template>
    </FormCard>
</template>