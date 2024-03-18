<script setup lang="ts">
import { ref } from 'vue';
import { Form } from 'vee-validate';
import { validationCustomerLoginSchema } from '@/validations/validation';

const email = ref('');
const password = ref('');

function loginAccount<T>(data: T) {
    alert(JSON.stringify(data, null, 2));
}

</script>
<template>
    <FormCard class="login">
        <template #title>Shopping Login</template>
        <template #content>
            <Form :validation-schema="validationCustomerLoginSchema" @submit="loginAccount">
                <TextField type="email" label="Email" id="email" name="email" placeholder="Enter your email.."
                    v-model="email" />
                <TextField type="password" label="Password" id="password" name="password"
                    placeholder="Enter your password.." v-model="password" />
                <div class="login__action">
                    <Button primary>Login</Button>
                    <RouterLink to="/forgotpassword">Forgot Password</RouterLink>
                </div>
            </Form>
        </template>
        <template #footer>
            <p>No account yet?</p>
            <RouterLink to="/customer/create">Create an account</RouterLink>
        </template>
    </FormCard>
</template>