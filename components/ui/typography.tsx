import { Text as RNText, TextProps as RNTextProps } from "react-native";

export interface TypographyProps extends RNTextProps {
  variant?: "headline" | "body" | "label";
  weight?: "regular" | "medium" | "semibold" | "bold" | "extrabold";
  className?: string;
}

export function Text({ variant = "body", weight = "regular", className, style, ...props }: TypographyProps) {
  let fontFamily = "Inter_400Regular";

  if (variant === "headline") {
    if (weight === "regular") fontFamily = "Manrope_400Regular";
    else if (weight === "bold") fontFamily = "Manrope_700Bold";
    else if (weight === "extrabold") fontFamily = "Manrope_800ExtraBold";
    else fontFamily = "Manrope_700Bold";
  } else if (variant === "label") {
    if (weight === "regular") fontFamily = "Inter_400Regular";
    else if (weight === "bold") fontFamily = "Inter_700Bold";
    else fontFamily = "Inter_400Regular";
  } else {
    // body
    if (weight === "regular") fontFamily = "Inter_400Regular";
    else if (weight === "medium") fontFamily = "Inter_500Medium";
    else if (weight === "semibold") fontFamily = "Inter_600SemiBold";
    else if (weight === "bold") fontFamily = "Inter_700Bold";
    else fontFamily = "Inter_400Regular";
  }

  return (
    <RNText 
      className={`text-on-surface ${className || ""}`} 
      style={[{ fontFamily }, style]}
      {...props} 
    />
  );
}
