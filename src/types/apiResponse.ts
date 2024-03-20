export interface ApiResponse {
  code: string
  message: string
  body: FieldError[] | any
}

export interface FieldError {
  field: string
  message: string
}