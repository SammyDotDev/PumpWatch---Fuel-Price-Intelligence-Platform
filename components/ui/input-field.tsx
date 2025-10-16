import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { ThemedView } from "../themed-view";

const InputField = ({
	icon,
	...props
}: TextInputProps & { icon?: React.ReactNode }) => {
	const backgroundColor = useThemeColor("tertiary");
	const textColor = useThemeColor("text", {
		light: "#000000",
		dark: "#FFFFFF",
	});
	const placeholderTextColor = useThemeColor("text");
	return (
		<ThemedView
			className="flex-row items-center gap-3 p-3 rounded-2xl my-2"
			style={{ backgroundColor }}
		>
			{icon && icon}
			<TextInput
				{...props}
				placeholderTextColor={placeholderTextColor}
				className={"flex-1"}
				style={{ color: textColor }}
			/>
		</ThemedView>
	);
};
export default InputField;
