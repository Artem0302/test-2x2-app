import React, {useCallback, useRef, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Modal from 'react-native-modal';
import {NewsWidget} from '@widgets/news-widget';
import {COLORS} from '@shared/constants';
import {useNews} from '@shared/core';
import {INews} from '@shared/types';
import {Button} from '@shared/ui';
import {HomeHeader, NoItemComponent} from './components';
import {styles} from './home-screen.styles';

export function HomeScreen() {
  const {news, getNews, deleteNews} = useNews();
  const modalId = useRef<string | undefined>(undefined);
  const [isModal, setIsModal] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onLongPress = useCallback((id: string) => {
    modalId.current = id;

    setIsModal(true);
  }, []);

  const closeModal = () => {
    modalId.current = undefined;

    setIsModal(false);
  };

  const renderItem = ({item}: {item: INews}) => (
    <NewsWidget item={item} onLongPress={onLongPress} />
  );

  const onRefresh = () => {
    getNews(setIsRefreshing);
  };

  const onDelete = () => {
    modalId.current && deleteNews(modalId.current).then(() => onRefresh());

    closeModal();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        useNativeDriver={true}
        isVisible={isModal}
        style={styles.modal}
        onBackdropPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection={['down']}>
        <View style={styles.modal_content}>
          <View style={styles.drop_line} />

          <Button
            onPress={onDelete}
            textColor={COLORS.common_white}
            style={styles.delete_btn}
            backgroundColor={COLORS.main_red}
            variant={'text_bold'}>
            Delete
          </Button>

          <Button
            onPress={closeModal}
            textColor={COLORS.common_white}
            backgroundColor={COLORS.main_blue}
            variant={'text_bold'}>
            Close
          </Button>
        </View>
      </Modal>

      <FlatList
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        showsVerticalScrollIndicator={false}
        style={styles.flatlist}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainerStyle}
        data={news}
        renderItem={renderItem}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={<NoItemComponent />}
      />
    </SafeAreaView>
  );
}
