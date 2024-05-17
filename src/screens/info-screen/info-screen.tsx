import {useRoute} from '@react-navigation/native';
import {InfoHeader} from '@screens/info-screen/components';
import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {COLORS} from '@shared/constants';
import {TInfoScreenNavigatorType} from '@shared/types';
import {Text} from '@shared/ui';
import {styles} from './info-screen.styles';

type TInfoScreenRouteProp = TInfoScreenNavigatorType['route'];

export function InfoScreen() {
  const route = useRoute<TInfoScreenRouteProp>();
  const {item} = route.params;
  const [source, setSource] = useState(item.img_url);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <InfoHeader title={item.title} />

        <View>
          {source && (
            <Image
              defaultSource={{
                uri: 'https://s3-alpha-sig.figma.com/img/75a4/05fa/f002f29b525831aebc083a3a3d76c40e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JVpyn94f-wRzYxwErgVd6YMrK3ys-Cie95S7iNW8BOkjqNyEcdr3V0opHBgG9rJbTKx-d~Y0fiDf1M1JUxRZrfFGBeC0RSVxEzV3G-Ehv2UUJWBG1~BrwJUr3-vZ2CVXz6l-OJ9KjMOlICdy7HqAaTEogb4S2cUzycrTFCT1Z36xHTjzZZtS87VFhapCa9mRKTrPSFVTpNVSHM8yNgPEIcEnZlIRIs6Cy~OGl9nO-OobGdwSI1iCZWrZ3sH3YLU5SFQkev6pKzvpTyapQxk0uHtsrDcpue-QehXMKA2jJN4eKlUu-~blxo-Y29IyOgaC~4hVZ7CDQOH5~MS7WjHupA__',
              }}
              source={{
                uri: item.img_url,
              }}
              style={styles.img}
              onError={() => setSource('')}
            />
          )}

          <View
            style={[
              styles.text_wrapper,
              source ? styles.text_wrapper_alt : {},
            ]}>
            <Text
              color={COLORS.text_title}
              variant={'text_extra_light'}
              style={styles.title}>
              {item.created_at}
            </Text>

            <Text variant={'text_light'} color={COLORS.common_black}>
              {item.text}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
