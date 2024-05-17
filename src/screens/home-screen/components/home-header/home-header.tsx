import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@shared/constants';
import {THomeScreenNavigatorType} from '@shared/types';
import PlusIcon from '../../assets/plus-icon.svg';
import SearchIcon from '../../assets/search-icon.svg';
import {styles} from './home-header.styles';

type THomeScreenNavProp = THomeScreenNavigatorType['navigation'];

export function HomeHeader() {
  const navigation = useNavigation<THomeScreenNavProp>();

  const [searchText, setSearchText] = useState('');

  const onPress = () => navigation.navigate('MAIN.CREATE_SCREEN');

  return (
    <View style={styles.header}>
      <View style={styles.search_wrapper}>
        <SearchIcon
          width={24}
          height={24}
          fill={'none'}
          stroke={COLORS.common_gray}
        />

        <TextInput
          style={styles.search_input}
          hitSlop={10}
          value={searchText}
          onChangeText={setSearchText}
          placeholder={'Search'}
        />
      </View>

      <TouchableOpacity style={styles.plus_icon} onPress={onPress}>
        <PlusIcon width={30} height={30} stroke={COLORS.common_gray} />
      </TouchableOpacity>
    </View>
  );
}
