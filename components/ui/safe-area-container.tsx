import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { ScrollView, StyleProp, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SafeAreaContainer = ({
	children,
	scroll,
	style,
	className,
	safeArea,
}: {
	children: React.ReactNode;
	scroll?: boolean;
	style?: StyleProp<ViewStyle>;
	className?: string;
	safeArea?: boolean;
}) => {
	const backgroundColor = useThemeColor("background");
	const renderSafeArea = () => {
		if (scroll) {
			return (
				<ScrollView
					className={className}
					style={{
						padding: 20,
						paddingBottom: 0,
					}}
				>
					{children}
				</ScrollView>
			);
		}
		return <View className={`flex-1 p-4 ${className}`}>{children}</View>;
	};

	if (safeArea) {
		return (
			<SafeAreaView
				className={"flex-1 p-4 pb-0"}
				style={[style, { backgroundColor }]}
			>
				{renderSafeArea()}
			</SafeAreaView>
		);
	}

	return (
		<View className={"flex-1 p-4 pb-0"} style={[style, { backgroundColor }]}>
			{renderSafeArea()}
		</View>
	);
};
export default SafeAreaContainer;
