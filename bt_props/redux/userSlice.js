import { createSlice } from '@reduxjs/toolkit'; // userSlice.js
const initialState = {
	isLoggedIn: false,
	fullname: null,
	address: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// Action: user/login
		login: (state, action) => {
			state.isLoggedIn = true;
			state.fullname = action.payload.fullname;
			state.address = action.payload.address;
		},
		// Action: user/logout
		logout: (state) => {
			// Đặt lại trạng thái ban đầu
			return initialState;
		},
	},
});

export const { login, logout } = userSlice.actions;

// Selector để trích xuất trạng thái
export const selectUserName = (state) => state.user.fullname;
export const selectUserAddress = (state) => state.user.address;

export default userSlice.reducer;
