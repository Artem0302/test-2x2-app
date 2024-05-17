import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TextInput, View} from 'react-native';
import {useNews} from '@entities/firebase-api';
import {COLORS} from '@shared/constants';
import {Button} from '@shared/ui';
import {CreateHeader} from './components';
import {styles} from './create-screen.styles';

export function CreateScreen() {
  const navigation = useNavigation();
  const {addnews} = useNews();

  const [inputValues, setInputValues] = useState({
    title: '',
    img_url: '',
    link: '',
    text: '',
  });

  const setNewValue = (field: string, text: string) => {
    setInputValues(previousData => ({...previousData, [field]: text}));
  };

  const isDisabled = !(inputValues.title && inputValues.text);

  const onPress = () => {
    addnews(inputValues).then(() => navigation.goBack());
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.scrollview}>
        <CreateHeader />

        <View style={styles.body}>
          <TextInput
            style={styles.input}
            hitSlop={10}
            value={inputValues.title}
            onChangeText={text => setNewValue('title', text)}
            placeholder={'Title*'}
          />

          <TextInput
            style={styles.input}
            hitSlop={10}
            value={inputValues.img_url}
            onChangeText={text => setNewValue('img_url', text)}
            placeholder={'Image url'}
          />

          <TextInput
            style={styles.input}
            hitSlop={10}
            value={inputValues.link}
            onChangeText={text => setNewValue('link', text)}
            placeholder={'Link'}
          />

          <TextInput
            style={[styles.input, styles.text_input]}
            hitSlop={10}
            value={inputValues.text}
            multiline={true}
            onChangeText={text => setNewValue('text', text)}
            placeholder={'Type your message here..*'}
          />

          <View style={styles.footer}>
            <Button
              onPress={onPress}
              disabled={isDisabled}
              textColor={COLORS.common_white}
              backgroundColor={COLORS.main_blue}
              variant={'text_bold'}>
              Public
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
