import { Stack } from "expo-router";
import React from "react";

const TabLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen name="cards" />
			<Stack.Screen name="savings" />
			<Stack.Screen name="rewards" />
		</Stack>
	);
};
export default TabLayout;
