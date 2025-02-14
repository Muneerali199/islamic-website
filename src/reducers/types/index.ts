import { QuranPlayer, QuranPlayerByAyahsAction, QuranPlayerBySurahsAction } from "../../types";

type QuranPlayerByAyahsActionValue<T> = Extract<QuranPlayerByAyahsAction, { type: T }>

type QuranPlayerByAyahsActionHandlers = {
    [K in QuranPlayerByAyahsAction['type']]: (state: QuranPlayer, action: QuranPlayerByAyahsActionValue<K>) => void;
};

type QuranPlayerBySurahsActionValue<T> = Extract<QuranPlayerBySurahsAction, { type: T }>

type QuranPlayerBySurahsActionHandlers = {
    [K in QuranPlayerBySurahsAction['type']]: (state: QuranPlayer, action: QuranPlayerBySurahsActionValue<K>) => void;
};

export type {
    QuranPlayerByAyahsActionHandlers,
    QuranPlayerByAyahsActionValue,
    QuranPlayerBySurahsActionHandlers,
    QuranPlayerBySurahsActionValue
};