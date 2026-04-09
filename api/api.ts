import axios from 'axios';
import * as SecureStore from "expo-secure-store";

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/utils/constants";
import { toast } from "sonner-native";

export const BASE_URL = process.env.EXPO_PUBLIC_DEV_BASE_URL;

// Flag to prevent multiple simultaneous redirects
let isHandlingSessionExpiry = false;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});



api.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    console.log(typeof (token));


    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      console.log(
        "Response error:",
        error.response.status,
        error.response.data,
      );

      // if (
      //   error.response.status === 404
      // ) {
      // }

      // Handle 401 with protection against multiple redirects
      if (error.response.status === 401) {
        if (!isHandlingSessionExpiry) {
          isHandlingSessionExpiry = true;

          try {
            await clearTokens()

            // Check current route to avoid unnecessary navigation
            // const currentPath = router.canGoBack()
            //     ? undefined
            // : router.replace("/(auth)/sign-in");
            toast.info("Session expired. Please log in again.");
          } catch (cleanupError) {
            console.log("Error during session cleanup:", cleanupError);
          }

          // Reset the flag after a delay to allow for navigation
          setTimeout(() => {
            isHandlingSessionExpiry = false;
          }, 1000);
        }

        // Still reject the promise for the original request
        return Promise.reject(error);
      }
    } else if (error.request) {
      console.log("No response received:", error.request);
    } else {
      console.log("Axios error:", error.message);
    }

    return Promise.reject(error);
  },
);

export default api;
export const storeTokens = async (access: string, refresh: string) => {
  await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, access);
  await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, refresh);
};

export const clearTokens = async () => {
  await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
  await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
};

export const getAccessToken = async () => await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
