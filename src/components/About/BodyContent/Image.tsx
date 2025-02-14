import { CardMedia } from '@mui/material'
import { Data } from '../types';
import { useThemeContext } from '../../../contexts/ThemeContext';
import { useMemo } from 'react';

type Props = Readonly<Pick<Data, "avatar_url">>;

export default function Image({ avatar_url }: Props) {
  const { theme } = useThemeContext();
  const imageStyle = useMemo(() => ({
    width: 200,
    height: 200,
    borderRadius: '50%',
    margin: 'auto',
    filter: theme.dropShadow,
    border: '2px solid',
    borderColor: theme.colors.primary.main,
  }), [theme]);

  return (
    <CardMedia 
      component="img" 
      src="images/muneerali.jpg" 
      alt="Muneer Ali" 
      sx={imageStyle} 
    />
  )
}

