import QuranPagesForm from './QuranPagesForm';
import QuranSurahsList from './QuranSurahsList';
import QuranRecitationsList from './QuranRecitationsList';
import { List } from '@mui/material';
import Separator from './Separator';

export default function DrawerList() {
    return (
        <List component="div">
            <QuranPagesForm />
            <Separator />
            <QuranSurahsList />
            <Separator />
            <QuranRecitationsList />
        </List>
    )
}
