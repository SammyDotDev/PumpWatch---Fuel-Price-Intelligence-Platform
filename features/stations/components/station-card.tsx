import { Text } from "@/components/ui/themed-text";
import { Colors } from "@/shared/theme";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface StationCardProps {
	name: string;
	address: string;
	bestPrice: string;
	isPriceDrop?: boolean;
	onPress?: () => void;
}

export function StationCard({
	name,
	address,
	bestPrice,
	isPriceDrop,
	onPress,
}: StationCardProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={onPress}
			style={styles.container}
		>
			<View style={styles.info}>
				<Text variant="headlineSm">{name}</Text>
				<Text variant="bodySm" style={styles.address}>
					{address}
				</Text>
			</View>
			<View
				style={[
					styles.priceChip,
					isPriceDrop ? styles.priceChipDrop : styles.priceChipNormal,
				]}
			>
				<Text
					variant="bodyMd"
					style={[styles.priceText, isPriceDrop && styles.priceTextDrop]}
				>
					{bestPrice}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: Colors.surfaceContainerLow,
		borderRadius: 8, // nested inside list without borders
		padding: 16,
		marginBottom: 8,
	},
	info: {
		flex: 1,
	},
	address: {
		marginTop: 4,
	},
	priceChip: {
		borderRadius: 4, // 4px nested visual
		paddingHorizontal: 8,
		paddingVertical: 4,
	},
	priceChipNormal: {
		backgroundColor: Colors.surfaceContainerHigh,
	},
	priceChipDrop: {
		backgroundColor: Colors.secondaryContainer,
	},
	priceText: {
		fontWeight: "bold",
	},
	priceTextDrop: {
		color: Colors.onSecondaryFixed,
	},
});
