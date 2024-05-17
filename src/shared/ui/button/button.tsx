import React, {ReactNode, memo, useCallback, useEffect, useRef} from 'react';
import {
  DimensionValue,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import {COLORS} from '@shared/constants/theme';
import {TCOLORS} from '@shared/types';
import {Text, VARIANTS_MAPPING} from '@shared/ui';
import styles from './button.styles';

interface IButtonProps {
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
  disabled?: boolean;
  onPress?: () => void | ReactNode | Promise<void>;
  fontSize?: number;
  variant?: keyof typeof VARIANTS_MAPPING;
  backgroundColor?: TCOLORS;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: string;
  textColor?: TCOLORS;
}

export const Button = memo(
  ({
    variant = 'text_regular',
    width = '100%',
    height = 56,
    disabled = false,
    onPress,
    fontSize,
    style,
    backgroundColor = COLORS.common_white,
    textStyle,
    textColor = COLORS.common_black,
    children,
  }: IButtonProps) => {
    const mountStatusRef = useRef(true);

    const buttonHandler = useCallback(async () => {
      if (onPress) {
        const handlerValue: unknown = onPress();

        if (handlerValue instanceof Promise) {
          await handlerValue;
        }
      }
    }, [onPress]);

    useEffect(() => {
      mountStatusRef.current = true;

      return () => {
        mountStatusRef.current = false;
      };
    }, []);

    const content = useCallback(() => {
      return (
        <Text
          variant={variant}
          size={fontSize}
          color={textColor}
          style={textStyle}>
          {children}
        </Text>
      );
    }, [fontSize, textStyle]);

    return (
      <TouchableOpacity
        disabled={disabled}
        style={[
          {
            width,
            height,
            backgroundColor: backgroundColor,
            opacity: disabled ? 0.6 : 1,
          },
          styles.button,
          style,
        ]}
        onPress={buttonHandler}>
        {content()}
      </TouchableOpacity>
    );
  },
);
