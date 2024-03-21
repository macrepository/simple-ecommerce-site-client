<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCustomerStore } from '@/stores/CustomerStore';

const router = useRouter();
const customer = useCustomerStore();

customer.logout();

router.push({ name: 'login' });
</script>