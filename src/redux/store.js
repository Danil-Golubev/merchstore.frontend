import { configureStore } from '@reduxjs/toolkit';

import { itemReducer } from './slices/itemSlice';
import { itemsReducer } from './slices/itemsSlice';

const store = configureStore({
	reducer: {
		items: itemsReducer,
		item: itemReducer,
	},
});
export default store;
