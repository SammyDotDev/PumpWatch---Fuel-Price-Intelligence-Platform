import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "./themed-text";

export interface TabHeaderProps {
	microLabel: string;
	title: string;
}

export function TabHeader({ microLabel, title }: TabHeaderProps) {
	return (
		<View style={styles.container}>
			<Text variant="labelCapsWide" style={styles.microLabel}>
				{microLabel}
			</Text>
			<Text variant="headlineLg" style={styles.title}>
				{title}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		paddingVertical: 16,
	},
	microLabel: {
		marginBottom: 4,
	},
	title: {},
});
