export type Employee = {
  id: string
  name: string
  surname: string
  age: string
  jobPosition?: string
}

export type EmployeeSliceState = {
  employee: Employee[]
}