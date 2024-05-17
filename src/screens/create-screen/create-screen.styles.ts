import {StyleSheet} from 'react-native';
import {COLORS} from '@shared/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollview: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 30,
  },
  input: {
    marginBottom: 25,
    backgroundColor: COLORS.common_gray_light,
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  text_input: {
    minHeight: '20%',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 25,
  },
});
