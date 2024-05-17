import {StyleSheet} from 'react-native';
import {COLORS} from '@shared/constants';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.common_white,
    padding: 34,
    justifyContent: 'center',
  },
  header_arrow: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 47,
    height: 47,
    borderRadius: 25,
    backgroundColor: COLORS.common_gray_light,
    left: 23,
  },
  title: {
    textAlign: 'center',
    maxWidth: '70%',
  },
});
