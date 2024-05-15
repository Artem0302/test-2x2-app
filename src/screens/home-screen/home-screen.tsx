import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {THomeScreenNavigatorType} from '@shared/types';
import {HomeHeader, NoItemComponent} from './components';
import {styles} from './home-screen.styles';

type THomeScreenNavProp = THomeScreenNavigatorType['navigation'];

export function HomeScreen() {
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

  const renderItem = () => <></>;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainerStyle}
        data={[]}
        renderItem={renderItem}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={<NoItemComponent />}
      />
    </SafeAreaView>
  );
}
