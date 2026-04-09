import { Text } from "@/components/ui/themed-text";
import React from "react";
import { StyleSheet, View } from "react-native";

export function NearbyMapScreen() {
	return (
		<View style={styles.container}>
			<Text variant="headlineSm">Map Placeholder</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
});
