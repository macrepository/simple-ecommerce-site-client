import { useSessionStorage } from '@/composable/useStorage'

const { getSession } = useSessionStorage()
const xAuthTokenKey = 'x-auth-token'

export function isAuthenticated(): boolean {
  const token = getSession(xAuthTokenKey)
  return token ? true : false
}
