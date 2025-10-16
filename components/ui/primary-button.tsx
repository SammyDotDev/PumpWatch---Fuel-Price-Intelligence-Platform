import { Colors } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import {
	StyleProp,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	ViewStyle,
} from "react-native";
import Animated from "react-native-reanimated";

interface ButtonProps extends TouchableOpacityProps {
	label?: string;
	icon?: React.ReactNode;
	onPress?: () => void;
	disabledMethod?: boolean;
	animatedStyle?: StyleProp<ViewStyle>;
}

const PrimaryButton = ({
	label,
	icon,
	onPress,
	className,
	disabledMethod,
	animatedStyle,
	...props
}: ButtonProps) => {
	const AnimtedTouchableOpacity =
		Animated.createAnimatedComponent(TouchableOpacity);
	const backgroundColor = useThemeColor("background", {
		light: disabledMethod ? Colors.light.disabled : Colors.light.tint,
		dark: disabledMethod ? Colors.dark.disabled : Colors.dark.tint,
	});
	const textColor = useThemeColor("text", {
		light: disabledMethod ? Colors.light.text : "#FFFFFF",
		dark: disabledMethod ? Colors.dark.text : "#000000",
	});
	return (
		<AnimtedTouchableOpacity
			onPress={onPress}
			{...props}
			style={[{ backgroundColor }, animatedStyle as any]}
			className={`flex-row gap-3 p-5 rounded-2xl flex-1 items-center justify-center ${className}`}
			// disabled={disabled}
			activeOpacity={1}
		>
			{icon && icon}
			{label && (
				<Text style={{ color: textColor }} className="font-medium">
					{label}
				</Text>
			)}
		</AnimtedTouchableOpacity>
	);
};
export default PrimaryButton;
