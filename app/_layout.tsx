import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import "../global.css";

export default function RootLayout() {
	const [redirect, setRedirect] = useState(false);
	useEffect(() => {}, []);

    
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name={"(auth)"} />
			<Stack.Screen name={"(tabs)"} />
		</Stack>
	);
}
