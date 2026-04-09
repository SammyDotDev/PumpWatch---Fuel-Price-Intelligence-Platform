import { Text } from "@/components/ui/themed-text";
import { Colors } from "@/shared/theme";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const GRADES = ["Regular", "Mid-Grade", "Premium", "Diesel", "E85"];

export function FuelGradeFilterBar({
	selected,
	onSelect,
}: {
	selected: string;
	onSelect: (grade: string) => void;
}) {
	return (
		<View style={styles.wrapper}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.container}
			>
				{GRADES.map((grade) => {
					const isActive = grade === selected;
					return (
						<TouchableOpacity
							key={grade}
							onPress={() => onSelect(grade)}
							style={[styles.pill, isActive ? styles.active : styles.inactive]}
						>
							<Text
								variant="bodyMd"
								style={[
									styles.text,
									isActive ? styles.textActive : styles.textInactive,
								]}
							>
								{grade}
							</Text>
						</TouchableOpacity>
					);
				})}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: "transparent",
	},
	container: {
		paddingHorizontal: 16,
		paddingVertical: 12,
		gap: 8,
		flexDirection: "row",
	},
	pill: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 20,
	},
	active: {
		backgroundColor: Colors.primary,
		shadowColor: Colors.onSurface,
		shadowOffset: { width: 0, height: 12 },
		shadowOpacity: 0.06,
		shadowRadius: 32,
		elevation: 3,
	},
	inactive: {
		backgroundColor: Colors.surfaceContainerLowest,
		borderWidth: 1,
		borderColor: "rgba(194, 198, 212, 0.15)", // outlineVariant 15% (Ghost border)
	},
	text: {
		fontWeight: "500",
	},
	textActive: {
		color: Colors.onPrimary,
	},
	textInactive: {
		color: Colors.onSurfaceVariant,
	},
});
