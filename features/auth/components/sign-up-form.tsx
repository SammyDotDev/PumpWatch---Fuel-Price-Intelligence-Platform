import api from "@/api/api";
import { AuthInput } from "@/components/ui/auth-input";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/themed-text";
import { Colors } from "@/shared/theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ActivityIndicator, Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { SignUpSchema, type SignUpFormData } from "../schemas/auth-schemas";

export function SignUpForm() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFormData>({
		resolver: zodResolver(SignUpSchema),
		defaultValues: { name: "", email: "", password: "" },
	});

	const handleSignUp = async (data: SignUpFormData) => {
		setIsLoading(true);
		try {
			await api.post("/auth/signup", data);
			router.replace("/(tabs)");
		} catch (error: any) {
			Alert.alert(
				"Sign Up Failed",
				error?.response?.data?.message || "An error occurred",
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<View style={styles.container}>
			<Controller
				control={control}
				name="name"
				render={({ field: { onChange, onBlur, value } }) => (
					<AuthInput
						label="Full Name"
						icon="person-outline"
						placeholder="John Doe"
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
						error={errors.name?.message}
					/>
				)}
			/>
			<Controller
				control={control}
				name="email"
				render={({ field: { onChange, onBlur, value } }) => (
					<AuthInput
						label="Email Address"
						icon="mail-outline"
						placeholder="driver@pumpwatch.com"
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
						autoCapitalize="none"
						keyboardType="email-address"
						error={errors.email?.message}
					/>
				)}
			/>
			<Controller
				control={control}
				name="password"
				render={({ field: { onChange, onBlur, value } }) => (
					<AuthInput
						label="Security Password"
						icon="lock-outline"
						placeholder="••••••••"
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
						secureTextEntry
						error={errors.password?.message}
					/>
				)}
			/>

			<Button
				disabled={isLoading}
				variant="primary"
				style={styles.submit}
				onPress={handleSubmit(handleSignUp)}
			>
				{isLoading ? (
					<ActivityIndicator color={Colors.onPrimary} />
				) : (
					<Text color="onPrimary" variant="bodyMd">Create Account</Text>
				)}
			</Button>

			<View style={styles.footer}>
				<Text variant="bodySm" style={styles.footerText}>
					Already have an account?{" "}
				</Text>
				<TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
					<Text variant="bodySm" style={styles.loginLink}>
						Log In
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	submit: {
		marginTop: 8,
	},
	footer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 24,
		paddingTop: 24,
		borderTopWidth: 1,
		borderTopColor: Colors.surfaceContainerHighest,
	},
	footerText: {
		color: Colors.onSurfaceVariant,
		fontWeight: "500",
	},
	loginLink: {
		color: Colors.primary,
		fontWeight: "bold",
	},
});
