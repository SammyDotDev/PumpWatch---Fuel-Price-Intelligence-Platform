import { cn } from "@/lib/utils";
import * as Slot from "@rn-primitives/slot";
import * as React from "react";
import { Text as RNText, type TextStyle } from "react-native";

import { Colors, FontFamily, FontSize } from "@/shared/theme";

type ThemedTextSize = keyof typeof FontSize;
type ThemedTextWeight = keyof typeof FontFamily;
type ThemedTextColor = keyof typeof Colors;

type Props = React.ComponentProps<typeof RNText> & {
  asChild?: boolean;
  size?: ThemedTextSize;
  weight?: ThemedTextWeight;
  color?: ThemedTextColor;
  className?: string;
  variant?: keyof typeof FontSize; // Backwards compatibility for existing scaffolding
};

const ThemedTextClassContext = React.createContext<string | undefined>(undefined);

const DEFAULT_STYLE: TextStyle = {
  fontFamily: FontFamily.bodyMd,
  fontSize: FontSize.bodyMd,
  color: Colors.onSurface,
};

const ThemedText = React.forwardRef<RNText, Props>(
  ({
    asChild = false,
    size = "bodyMd",
    weight = "bodyMd",
    color = "onSurface",
    variant,
    style,
    className,
    ...props
  }, ref) => {
    const textClass = React.useContext(ThemedTextClassContext);
    const Component = asChild ? Slot.Text : RNText;

    const actualSize = variant || size;
    const actualWeight = variant || weight;

    const themedStyle: TextStyle = {
      ...DEFAULT_STYLE,
      fontFamily: FontFamily[actualWeight] || FontFamily.bodyMd,
      fontSize: FontSize[actualSize] || FontSize.bodyMd,
      color: Colors[color] || Colors.onSurface,
    };

    return (
      <Component
        ref={ref}
        className={cn(textClass, className)}
        style={[themedStyle, style]}
        {...props}
      />
    );
  }
);

ThemedText.displayName = "ThemedText";

export { ThemedText, ThemedTextClassContext, ThemedText as Text };
export type { ThemedTextColor, ThemedTextSize, ThemedTextWeight };
