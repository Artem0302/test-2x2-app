import {StyleSheet} from 'react-native';
import {COLORS} from '@shared/constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: COLORS.common_white,
    borderRadius: 10,
    width: '100%',
    shadowColor: COLORS.common_gray,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  img: {
    resizeMode: 'cover',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  footer: {
    padding: 16,
  },
  main_text: {
    marginTop: 5,
    marginBottom: 5,
  },
});
