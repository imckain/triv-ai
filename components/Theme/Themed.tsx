import {
  Text as DefaultText,
  TextInput as DefaultTextInput,
  View as DefaultView,
  ScrollView as DefaultScrollView,
  ImageProps,
} from 'react-native';
import Animated, { AnimatedStyleProp, AnimateProps } from 'react-native-reanimated';

import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type ScrollViewProps = ThemeProps & DefaultScrollView['props'];
export type AnimatedTextProps = ThemeProps & DefaultText['props'];
export type AnimatedViewProps = ThemeProps & AnimateProps<ViewProps>;
export type AnimatedImageProps = ThemeProps & AnimateProps<ImageProps>;

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function SubText(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'subtext');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultTextInput style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'border');

  return <DefaultView style={[{ backgroundColor, borderColor }, style]} {...otherProps} />;
}

export function ScrollView(props: ScrollViewProps) {
  const { style, ...otherProps } = props;
  return <DefaultScrollView style={[style]} {...otherProps} />;
}

export function AnimatedText(props: AnimatedTextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <Animated.Text style={[{ color }, style]} {...otherProps} />;
}

export function AnimatedImage(props: AnimatedImageProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'border');

  return <Animated.Image style={[{ borderColor }, style]} {...otherProps} />;
}