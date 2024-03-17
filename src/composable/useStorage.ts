import { watch, ref } from 'vue'
import type { Ref } from 'vue'

export function useStorage<T>(key: string, defaultValue: T | null = null): Ref<T> {
  const item = localStorage.getItem(key)
  const storedValue: T | null = item ? JSON.parse(item) : defaultValue
  const value: Ref = ref<T | null>(storedValue)

  watch(
    value,
    (newValue) => {
      if (newValue === null || newValue === '') {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, JSON.stringify(newValue))
      }
    },
    { deep: true }
  )

  return value
}
