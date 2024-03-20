<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useSessionStorage } from '@/composable/useStorage'

const router = useRouter();
const { removeSession } = useSessionStorage();

const xAuthTokenKey = 'x-auth-token';
const customerSessionKey = 'customer';

removeSession(xAuthTokenKey);
removeSession(customerSessionKey);

router.push({ name: 'login' });
</script>