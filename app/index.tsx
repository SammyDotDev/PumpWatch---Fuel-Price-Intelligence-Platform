import { Redirect } from "expo-router";
import "../global.css";

const isAuthenticated = false;

export default function Index() {
	if (isAuthenticated) {
		return <Redirect href="/(tabs)" />;
	}
	return <Redirect href="/(auth)/sign-in" />;
}
