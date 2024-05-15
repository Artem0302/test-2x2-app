import React, {memo, ReactNode} from 'react';
import {Text as NativeText, StyleProp, TextStyle} from 'react-native';

import {COLORS} from '@shared/constants/theme';
import {TCOLORS} from '@shared/types';
import {VARIANTS_MAPPING} from '@shared/ui';
import styles from './text.styles';

interface ITextProps {
  size?: number;
  variant?: keyof typeof VARIANTS_MAPPING;
  children: string | ReactNode;
  color?: TCOLORS;
  uppercase?: boolean;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}

export const Text = memo(
  ({
    size,
    variant = 'text_regular',
    children,
    style,
    uppercase = false,
    numberOfLines,
    color = COLORS.common_gray,
  }: ITextProps) => {
    return (
      <NativeText
        style={[
          size ? {fontSize: size} : undefined,
          styles[variant],
          {color},
          uppercase && styles.uppercase,
          style,
        ]}
        numberOfLines={numberOfLines}>
        {children}
      </NativeText>
    );
  },
);
