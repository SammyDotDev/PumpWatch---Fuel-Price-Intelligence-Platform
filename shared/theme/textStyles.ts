import { StyleSheet } from 'react-native';
import { FontFamily, FontSize, LineHeight, LetterSpacing } from './typography';
import { Colors } from './colors';

export const TextStyles = StyleSheet.create({
  displayLg: {
    fontFamily: FontFamily.displayLg,
    fontSize: FontSize.displayLg,
    lineHeight: LineHeight.displayLg,
    color: Colors.onSurface,
  },
  displaySm: {
    fontFamily: FontFamily.displaySm,
    fontSize: FontSize.displaySm,
    lineHeight: LineHeight.displaySm,
    color: Colors.onSurface,
  },
  headlineLg: {
    fontFamily: FontFamily.headlineLg,
    fontSize: FontSize.headlineLg,
    lineHeight: LineHeight.headlineLg,
    color: Colors.onSurface,
  },
  headlineSm: {
    fontFamily: FontFamily.headlineSm,
    fontSize: FontSize.headlineSm,
    lineHeight: LineHeight.headlineSm,
    color: Colors.onSurface,
  },
  bodyMd: {
    fontFamily: FontFamily.bodyMd,
    fontSize: FontSize.bodyMd,
    lineHeight: LineHeight.bodyMd,
    color: Colors.onSurface,
  },
  bodySm: {
    fontFamily: FontFamily.bodySm,
    fontSize: FontSize.bodySm,
    lineHeight: LineHeight.bodySm,
    color: Colors.onSurfaceVariant,
  },
  labelCapsWide: {
    fontFamily: FontFamily.labelCapsWide,
    fontSize: FontSize.labelCapsWide,
    lineHeight: LineHeight.labelCapsWide,
    letterSpacing: LetterSpacing.labelCapsWide,
    textTransform: 'uppercase',
    color: Colors.onSurfaceVariant,
  },
});
