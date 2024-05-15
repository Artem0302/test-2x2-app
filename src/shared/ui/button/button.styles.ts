import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    borderWidth: 1,
  },

  leftAdornment: {
    maxWidth: 30,
    maxHeight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  rightAdornment: {
    maxWidth: 30,
    maxHeight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
});

export default styles;
