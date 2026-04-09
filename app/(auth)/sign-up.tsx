import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/themed-text";
import { SignUpForm } from "@/features/auth/components/sign-up-form";
import { Colors } from "@/shared/theme";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function SignUp() {
	return (
		<Screen style={styles.container}>
			<ScrollView contentContainerStyle={styles.scroll}>
				<View style={styles.leftSide}>
					<Text variant="labelCapsWide" style={styles.micro}>
						The Kinetic Authority
					</Text>
					<Text variant="displaySm" style={styles.heroText}>
						Fuel intelligence{"\n"}redefined.
					</Text>
					<Text variant="bodyMd" style={styles.heroSub}>
						Join a high-performance network of drivers utilizing real-time price
						telemetry.
					</Text>
				</View>

				<View style={styles.card}>
					<Text variant="headlineLg" style={styles.cardTitle}>
						Create Account
					</Text>
					<Text variant="bodySm" style={styles.cardSub}>
						Step into the future of automotive utility.
					</Text>
					<SignUpForm />
				</View>
			</ScrollView>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	scroll: { padding: 24, flexGrow: 1 },
	leftSide: { marginBottom: 32 },
	micro: { color: Colors.primary, marginBottom: 16 },
	heroText: { color: Colors.primary, marginBottom: 16 },
	heroSub: { color: Colors.onSurfaceVariant },
	card: {
		backgroundColor: Colors.surfaceContainerLowest,
		padding: 32,
		borderRadius: 32,
		shadowColor: Colors.onSurface,
		shadowOffset: { width: 0, height: 12 },
		shadowOpacity: 0.06,
		shadowRadius: 32,
		elevation: 3,
	},
	cardTitle: { marginBottom: 8 },
	cardSub: { marginBottom: 24, color: Colors.onSurfaceVariant },
});
