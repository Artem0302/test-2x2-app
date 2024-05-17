import {useNavigation} from '@react-navigation/native';
import React, {memo, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@shared/constants';
import {INews, THomeScreenNavigatorType} from '@shared/types';
import {Text} from '@shared/ui';
import {styles} from './news-widget.styles';

type THomeScreenNavProp = THomeScreenNavigatorType['navigation'];

interface INewsWidget {
  onLongPress: (id: string) => void;
  item: INews;
}

export const NewsWidget = memo(({onLongPress, item}: INewsWidget) => {
  const [source, setSource] = useState(item.img_url);
  const navigation = useNavigation<THomeScreenNavProp>();

  const onPress = () => navigation.navigate('MAIN.INFO_SCREEN', {item});

  return (
    <TouchableOpacity
      style={[styles.container, source ? {height: 340} : {}]}
      onPress={onPress}
      onLongPress={() => onLongPress(item.id)}>
      {source && (
        <Image
          style={styles.img}
          source={{
            uri: source,
          }}
          onError={() => setSource('')}
        />
      )}

      <View style={styles.footer}>
        <Text variant={'text_semibold'} color={COLORS.common_black}>
          {item.title}
        </Text>

        <Text
          variant={'text_light'}
          color={COLORS.common_black}
          numberOfLines={1}
          style={styles.main_text}>
          {item.text}
        </Text>

        <Text variant={'text_extra_light'} color={COLORS.common_gray}>
          {item.created_at}
        </Text>
      </View>
    </TouchableOpacity>
  );
});
