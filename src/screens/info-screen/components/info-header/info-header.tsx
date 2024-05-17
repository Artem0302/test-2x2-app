import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {COLORS} from '@shared/constants';
import {TInfoScreenNavigatorType} from '@shared/types';
import {Text} from '@shared/ui';
import ArrowIcon from '../../assets/arrow-icon.svg';
import {styles} from './info-header.styles';

type TInfoScreenNavProp = TInfoScreenNavigatorType['navigation'];

export function InfoHeader() {
  const navigation = useNavigation<TInfoScreenNavProp>();

  const onPress = () => navigation.navigate('MAIN.HOME_SCREEN');

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress} style={styles.header_arrow}>
        <ArrowIcon width={30} height={30} fill={COLORS.common_gray} />
      </TouchableOpacity>

      <Text
        style={styles.title}
        color={COLORS.common_black}
        variant={'text_semibold'}>
        Discovery by scientists
      </Text>
    </View>
  );
}
