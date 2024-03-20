export interface CustomerCreate {
  first_name: string
  last_name: string
  email: string
  password: string
  repeat_password: string
}

export interface CustomerLogin {
  email: string
  password: string
}
