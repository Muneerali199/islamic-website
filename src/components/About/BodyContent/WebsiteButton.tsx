import { Button } from '@mui/material'
import { useThemeContext } from '../../../contexts/ThemeContext';
import { Data } from '../types';

type Props = Readonly<Pick<Data, "blog">>;

export default function WebsiteButton({ blog }: Props) {
  const { theme } = useThemeContext();
  return (
    <Button 
      target='_blank' 
      href="https://demo1-six-gamma.vercel.app/" 
      variant="contained" 
      sx={{
        display: 'block', 
        width: 'fit-content', 
        m: 'auto', 
        mb: 2, 
        backgroundColor: theme.colors.primary.main, 
        color: theme.colors.primary.contrastText, 
        '&:hover': { 
          backgroundColor: theme.colors.primary.dark, 
        }
      }}
    >
       My Own Website
    </Button>
  )
}
