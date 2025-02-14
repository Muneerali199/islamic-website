import Card from '@mui/material/Card';
import { useThemeContext } from '../../../contexts/ThemeContext';
import { type Data } from '../types';
import { useMemo } from 'react';
import Image from './Image';
import Info from './Info';
import WebsiteButton from './WebsiteButton';
import Contacts from './Contacts';

type Props = { readonly data: Data; }

export default function BodyContent({ data }: Props) {
  const { theme } = useThemeContext();
  const cardStyle = useMemo(() => ({
    width: 300,
    margin: 'auto',
    p: 4,
    border: '2px solid',
    borderColor: theme.colors.primary.main,
  }), [theme.colors.primary]);

  return (
    <Card variant="outlined" sx={cardStyle}>
      <Image avatar_url={data.avatar_url} />
      <Info />
      <WebsiteButton blog={data.blog} />
      <Contacts />
    </Card>
  )
}
