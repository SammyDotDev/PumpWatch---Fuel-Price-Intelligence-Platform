import { Text } from "@/components/ui/themed-text";
import React from "react";
import { StyleSheet, View } from "react-native";

export function StationDetailScreen() {
	return (
		<View style={styles.container}>
			<Text variant="headlineLg">Station Details</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16 },
});
