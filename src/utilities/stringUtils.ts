export function __(template: string, ...values: (string | number)[]): string {
  return template.replace(/%(\d+)/g, (match: any, number: number) => {
    return typeof values[number - 1] !== 'undefined' ? values[number - 1] : match
  })
}
