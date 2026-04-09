import { Text } from "@/components/ui/themed-text";
import { Colors } from "@/shared/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

interface PriceCapsulePinProps {
	price: string;
	grade?: string;
	isActive?: boolean;
}

export function PriceCapsulePin({
	price,
	grade,
	isActive,
}: PriceCapsulePinProps) {
	return (
		<View
			style={[styles.container, isActive ? styles.active : styles.inactive]}
		>
			{isActive && grade && (
				<Text variant="labelCapsWide" style={styles.grade}>
					{grade}
				</Text>
			)}
			<Text
				variant="headlineSm"
				style={[
					styles.price,
					isActive ? styles.priceActive : styles.priceInactive,
				]}
			>
				{price}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 9999, // Pill shape
		paddingHorizontal: 12,
		paddingVertical: 6,
	},
	inactive: {
		backgroundColor: Colors.surfaceContainerLowest,
		shadowColor: Colors.onSurface,
		shadowOffset: { width: 0, height: 12 },
		shadowOpacity: 0.06,
		shadowRadius: 32,
		elevation: 3,
	},
	active: {
		backgroundColor: Colors.primary,
		shadowColor: Colors.primary,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 12,
		elevation: 6,
	},
	grade: {
		color: Colors.onPrimary,
		marginRight: 8,
	},
	price: {
		// typography handles font
	},
	priceInactive: {
		color: Colors.onSurface,
	},
	priceActive: {
		color: Colors.onPrimary,
	},
});
