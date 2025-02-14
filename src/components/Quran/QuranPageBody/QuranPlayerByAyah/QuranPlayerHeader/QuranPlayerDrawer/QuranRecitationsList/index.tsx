import { Fragment, useMemo, useState } from 'react'
import recitations from '../../../../../../../data/recitations-ayahs'
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import { nanoid } from 'nanoid';
import QuranRecitationListTitle from './QuranRecitationListTitle';
import QuranRecitationItem from './QuranRecitationItem';
import Separator from '../Separator';

export default function QuranRecitationsList() {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return Object.entries(recitations).map(([recitationId, value], index) => {
            return (
                <Fragment key={nanoid()}>
                    <QuranRecitationItem
                        recitationId={recitationId as keyof typeof recitations}
                        value={value}
                        recitationNumber={index + 1} />
                    <Separator />
                </Fragment>
            )
        })
    }, []);

    return (
        <>
            <QuranRecitationListTitle open={open} setOpen={setOpen} />
            <Collapse in={open} timeout={0}>
                <List component="div" disablePadding>
                    {items}
                </List>
            </Collapse>
        </>
    )
}
