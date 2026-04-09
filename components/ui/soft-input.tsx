import { TextInput, TextInputProps, View } from "react-native";
import { Text } from "./typography";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export interface SoftInputProps extends TextInputProps {
  label: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  error?: string;
  containerClassName?: string;
}

export function SoftInput({ label, icon, error, containerClassName, onFocus, onBlur, ...props }: SoftInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`space-y-1 ${containerClassName || ""}`}>
      <Text variant="label" weight="bold" className="text-xs uppercase tracking-widest text-on-surface-variant ml-1">
        {label}
      </Text>
      <View className={`flex-row items-center border-b-2 bg-surface-container-high rounded-xl px-4 py-4 ${isFocused ? 'border-primary' : 'border-transparent'}`}>
        <TextInput
          className="flex-1 text-on-surface text-base"
          style={{ fontFamily: 'Inter_400Regular' }}
          placeholderTextColor="#727784"
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          {...props}
        />
        {icon && <MaterialIcons name={icon} size={24} color="#727784" className="ml-2" />}
      </View>
      {error && <Text className="text-error text-xs ml-1">{error}</Text>}
    </View>
  );
}
