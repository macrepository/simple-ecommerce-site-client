<script setup lang="ts">
import { ref } from 'vue';
import { useCustomerStore } from '@/stores/CustomerStore';
import { useFlash } from '@/composable/useFlash';
import { Form } from 'vee-validate';
import { validationCustomerLoginSchema } from '@/validations/validation';
import { catchErrors } from '@/utilities/CatchErrors'
import { useRouter } from 'vue-router';

const customer = useCustomerStore();
const { errorFlash } = useFlash();
const router = useRouter();

const email = ref('');
const password = ref('');

function loginAccount(
    formValues: any,
    { setErrors, resetForm }: {
        setErrors: (errors: Record<string, string>) => void,
        resetForm: () => void
    }) {
    catchErrors(async () => {
        const response = await customer.login(formValues);
        if (response.code == 'success') {
            resetForm();
            router.push({ name: 'account'});
        } else {
            errorFlash(response.message);
        }
    }, setErrors, errorFlash);
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