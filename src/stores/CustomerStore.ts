import { defineStore } from 'pinia'
import axiosInstance from '@/config/axios'
import axios from 'axios'
import { useSessionStorage } from '@/composable/useStorage'
import type { CustomerCreate, CustomerLogin } from '@/types/customer'
import type { ApiResponse } from '@/types/apiResponse'

const { setSession, getSession } = useSessionStorage()
const xAuthTokenKey = 'x-auth-token'
const customerSessionKey = 'customer'

export const useCustomerStore = defineStore('customer', {
  state: () => ({ customer: getSession(customerSessionKey) || {} }),
  actions: {
    async create(payload: CustomerCreate, autoLoggeddIn = false): Promise<ApiResponse> {
      const { data: response }: { data: ApiResponse } = await axiosInstance.post(
        '/api/customer',
        payload
      )

      if (autoLoggeddIn) {
        return await this.login({email: payload.email, password: payload.password});
      }

      return response
    },
    async login(payload: CustomerLogin): Promise<ApiResponse> {
      const result = await axiosInstance.post('/api/customer/login', payload)
      const { data: response }: { data: ApiResponse } = result
      const token = result.headers[xAuthTokenKey]

      if (token && response.code == 'success') {
        setSession(xAuthTokenKey, token)
        setSession(customerSessionKey, response.body)
        this.customer = response.body
      }

      return response
    }
  },
  getters: {}
})
