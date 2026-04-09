import { storeTokens } from "@/api/api";
import { AuthInput } from "@/components/ui/auth-input";
import { Button } from "@/components/ui/button";
import { Text, ThemedText } from "@/components/ui/themed-text";
import { Colors } from "@/shared/theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
	ActivityIndicator,
	Alert,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import { SignInSchema, type SignInFormData } from "../schemas/auth-schemas";
import { useSignIn } from "../services/mutations";

export function SignInForm() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInFormData>({
		resolver: zodResolver(SignInSchema),
		defaultValues: { username: "", password: "" },
	});

	const { mutateAsync: signin } = useSignIn();

	const handleSignIn = async (data: SignInFormData) => {
		signin(data, {
			onSuccess: (data) => {
				console.log("DATA: ", data);

				storeTokens(data?.data.accessToken, "");
				router.replace("/(tabs)");
			},
			onError: (error: any) => {
				Alert.alert(
					"Sign In Failed",
					error?.response?.data?.error || "An error occurred",
				);
			},
		});
	};

	const rightSlot = (
		<TouchableOpacity onPress={() => router.push("/(auth)/forgot-password")}>
			<Text variant="labelCapsWide" style={styles.forgot}>
				Forgot Password?
			</Text>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<Controller
				control={control}
				name="username"
				render={({ field: { onChange, onBlur, value } }) => (
					<AuthInput
						label="Username"
						icon="person-outline"
						placeholder="name@company.com"
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
						autoCapitalize="none"
						error={errors.username?.message}
					/>
				)}
			/>
			<Controller
				control={control}
				name="password"
				render={({ field: { onChange, onBlur, value } }) => (
					<AuthInput
						label="Password"
						icon="lock-outline"
						placeholder="••••••••"
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
						secureTextEntry
						rightSlot={rightSlot}
						error={errors.password?.message}
					/>
				)}
			/>

			<Button
				disabled={isLoading}
				// variant="primary"
				// style={styles.submit}
				onPress={handleSubmit(handleSignIn)}
			>
				{isLoading ? (
					<ActivityIndicator color={Colors.onPrimary} />
				) : (
					<ThemedText color="onPrimary" variant="bodyMd">
						Log In
					</ThemedText>
				)}
			</Button>

			<View style={styles.footer}>
				<Text variant="bodyMd" style={styles.footerText}>
					Don't have an account?{" "}
				</Text>
				<TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
					<Text variant="bodyMd" style={styles.signUpLink}>
						Sign Up
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	forgot: {
		color: Colors.primary,
		textTransform: "none",
	},
	submit: {
		marginTop: 16,
	},
	footer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 32,
	},
	footerText: {
		color: Colors.onSurfaceVariant,
		fontWeight: "500",
	},
	signUpLink: {
		color: Colors.primary,
		fontWeight: "bold",
	},
});
