import { QuranPlayer, QuranPlayerByAyahsAction, QuranPlayerBySurahsAction } from '../types';
import quranPlayerByAyahsReducerActions from './reducerActions/quranPageByAyahs';
import quranPlayerBySurahsReducerActions from './reducerActions/quranPageBySurahs';
import { QuranPlayerByAyahsActionHandlers, QuranPlayerBySurahsActionHandlers } from './types';

const actions: QuranPlayerByAyahsActionHandlers & QuranPlayerBySurahsActionHandlers = {
    ...quranPlayerByAyahsReducerActions,
    ...quranPlayerBySurahsReducerActions
}

const reducer = (state: QuranPlayer, action: QuranPlayerByAyahsAction | QuranPlayerBySurahsAction) => {
    return actions[action.type](state, action as any);
}

export {
    reducer,
}

export * from './actions/quranPlayerByAyahsActions';

export * from './actions/quranPlayerBySurahsActions';