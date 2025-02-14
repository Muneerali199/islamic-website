import { Fragment, useMemo, useState } from 'react'
import quranSurahs from '../../../../../../../data/surahs'
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import QuranSurahItem from './QuranSurahItem';
import QuranSurahsListTitle from './QuranSurahsListTitle';
import { nanoid } from 'nanoid';
import Separator from '../Separator';

export default function QuranSurahsList() {
    const [open, setOpen] = useState(false);

    const surahsItems = useMemo(() => {
        return quranSurahs.map((surah, index) => {
            return (
                <Fragment key={nanoid()}>
                    <QuranSurahItem
                        key={nanoid()}
                        itemNumber={index + 1}
                        surah={surah} />
                    <Separator />
                </Fragment>
            )
        })
    }, []);

    return (
        <>
            <QuranSurahsListTitle open={open} setOpen={setOpen} />
            <Collapse in={open} timeout={0}>
                <List component="div" disablePadding>
                    {surahsItems}
                </List>
            </Collapse>
        </>
    )
}
