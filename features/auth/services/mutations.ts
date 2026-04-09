import api from "@/api/api";
import { useMutation, } from '@tanstack/react-query';

// register
export const signup = async (data: any) => {
  const response = await api.post("/auth/register", data)
  return response.data
}

export const useSignup = () => useMutation({
  mutationFn: signup,
})

// login
export const signin = async (data: { username: string; password: string }) => {
  const response = await api.post("/auth/login", data)
  return response.data
}

export const useSignIn = () => useMutation({
  mutationFn: signin,
})

// resend otp
export const resendOtp = async (data: { email: string; purpose: any }) => {
  const response = await api.post("/auth/resend-otp", data)
  return response.data
}

export const useResendOtp = () => useMutation({
  mutationFn: resendOtp,
})

// forgot password
export const forgotPassword = async (data: { email: string }) => {
  const response = await api.post("/auth/forgot-password", data)
  return response.data
}

export const useForgotPassword = () => useMutation({
  mutationFn: forgotPassword,
})

// confirm otp based on purpose
export const confirmOtp = async (data: { email: string; otp: string; purpose: OtpPurpose }) => {
  const response = await api.post("/auth/confirm-otp", data)
  return response.data
}

export const useConfirmOtp = () => useMutation({
  mutationFn: confirmOtp,
})

// reset password
export const resetPassword = async (data: { resetToken: string; newPassword: string; }) => {
  const response = await api.post("/auth/reset-password", data)
  return response.data
}

export const useResetPassword = () => useMutation({
  mutationFn: resetPassword,
})
