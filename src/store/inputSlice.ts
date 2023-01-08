import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export interface inputSlice {
	value: string
	status: boolean
}

export interface IInputSlice {
	inputValue: inputSlice
}

const initialState: inputSlice = {
	value: '',
	status: false,
}

export const inputSlice = createSlice({
	name: 'input',
	initialState,
	reducers: {
		setValue: (state, action: PayloadAction<string>) => {
			state.value = action.payload
		},
		setStatus: (state, action: PayloadAction<boolean>) => {
			state.status = action.payload
		},
	},
})

export const { setValue, setStatus } = inputSlice.actions

export default inputSlice.reducer