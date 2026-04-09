import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { Colors } from '@/shared/theme';

export interface ScreenProps extends SafeAreaViewProps {
  fullBleed?: boolean;
}

export function Screen({ fullBleed, style, children, ...props }: ScreenProps) {
  if (fullBleed) {
    return (
      <View style={[styles.base, style]} {...props as ViewProps}>
        {children}
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.base, style]} {...props}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
