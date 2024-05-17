import {StyleSheet} from 'react-native';
import {COLORS} from '@shared/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  search_wrapper: {
    flex: 1,
    backgroundColor: COLORS.common_gray_light,
    borderRadius: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  search_input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 0,
  },
  plus_icon: {
    width: 47,
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: COLORS.common_gray_light,
  },
});
