import { Colors } from "@/shared/theme";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Text } from "./themed-text";

export interface AuthInputProps extends TextInputProps {
	label: string;
	icon?: keyof typeof MaterialIcons.glyphMap;
	rightSlot?: React.ReactNode;
	error?: string;
}

export function AuthInput({
	label,
	icon,
	rightSlot,
	style,
	onFocus,
	onBlur,
	error,
	...props
}: AuthInputProps) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.labelRow}>
				<Text variant="labelCapsWide" style={styles.label}>
					{label}
				</Text>
				{rightSlot}
			</View>
			<View
				style={[
					styles.inputContainer,
					isFocused ? styles.inputFocused : styles.inputUnfocused,
					error ? styles.inputError : null,
				]}
			>
				<TextInput
					style={[styles.input, style]}
					placeholderTextColor={Colors.outline}
					onFocus={(e) => {
						setIsFocused(true);
						onFocus?.(e);
					}}
					onBlur={(e) => {
						setIsFocused(false);
						onBlur?.(e);
					}}
					{...props}
				/>
				{icon && (
					<MaterialIcons
						name={icon}
						size={24}
						color={Colors.outline}
						style={styles.icon}
					/>
				)}
			</View>
			{error ? (
				<Text variant="bodySm" style={styles.errorText}>
					{error}
				</Text>
			) : null}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 24,
	},
	labelRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "baseline",
		marginBottom: 8,
		paddingHorizontal: 4,
	},
	label: {
		color: Colors.onSurfaceVariant,
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: Colors.surfaceContainerHigh,
		borderRadius: 12,
		paddingHorizontal: 16,
		paddingVertical: 16,
		borderBottomWidth: 2,
	},
	inputFocused: {
		borderBottomColor: Colors.primary,
	},
	inputUnfocused: {
		borderBottomColor: "transparent",
	},
	inputError: {
		borderBottomColor: "#B3261E",
	},
	errorText: {
		color: "#B3261E",
		marginTop: 4,
		paddingHorizontal: 4,
	},
	input: {
		flex: 1,
		fontFamily: "Inter_500Medium",
		fontSize: 16,
		color: Colors.onSurface,
	},
	icon: {
		marginLeft: 12,
	},
});
