import { AuthInput } from "@/components/ui/auth-input";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/themed-text";
import { Colors } from "@/shared/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

export function PriceReportSheet() {
	return (
		<View style={styles.container}>
			<Text variant="headlineSm" style={styles.title}>
				Report Price
			</Text>

			<AuthInput
				label="Current Price"
				placeholder="0.00"
				keyboardType="numeric"
			/>

			<Button variant="secondary">
				<Text color="onPrimary" variant="bodyMd">Report</Text>
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
		backgroundColor: Colors.surfaceContainerLowest,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
	},
	title: {
		marginBottom: 16,
	},
});
