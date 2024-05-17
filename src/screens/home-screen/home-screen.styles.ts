import {StyleSheet} from 'react-native';
import {COLORS} from '@shared/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.common_gray_extra_light,
    paddingTop: 30,
  },
  flatlist: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  drop_line: {
    backgroundColor: COLORS.common_gray_light,
    borderColor: COLORS.common_gray_light,
    width: 35,
    alignSelf: 'center',
    borderWidth: 2.5,
    borderRadius: 35,
    marginBottom: 34,
  },
  modal_content: {
    backgroundColor: COLORS.common_white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    paddingBottom: 34,
    paddingHorizontal: 34,
    paddingTop: 15,
  },
  delete_btn: {
    marginBottom: 16,
  },
});
