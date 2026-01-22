export interface CounterSliceState {
    count: number;      // общий счётчик
    like: number;       // количество лайков
    disLike: number;    // количество дизлайков
    reset: boolean;     // флаг сброса
}