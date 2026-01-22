import {PayloadAction} from '@reduxjs/toolkit'
import { createAppSlice } from "store/createAppSlice"
import { EmployeeSliceState } from "./types"

// Начальное состояние слайса
const employeeInintialState: EmployeeSliceState = {
  employee: [],
}
// Создаем слайс для управления состоянием сотрудников
export const employeeSlice = createAppSlice({
  // name - это имя для slice, имя используется для нахождения события слайса в redux devtools и создания type в action
  name: "EMPLOYEE",
  // initialState - state, в котором мы прописываем значения по умолчанию
  initialState: employeeInintialState,
  // reducers - это обьект, который содержит функции редьюсер, которыен в свою очередь будут изменять стейт
  reducers: {
    // Добавляет нового сотрудника в массив сотрудников
    addEmployee: (state, action: PayloadAction<{
      id?: string;
      name: string;
      surname: string;
      age: string;
      jobPosition: string;
    }>) => {
      state.employee.push({
        id: action.payload.id ?? '',
        name: action.payload.name,
        surname: action.payload.surname,
        age: action.payload.age,
        jobPosition: action.payload.jobPosition,
      });
    },

  // Удаляет всех сотрудников из массива
   removeAllEmployees: state => {
  state.employee = []
},
  },


  // selectors - мы прописываем, какие именно данные мы хотим отдать компонентам
  selectors: {
    employee: state => {
      return state.employee
    },
  },
})

// employeeSlice сам создает actions для каждого отдельного reducer
export const employeeSliceActions = employeeSlice.actions
// employeeSliceSelectors - это данные, которые мы будем отдавать компонентам, то есть позволять компонентам подписываться на redux store
export const employeeSliceSelectors = employeeSlice.selectors