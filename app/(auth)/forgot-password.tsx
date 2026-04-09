import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/themed-text";
import React from "react";
import { StyleSheet } from "react-native";

export default function ForgotPassword() {
	return (
		<Screen style={styles.container}>
			<Text variant="headlineLg">Reset Password</Text>
		</Screen>
	);
}
const styles = StyleSheet.create({ container: { padding: 32 } });
