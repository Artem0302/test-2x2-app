import {StyleSheet} from 'react-native';
import {COLORS, DEVICE_HEIGHT} from '@shared/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollview: {
    flex: 1,
  },
  img: {
    left: 0,
    top: 0,
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: DEVICE_HEIGHT / 2,
  },
  text_wrapper: {
    width: '100%',
    backgroundColor: COLORS.common_white,
    paddingVertical: 26,
    paddingHorizontal: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  text_wrapper_alt: {
    marginTop: DEVICE_HEIGHT / 2 - 62,
  },
  title: {
    marginBottom: 15,
  },
});
