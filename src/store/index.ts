import { configureStore, ThunkAction, Action, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'
import configs from '../configs'
import InitialResume from '../configs/resume-structure'
import { IInitialState, IResume } from './IStore'

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Cache-Control': 'no-cache'
}

export const getResume = createAsyncThunk('appStore/getResume', async (_, { rejectWithValue }) => {
  try {
    const { data } = await Axios.get(configs.resumePublicURL, { headers })
    return data
  } catch (err) {
    const { response } = err
    if (!response) {
      throw err
    }
    return rejectWithValue(response)
  }
})

const initialState: IInitialState = {
  isLoading: true,
  resume: InitialResume
}

const AppStore = createSlice({
  name: 'appStore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getResume.fulfilled, (state, { payload }: { payload: IResume }) => {
      state.resume = payload
      state.isLoading = false
    })
    builder.addCase(getResume.rejected, (state, { payload }) => {
      console.error('Latest Resume could not be fetched', payload)
      state.isLoading = false
    })
  }
})

// export const {} = AppStore.actions

export const store = configureStore({
  reducer: {
    app: AppStore.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
