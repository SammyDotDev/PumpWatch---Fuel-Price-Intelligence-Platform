import { Text } from "@/components/ui/themed-text";
import { Colors } from "@/shared/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

export function ProfileHeader() {
	return (
		<View style={styles.container}>
			<Text variant="labelCapsWide" style={styles.label}>
				Premium Member
			</Text>
			<Text variant="displaySm" style={styles.name}>
				John Doe
			</Text>
			<View style={styles.ambientCircle} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
		backgroundColor: Colors.surfaceContainerLowest,
		borderRadius: 24,
		overflow: "hidden",
	},
	label: {
		color: Colors.primary,
	},
	name: {
		marginTop: 8,
	},
	ambientCircle: {
		position: "absolute",
		right: -40,
		top: -40,
		width: 160,
		height: 160,
		borderRadius: 80,
		backgroundColor: Colors.primary,
		opacity: 0.04,
	},
});
