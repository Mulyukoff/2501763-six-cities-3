import { NameSpace } from '../../constants';
import { State } from '../../types/state';

export const getActiveOfferId = (state: Pick<State, NameSpace.AppActions>): string => state[NameSpace.AppActions].activeOfferId;

export const getCity = (state: State): string => state[NameSpace.AppActions].city;

export const getError = (state: Pick<State, NameSpace.AppActions>): string | null => state[NameSpace.AppActions].error;
