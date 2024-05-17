import {StackScreenProps} from '@react-navigation/stack';
import {INews} from '@shared/types';

export type TMainNavigatorParamsList = {
  'MAIN.HOME_SCREEN': undefined;
  'MAIN.INFO_SCREEN': {item: INews};
  'MAIN.CREATE_SCREEN': undefined;
};

export type THomeScreenNavigatorType = StackScreenProps<
  TMainNavigatorParamsList,
  'MAIN.HOME_SCREEN'
>;

export type TInfoScreenNavigatorType = StackScreenProps<
  TMainNavigatorParamsList,
  'MAIN.INFO_SCREEN'
>;

export type TCreateScreenNavigatorType = StackScreenProps<
  TMainNavigatorParamsList,
  'MAIN.CREATE_SCREEN'
>;
