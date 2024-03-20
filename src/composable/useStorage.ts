import { watch, ref } from 'vue'
import type { Ref } from 'vue'

export function useLocalStorage() {
  function createStorage<T>(key: string, data: T | null = null): Ref<T> {
    const item = localStorage.getItem(key)
    const storedValue: T | null = item ? JSON.parse(item) : data
    const value: Ref = ref<T | null>(storedValue)

    watch(
      value,
      (newValue) => {
        if (newValue === null || newValue === '') {
          removeLocalStorage(key)
        } else {
          localStorage.setItem(key, JSON.stringify(newValue))
        }
      },
      { deep: true }
    )

    return value
  }

  function removeLocalStorage(key: string): void {
    localStorage.removeItem(key)
  }

  return { createStorage, removeLocalStorage }
}

export function useSessionStorage() {
  function setSession<T>(key: string, data: T | null = null): void {
    if (data == null || data == '') {
      removeSession(key)
    } else {
      sessionStorage.setItem(key, JSON.stringify(data))
    }
  }

  function getSession<T>(key: string): T | null {
    const session = sessionStorage.getItem(key)
    if (session) {
      try {
        return JSON.parse(session)
      } catch (error) {
        console.error('Error parsing session storage item', error)
      }
    }

    return null
  }

  function removeSession(key: string): void {
    sessionStorage.removeItem(key)
  }

  return { setSession, getSession, removeSession }
}
