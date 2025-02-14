import { Box, Typography } from '@mui/material'
import { useThemeContext } from '../../../contexts/ThemeContext';

export default function Info() {
  const { theme } = useThemeContext();

  return (
    <Box sx={{ color: theme.colors.primary.fullDark, }}>
      <Typography 
        variant="h5" 
        fontWeight="bold" 
        sx={{ 
          textAlign: 'center', 
          mt: 2, 
          mb: 1, 
        }} 
      >
        Muneer Ali
      </Typography>
      <Typography 
        variant="h6" 
        fontWeight="regular" 
        sx={{ 
          textAlign: 'center', 
          mb: 1, 
        }} 
      >
        Computer Science Student | Seeking Fall 2025 Internship | Passionate About Artificial Intelligence, Data Analysis, Software Development, and Web Development | June 2025 Graduation
      </Typography>
    </Box>
  )
}


