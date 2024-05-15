import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {TInfoScreenNavigatorType} from '@shared/types';
import {styles} from './info-screen.styles';

type THomeScreenNavProp = TInfoScreenNavigatorType['navigation'];

export function InfoScreen() {
  const navigation = useNavigation<THomeScreenNavProp>();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerTintColor: '#00FA9A',
      headerStyle: {
        backgroundColor: '#FFF8DC',
      },
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: '700',
      },
      title: 'Fans',
    });
  }, [navigation]);

  return <SafeAreaView style={styles.container} />;
}
