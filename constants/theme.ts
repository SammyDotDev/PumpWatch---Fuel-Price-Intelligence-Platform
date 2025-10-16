/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0361F0';
const tintColorDark = '#FFD53A';

export const Colors = {

    dark: {
        text: '#B6C1CF',
        background: '#000D29',
        secondary: "#081934",
        tertiary: '#14253F',
        tint: tintColorDark,
        icon: '#99A5BB',
        contentTint: "#313631",
        tabIconDefault: '#B6C1CF',
        tabIconSelected: tintColorLight,
        disabled: "#16212D"
    },
    light: {
        text: '#999999',
        background: '#F7F7F7',
        secondary: "#FFFFFF",
        tertiary: '#F3F5F8',
        tint: tintColorLight,
        icon: '#8498BA',
        contentTint: "#F2F7FE",
        tabIconDefault: '#999999',
        tabIconSelected: tintColorLight,
        disabled: "#D4D4D4"
    },
};

export const Fonts = Platform.select({
    ios: {
        /** iOS `UIFontDescriptorSystemDesignDefault` */
        sans: 'system-ui',
        /** iOS `UIFontDescriptorSystemDesignSerif` */
        serif: 'ui-serif',
        /** iOS `UIFontDescriptorSystemDesignRounded` */
        rounded: 'ui-rounded',
        /** iOS `UIFontDescriptorSystemDesignMonospaced` */
        mono: 'ui-monospace',
    },
    default: {
        sans: 'normal',
        serif: 'serif',
        rounded: 'normal',
        mono: 'monospace',
    },
    web: {
        sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        serif: "Georgia, 'Times New Roman', serif",
        rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
        mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    },
});
