import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {COLORS} from '@shared/constants';
import {TCreateScreenNavigatorType} from '@shared/types';
import {Text} from '@shared/ui';
import ArrowIcon from '../../assets/arrow-icon.svg';
import {styles} from './create-header.styles';

type TCreateScreenNavProp = TCreateScreenNavigatorType['navigation'];

export function CreateHeader() {
  const navigation = useNavigation<TCreateScreenNavProp>();

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
        New post
      </Text>
    </View>
  );
}
