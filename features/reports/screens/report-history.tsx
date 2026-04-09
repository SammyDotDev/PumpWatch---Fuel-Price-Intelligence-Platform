import { Text } from "@/components/ui/themed-text";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export function ReportHistoryScreen() {
	return (
		<ScrollView style={styles.container}>
			<Text variant="headlineLg" style={styles.title}>
				Account Activity
			</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 24 },
	title: { marginBottom: 24 },
});
