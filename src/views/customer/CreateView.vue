<script setup lang="ts">
import { ref } from 'vue';
import { useStorage } from '@/composable/useStorage';
import { Form } from 'vee-validate';
import { validationCustomerCreateAccountSchema } from '@/validations/validation';
import { catchErrors } from '@/utilities/CatchErrors'
import { useFlash } from '@/composable/useFlash';
import { useCustomerStore } from '@/stores/CustomerStore';

const customer = useCustomerStore();
const { errorFlash } = useFlash();
const storageKey = 'create';
const storageInitial = {
    first_name: '',
    last_name: '',
    email: ''
};
let create = useStorage(storageKey, storageInitial);
const password = ref('');
const repeatPassword = ref('');

function createAccount(
    formValues: any,
    { setErrors, resetForm }: {
        setErrors: (errors: Record<string, string>) => void,
        resetForm: () => void
    }) {
    catchErrors(async () => {
        const response = await customer.create(formValues);
        if (response.code == 'success') {
            localStorage.removeItem(storageKey);
            resetForm();
            create.value = storageInitial;
        } else {
            errorFlash(response.message);
        }
    }, setErrors, errorFlash);
}
</script>

<template>
    <FormCard class="create">
        <template #title>Create an Account</template>
        <template #content>
            <Form :validation-schema="validationCustomerCreateAccountSchema" @submit="createAccount">
                <TextField type="text" label="First Name" id="first-name" name="first_name"
                    placeholder="Enter your first name.." v-model="create.first_name" />
                <TextField type="text" label="Last Name" id="last-name" name="last_name"
                    placeholder="Enter your last name.." v-model="create.last_name" />
                <TextField type="email" label="Email" id="email" name="email" placeholder="Enter your email.."
                    v-model="create.email" />
                <TextField type="password" label="Password" id="password" name="password"
                    placeholder="Enter your password.." v-model="password" />
                <TextField type="password" label="Repeat Password" id="repeat-password" name="repeat_password"
                    placeholder="Repeat your password.." v-model="repeatPassword" />
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