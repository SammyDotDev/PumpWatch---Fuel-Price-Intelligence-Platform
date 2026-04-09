import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as Haptics from "expo-haptics";
import * as React from "react";
import { Platform, Pressable } from "react-native";
import { TextClassContext } from "./text";

const buttonVariants = cva(
	cn(
		"group shrink-0 flex-row items-center justify-center gap-2 rounded-xl shadow-none",
		Platform.select({
			web: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
		}),
	),
	{
		variants: {
			variant: {
				default: cn(
					"bg-[#003f87] active:bg-[#003f87]/90 shadow-sm shadow-black/5",
					Platform.select({ web: "hover:bg-[#003f87]/90" }),
				),
				primary: cn(
					"bg-[#003f87] active:bg-[#003f87]/90 shadow-sm shadow-black/5",
					Platform.select({ web: "hover:bg-[#003f87]/90" }),
				),
				destructive: cn(
					"bg-red-500 active:bg-red-500/90 shadow-sm shadow-black/5",
					Platform.select({
						web: "hover:bg-red-500/90",
					}),
				),
				outline: cn(
					"border-border bg-[#FBFBFB] border border-2",
					Platform.select({
						web: "hover:bg-[#FBFBFB]/90 dark:hover:bg-[#FBFBFB]/50",
					}),
				),
				secondary: cn(
					"bg-[#006e25] active:bg-[#006e25]/80 shadow-sm shadow-black/5",
					Platform.select({ web: "hover:bg-[#006e25]/80" }),
				),
				ghost: cn(
					"active:bg-transparent dark:active:bg-transparent/50",
					Platform.select({ web: "hover:bg-transparent/20" }),
				),
				link: "",
			},
			size: {
				default: cn(
					"px-4 py-[15]",
					Platform.select({ web: "has-[>svg]:px-3" }),
				),
				sm: cn(
					"gap-1.5 rounded-xl px-3",
					Platform.select({ web: "has-[>svg]:px-2.5" }),
				),
				lg: cn("rounded-xl px-6", Platform.select({ web: "has-[>svg]:px-4" })),
				icon: "h-10 w-10 sm:h-9 sm:w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type ButtonProps = React.ComponentProps<typeof Pressable> &
	React.RefAttributes<typeof Pressable> &
	VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, onPress, ...props }: ButtonProps) {
	return (
		<TextClassContext.Provider value="">
			<Pressable
				className={cn(
					props.disabled && "opacity-50",
					buttonVariants({ variant, size }),
					className,
				)}
				role="button"
				onPress={(e) => {
					Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
					onPress?.(e);
				}}
				{...props}
			/>
		</TextClassContext.Provider>
	);
}

export { Button, buttonVariants };
export type { ButtonProps };
