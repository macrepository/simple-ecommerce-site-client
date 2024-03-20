import { defineStore } from 'pinia'
import axiosInstance from '@/config/axios'
import type { CustomerCreate, CustomerLogin } from '@/types/customer'
import type { ApiResponse } from '@/types/apiResponse';

export const useCustomerStore = defineStore('customer', {
  state: () => ({ customer: {} }),
  actions: {
    async create(payload: CustomerCreate): Promise<ApiResponse> {
      const { data: response }: { data: ApiResponse } = await axiosInstance.post('/api/customer', payload);
      return response
    },
    async login(payload: CustomerLogin) {
      const result = await axiosInstance.post('/api/customer/login', payload);
      return result.data
    }
  },
  getters: {}
})
