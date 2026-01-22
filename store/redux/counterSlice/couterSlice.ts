import { createAppSlice } from "store/createAppSlice"
import {CounterSliceState} from "./types"
import {PayloadAction} from '@reduxjs/toolkit'

// Начальное состояние для counter slice
const counterInitialState: CounterSliceState = {
  count: 0, // общий счётчик (может использоваться для тестов или примеров)
  like: 0, // количество лайков
  disLike: 0, // количество дизлайков
  reset: false, // флаг сброса
}

export const counterSlice = createAppSlice({
  // Уникальное имя slice (видно в Redux DevTools)
  name: "COUNTER",

  // Начальное состояние slice
  initialState: counterInitialState,

  // Reducers описывают, как изменяется state при определённых событиях
  reducers: {
    // Увеличивает общий счётчик на 1
    plus: (state: CounterSliceState) => {
      state.count = state.count + 1
    },

    // Уменьшает общий счётчик на 1
    minus: (state: CounterSliceState) => {
      state.count = state.count - 1
    },
    multiply: (state: CounterSliceState, action: PayloadAction<number>) => {
      state.count = state.count * action.payload
    },
    divide: (state: CounterSliceState, action: PayloadAction<number>) => {
      state.count = Number((state.count / action.payload).toFixed(2))  // Ограничиваем до 2 знаков после запятой
    },

    // Увеличивает количество лайков
    plusLike: (state: CounterSliceState) => {
      state.like = state.like + 1
    },

    // Увеличивает количество дизлайков
    plusDislike: (state: CounterSliceState) => {
      state.disLike = state.disLike + 1
    },

    // Сбрасывает лайки и дизлайки к начальному значению
    resetCount: () => counterInitialState,
  },

  // Selectors используются для чтения данных из Redux store
  selectors: {
    // Возвращает значение общего счётчика
    count: (state: CounterSliceState) => {
      return state.count
    },

    // Возвращает текущее количество лайков
    like: (state: CounterSliceState) => {
      return state.like
    },

    // Возвращает текущее количество дизлайков
    disLike: (state: CounterSliceState) => {
      return state.disLike
    },

    // Возвращает состояние флага reset
    reset: (state: CounterSliceState) => {
      return state.reset
    },
  },
})

// Экспортируем actions для dispatch в компонентах
export const counterSliceActions = counterSlice.actions

// Экспортируем selectors для useAppSelector
export const counterSliceSelectors = counterSlice.selectors
