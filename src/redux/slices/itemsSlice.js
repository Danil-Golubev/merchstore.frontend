import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from '../../axios';
const initialState = {
	items: [],
	loading: Boolean | null,
	error: String | null,
};
export const fetchGetItems = createAsyncThunk('/fetchGetItems', async () => {
	const { data } = await axios.get('/getItems');
	return data;
});

const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchGetItems.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchGetItems.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload; // Теперь `items` обновляются
			})
			.addCase(fetchGetItems.rejected, (state) => {
				state.loading = false;
				state.error = 'Ошибка загрузки данных';
			});
	},
});
export const itemsReducer = itemsSlice.reducer;
