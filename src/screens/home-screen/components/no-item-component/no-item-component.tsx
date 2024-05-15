import React from 'react';
import {View} from 'react-native';
import {COLORS} from '@shared/constants';
import {Text} from '@shared/ui';
import NoItemIcon from '../../assets/no-items-icon.svg';
import {styles} from './no-item-component.styles';

export function NoItemComponent() {
  return (
    <View style={styles.container}>
      <NoItemIcon width={225} height={210} />

      <Text color={COLORS.text_gray} variant={'text_light'} style={styles.text}>
        No results found
      </Text>
    </View>
  );
}
