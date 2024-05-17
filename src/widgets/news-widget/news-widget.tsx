import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
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
  const navigation = useNavigation<THomeScreenNavProp>();

  const onPress = () => navigation.navigate('MAIN.INFO_SCREEN', {item});

  return (
    <TouchableOpacity
      style={[styles.container, item.img_url ? {height: 340} : {}]}
      onPress={onPress}
      onLongPress={() => onLongPress(item.id)}>
      {item.img_url && (
        <Image
          style={styles.img}
          defaultSource={{
            uri: 'https://s3-alpha-sig.figma.com/img/75a4/05fa/f002f29b525831aebc083a3a3d76c40e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JVpyn94f-wRzYxwErgVd6YMrK3ys-Cie95S7iNW8BOkjqNyEcdr3V0opHBgG9rJbTKx-d~Y0fiDf1M1JUxRZrfFGBeC0RSVxEzV3G-Ehv2UUJWBG1~BrwJUr3-vZ2CVXz6l-OJ9KjMOlICdy7HqAaTEogb4S2cUzycrTFCT1Z36xHTjzZZtS87VFhapCa9mRKTrPSFVTpNVSHM8yNgPEIcEnZlIRIs6Cy~OGl9nO-OobGdwSI1iCZWrZ3sH3YLU5SFQkev6pKzvpTyapQxk0uHtsrDcpue-QehXMKA2jJN4eKlUu-~blxo-Y29IyOgaC~4hVZ7CDQOH5~MS7WjHupA__',
          }}
          source={{
            uri: item.img_url,
          }}
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
