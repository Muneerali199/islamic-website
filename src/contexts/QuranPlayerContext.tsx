import { useImmerReducer } from 'use-immer';
import { reducer } from '../reducers/QuranPlayerReducer';
import { createContext, useContext, useMemo } from 'react';
import { getQuranPlayerLocalStorage } from '../data/localStorage';
import { QuranPlayer, QuranPlayerByAyahsAction, QuranPlayerBySurahsAction } from '../types';

type QuranPlayerContextProps = {
    readonly children: React.ReactNode;
}

type QuranPlayerContextType = {
    quranPlayerState: QuranPlayer;
    dispatchQuranPlayerState: React.Dispatch<QuranPlayerByAyahsAction | QuranPlayerBySurahsAction>;
}

const Context = createContext<QuranPlayerContextType | null>(null);

export default function QuranPlayerContext({ children }: QuranPlayerContextProps) {
    const [quranPlayerState, dispatchQuranPlayerState] = useImmerReducer(reducer, getQuranPlayerLocalStorage());
    const contextValue = useMemo((): QuranPlayerContextType =>
        ({ quranPlayerState, dispatchQuranPlayerState })
        , [quranPlayerState, dispatchQuranPlayerState]);
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export function useQuranPlayerContext() {
    const context = useContext(Context);
    if (!context) {
        throw new Error('Error happened while creating the QuranPlayerContext!');
    }
    return context;
}