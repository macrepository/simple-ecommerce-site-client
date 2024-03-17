<script setup lang="ts">
import { useStorage } from '@/composable/useStorage';
import { Form } from 'vee-validate';
import { validationCreateAccountSchema } from '@/validations/validation';

const create = useStorage('create', {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
});


function register<T>(values: T) {
    alert(JSON.stringify(values, null, 2));
}

</script>

<template>
    <FormCard class="create">
        <template #title>Create an Account</template>
        <template #content>
            <Form :validation-schema="validationCreateAccountSchema" @submit="register">
                <TextField type="text" label="First Name" id="first-name" name="firstName"
                    placeholder="Enter your first name.." v-model="create.firstName" />
                <TextField type="text" label="Last Name" id="last-name" name="lastName"
                    placeholder="Enter your last name.." v-model="create.lastName" />
                <TextField type="email" label="Email" id="email" name="email" placeholder="Enter your email.."
                    v-model="create.email" />
                <TextField type="password" label="Password" id="password" name="password"
                    placeholder="Enter your password.." v-model="create.password" />
                <TextField type="password" label="Confirm Password" id="confirm-password" name="confirmPassword"
                    placeholder="Confirm your password.." v-model="create.confirmPassword" />
                <div class="create__action">
                    <Button primary>Create Account</Button>
                </div>
            </Form>
        </template>
        <template #footer>
            <p>Already have an account?</p>
            <RouterLink to="/customer/login">Click Login</RouterLink>
        </template>
    </FormCard>
</template>