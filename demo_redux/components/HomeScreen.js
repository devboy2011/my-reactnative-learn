import React from 'react';
import { Button, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName, login, logout } from '../redux/userSlice';
import { selectCartTotalQuantity, addItem } from '../redux/cartSlice';

const HomeScreen = () => {
	const dispatch = useDispatch();

	const userName = useSelector(selectUserName);
	const cartQuantity = useSelector(selectCartTotalQuantity);

	const handleLogout = () => {
		dispatch(logout()); // Gửi Action logout
	};

	const handleAddItem = () => {
		// Gửi Action addItem với payload là thông tin sản phẩm
		dispatch(addItem({ id: 'P1', name: 'Product A', price: 100 }));
	};

	const handleLogin = () => {
		// Gửi Action addItem với payload là thông tin sản phẩm
		dispatch(login({ name: 'vntan', token: 'vntan123' }));
	};

	return (
		<View>
			<Text>Xin chào, {userName}!</Text>
			<Text>Tổng số mặt hàng trong giỏ: {cartQuantity}</Text>
			<Button title="Thêm Sản phẩm A vào Giỏ" onPress={handleAddItem} />
			<Button title="Đăng Nhập" onPress={handleLogin} />
			<Button title="Đăng xuất" onPress={handleLogout} />
		</View>
	);
};

export default HomeScreen;
