import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import {counterReducer,CounterState} from './counter/index.js'

const store = configureStore({
  reducer: counterReducer
})

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, CounterState, null, Action<string>>

export default store