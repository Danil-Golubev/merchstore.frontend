import { configureStore } from '@reduxjs/toolkit';

import { itemsReducer } from './slices/itemsSlice';

const store = configureStore({
	reducer: {
		items: itemsReducer,
	},
});
export default store;
