import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/themed-text";
import { SignInForm } from "@/features/auth/components/sign-in-form";
import { Colors } from "@/shared/theme";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function SignIn() {
	return (
		<Screen style={styles.container}>
			<ScrollView contentContainerStyle={styles.scroll}>
				<View style={styles.brandRow}>
					<MaterialIcons
						name="local-gas-station"
						size={32}
						color={Colors.primary}
					/>
					<Text variant="headlineLg" style={styles.brandText}>
						PumpWatch
					</Text>
				</View>

				<View style={styles.header}>
					<Text variant="headlineLg" style={styles.headline}>
						Welcome Back
					</Text>
					<Text variant="bodyMd" style={styles.subtitle}>
						Access your fuel dashboard and price alerts.
					</Text>
				</View>

				<SignInForm />
			</ScrollView>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: Colors.surfaceContainerLowest },
	scroll: { padding: 32, flexGrow: 1, justifyContent: "center" },
	brandRow: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 48,
		gap: 8,
	},
	brandText: { color: Colors.primary },
	header: { marginBottom: 32 },
	headline: { color: Colors.primary, marginBottom: 8 },
	subtitle: { color: Colors.onSurfaceVariant },
});
