import React, {useCallback, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Modal from 'react-native-modal';
import {NewsWidget} from '@widgets/news-widget';
import {COLORS} from '@shared/constants';
import {Button} from '@shared/ui';
import {HomeHeader, NoItemComponent} from './components';
import {styles} from './home-screen.styles';

export function HomeScreen() {
  const [isModal, setIsModal] = useState(false);
  const closeModal = () => setIsModal(false);

  const onLongPress = useCallback(() => setIsModal(true), []);

  const renderItem = () => <NewsWidget onLongPress={onLongPress} />;

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
        refreshing={true}
        showsVerticalScrollIndicator={false}
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainerStyle}
        data={[
          {name: 'hello'},
          {name: 'hello'},
          {name: 'hello'},
          {name: 'hello'},
          {name: 'hello'},
          {name: 'hello'},
          {name: 'hello'},
        ]}
        renderItem={renderItem}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={<NoItemComponent />}
      />
    </SafeAreaView>
  );
}
