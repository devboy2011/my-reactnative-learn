import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity:0,
  },
  reducers: {
    addItem: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.items.find(item => item.id === newItem.id);

			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					name: newItem.name,
				});
			} else {
				existingItem.quantity++;
			}

      state.totalQuantity++;
    },
    removeItem: (state, action) => {
      return initialState;
    },
  },
});

export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartTotalQuantity = (state) => state.cart.totalQuantity;