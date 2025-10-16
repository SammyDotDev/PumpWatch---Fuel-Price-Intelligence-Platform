import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import InputField from "@/components/ui/input-field";
import PrimaryButton from "@/components/ui/primary-button";
import SafeAreaContainer from "@/components/ui/safe-area-container";
import { Colors } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Lock, Phone, ScanFaceIcon, User } from "lucide-react-native";
import React, { useRef, useState } from "react";
import { View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import {
	interpolateColor,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";

const Login = () => {
	const phoneInputRef = useRef(null);
	const [loginMethod, setLoginMethod] = useState<"phoneNo" | "username">(
		"phoneNo"
	);

	// colors
	const secondaryColor = useThemeColor("secondary");
	const textColor = useThemeColor("text", {
		light: "#000000",
		dark: "#FFFFFF",
	});

	const mainTextColor = useThemeColor("text");

	const disabledColor = useThemeColor("text", {
		light: "#FFFFFF",
		dark: "#000000",
	});

	const iconColor = useThemeColor("text", {
		light: Colors.light.text,
		dark: Colors.dark.text,
	});

	const inputColor = useThemeColor("tertiary");

	const tintColor = useThemeColor("tint");
	const contentTintColor = useThemeColor("contentTint");

	// boolean
	const isPhoneNo = loginMethod === "phoneNo";
	const isUsername = loginMethod === "username";

	// animations -------------------------------------------------------------------------
	const phoneNoProgress = useSharedValue(isPhoneNo ? 1 : 0);
	const usernameProgress = useSharedValue(isUsername ? 1 : 0);

	const disabledBackgroundColor = useThemeColor("background", {
		light: Colors.light.disabled,
		dark: Colors.dark.disabled,
	});

	const selectedBackgroundColor = useThemeColor("background", {
		light: Colors.light.tint,
		dark: Colors.dark.tint,
	});
	const phoneNoAnimatedStyle = useAnimatedStyle(() => {
		const backgroundColor = interpolateColor(
			phoneNoProgress.value,
			[0, 1],
			[disabledBackgroundColor, selectedBackgroundColor]
		);
		return { backgroundColor };
	});

	const usernameAnimatedStyle = useAnimatedStyle(() => {
		const backgroundColor = interpolateColor(
			usernameProgress.value,
			[0, 1],
			[disabledBackgroundColor, selectedBackgroundColor]
		);
		return { backgroundColor };
	});
	// -------------------------------------------------------------------------

	// conditional login method render
	const renderLoginMethod = (method: "phoneNo" | "username") => {
		if (method === "phoneNo")
			return (
				<PhoneInput
					containerStyle={{
						backgroundColor: inputColor,
						borderRadius: 10,
						overflow: "hidden",
						width: "100%",
					}}
					flagButtonStyle={
						{
							// width: "15%",
						}
					}
					codeTextStyle={{
						fontSize: RFValue(13),
						color: mainTextColor,
					}}
					textContainerStyle={{
						backgroundColor: inputColor,
						padding: 0,
					}}
					textInputStyle={{
						fontSize: RFValue(12),
						margin: -15,
						color: mainTextColor,
					}}
					ref={phoneInputRef}
					// defaultValue={field.value}
					textInputProps={{
						placeholderTextColor: mainTextColor,
					}}
					filterProps={{
						cursorColor: mainTextColor,
					}}
					disableArrowIcon
					defaultCode="NG"
					layout="second"
					// onChangeText={field.onChange}
					// onChangeFormattedText={field.onChange}
					
				/>
			);
		if (method === "username")
			return (
				<InputField
					placeholder="Username"
					icon={<User color={mainTextColor} />}
				/>
			);
		return (
			<ThemedView>
				<ThemedText>Invalid Login Method</ThemedText>
			</ThemedView>
		);
	};

	return (
		<SafeAreaContainer className="justify-between" safeArea>
			<View className="flex-row justify-between">
				<ThemedView
					className="p-3"
					style={{ backgroundColor: Colors.light.tint, borderRadius: 20 }}
				>
					<ThemedText
						className="text-5xl font-black"
						style={{ color: "#FFFFFF", fontSize: RFValue(28) }}
					>
						M
					</ThemedText>
				</ThemedView>
				<ThemedView className="gap-3">
					<ThemedText className="" style={{ fontSize: RFValue(12) }}>
						Lost your phone?
					</ThemedText>

					<View className="flex-row items-center gap-3">
						<Lock color={tintColor} />
						<ThemedText
							className=""
							style={{ color: tintColor, fontSize: RFValue(12) }}
						>
							Lock your account
						</ThemedText>
					</View>
				</ThemedView>
			</View>
			<ThemedView className="gap-5">
				<ThemedText
					className="font-bold"
					style={{ fontSize: RFValue(20), color: textColor }}
				>
					Login to your account
				</ThemedText>
				<ThemedView
					style={{ backgroundColor: secondaryColor }}
					className="px-5 py-6 gap-6"
				>
					<View className="flex-row items-center gap-4">
						<ThemedText style={{ color: textColor }}>Login with</ThemedText>
						<PrimaryButton
							onPress={() => {
								setLoginMethod("phoneNo");
								usernameProgress.value = withTiming(0, { duration: 200 });
								phoneNoProgress.value = withTiming(1, { duration: 200 });
							}}
							label="Phone No"
							className="px-2 py-2.5 rounded-full"
							disabledMethod={!isPhoneNo}
							icon={
								<Phone
									size={RFValue(12)}
									color={isPhoneNo ? disabledColor : iconColor}
								/>
							}
							animatedStyle={phoneNoAnimatedStyle}
						/>
						<PrimaryButton
							onPress={() => {
								setLoginMethod("username");
								phoneNoProgress.value = withTiming(0, { duration: 200 });
								usernameProgress.value = withTiming(1, { duration: 200 });
								console.log(loginMethod, "login method");
							}}
							label="Username"
							className="px-2 py-2.5 rounded-full"
							disabledMethod={!isUsername}
							icon={
								<User
									size={RFValue(12)}
									color={isUsername ? disabledColor : iconColor}
								/>
							}
							animatedStyle={usernameAnimatedStyle}
						/>
					</View>
					<View className="h-20">{renderLoginMethod(loginMethod)}</View>
					<View className="flex-row">
						<PrimaryButton label="Next" className="flex-[0.9]" />
						<View className="p-1 ml-auto">
							<PrimaryButton
								className="rounded-[10]"
								icon={
									<ScanFaceIcon color={tintColor} style={{ borderWidth: 1 }} />
								}
								animatedStyle={{ backgroundColor: contentTintColor }}
							/>
						</View>
					</View>
				</ThemedView>
			</ThemedView>
		</SafeAreaContainer>
	);
};

export default Login;
