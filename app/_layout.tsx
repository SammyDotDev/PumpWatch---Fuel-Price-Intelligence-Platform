import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "../context/AuthContext";

// SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { retry: 1, staleTime: 30_000 },
	},
});

export default function RootLayout() {
	// const [fontsLoaded] = useFonts({
	// 	Manrope: require("../assets/fonts/Manrope-Regular.ttf"),
	// 	"Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
	// 	"Manrope-ExtraBold": require("../assets/fonts/Manrope-ExtraBold.ttf"),
	// 	Inter: require("../assets/fonts/Inter-Regular.ttf"),
	// 	"Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
	// 	"Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
	// });

	// useEffect(() => {
	// 	if (fontsLoaded) SplashScreen.hideAsync();
	// }, [fontsLoaded]);

	// if (!fontsLoaded) return null;

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaProvider>
				<QueryClientProvider client={queryClient}>
					<AuthProvider>
						<Stack screenOptions={{ headerShown: false }}>
							<Stack.Screen name="index" />
							<Stack.Screen name="(auth)" />
							<Stack.Screen name="(tabs)" />
							{/* <Stack.Screen name="(feature-screens)" /> */}
						</Stack>
					</AuthProvider>
				</QueryClientProvider>
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
}
