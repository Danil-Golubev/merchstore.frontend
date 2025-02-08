import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from '../../axios';

const initialState = {
	item: {},
	loading: false,
	error: null,
};

export const fetchGetOne = createAsyncThunk('/fetchGetOne', async (id) => {
	const { data } = await axios.get(`/item/${id}`);
	return data;
});
const itemSlice = createSlice({
	name: 'item',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchGetOne.pending, (state) => {
				state.loading = true;
				state.error = null;
				state.item = {};
			})
			.addCase(fetchGetOne.fulfilled, (state, action) => {
				state.loading = false;
				state.item = action.payload;
			})
			.addCase(fetchGetOne.rejected, (state) => {
				state.loading = false;
				state.error = 'Ошибка загрузки данных';
			});
	},
});

export const itemReducer = itemSlice.reducer;
