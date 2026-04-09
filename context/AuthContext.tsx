import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback,
	type ReactNode,
} from "react";
import { router } from "expo-router";
import { storeTokens, clearTokens, getAccessToken } from "../api/api";
import type { AuthUser, AuthTokens } from "../features/auth/types";

type AuthState =
	| { status: "loading" }
	| { status: "unauthenticated" }
	| { status: "authenticated"; user: AuthUser };

type AuthContextValue = {
	state: AuthState;
	signIn: (user: AuthUser, tokens: AuthTokens) => Promise<void>;
	signOut: () => Promise<void>;
	isAuthenticated: boolean;
	user: AuthUser | null;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [state, setState] = useState<AuthState>({ status: "loading" });

	// Check for a persisted token on mount
	useEffect(() => {
		getAccessToken().then((token) => {
			setState(
				token
					? { status: "authenticated", user: null! }
					: { status: "unauthenticated" },
			);
		});
	}, []);

	const signIn = useCallback(async (user: AuthUser, tokens: AuthTokens) => {
		await storeTokens(tokens.accessToken, tokens.refreshToken);
		setState({ status: "authenticated", user });
		router.replace("/(tabs)");
	}, []);

	const signOut = useCallback(async () => {
		await clearTokens();
		setState({ status: "unauthenticated" });
		router.replace("/(auth)/sign-in");
	}, []);

	return (
		<AuthContext.Provider
			value={{
				state,
				signIn,
				signOut,
				isAuthenticated: state.status === "authenticated",
				user: state.status === "authenticated" ? state.user : null,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContextValue => {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
	return ctx;
};
