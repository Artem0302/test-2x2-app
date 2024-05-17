import {InfoHeader} from '@screens/info-screen/components';
import React from 'react';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {COLORS} from '@shared/constants';
import {Text} from '@shared/ui';
import {styles} from './info-screen.styles';

export function InfoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <InfoHeader />

        <View>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/75a4/05fa/f002f29b525831aebc083a3a3d76c40e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JVpyn94f-wRzYxwErgVd6YMrK3ys-Cie95S7iNW8BOkjqNyEcdr3V0opHBgG9rJbTKx-d~Y0fiDf1M1JUxRZrfFGBeC0RSVxEzV3G-Ehv2UUJWBG1~BrwJUr3-vZ2CVXz6l-OJ9KjMOlICdy7HqAaTEogb4S2cUzycrTFCT1Z36xHTjzZZtS87VFhapCa9mRKTrPSFVTpNVSHM8yNgPEIcEnZlIRIs6Cy~OGl9nO-OobGdwSI1iCZWrZ3sH3YLU5SFQkev6pKzvpTyapQxk0uHtsrDcpue-QehXMKA2jJN4eKlUu-~blxo-Y29IyOgaC~4hVZ7CDQOH5~MS7WjHupA__',
            }}
            style={styles.img}
          />

          <View style={styles.text_wrapper}>
            <Text
              color={COLORS.text_title}
              variant={'text_extra_light'}
              style={styles.title}>
              Hello
            </Text>

            <Text variant={'text_light'} color={COLORS.common_black}>
              Hello
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
