import { createSlice } from '@reduxjs/toolkit'; // userSlice.js
const initialState = {
	isLoggedIn: false,
	name: null,
	token: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// Action: user/login
		login: (state, action) => {
			state.isLoggedIn = true;
			state.name = action.payload.name;
			state.token = action.payload.token;
			// Dùng Immer, nên ta có thể "mutate" state như thế này
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
export const selectUserName = (state) => state.user.name;

export default userSlice.reducer;
