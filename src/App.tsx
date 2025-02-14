import { Suspense, lazy, useMemo } from 'react';
import './App.css';
import CommonFooter from './components/CommonFooter';
import CommonNavbar from './components/CommonNavbar';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import SpinnerLoading from './components/SpinnerLoading';
import { useThemeContext } from './contexts/ThemeContext';
import { PagePathes } from './types';

const AdhkarPage = lazy(() => import('./pages/AdhkarPage'));
const HijriCalendarPage = lazy(() => import('./pages/HijriCalendarPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const QuranPage = lazy(() => import('./pages/QuranPage'));
const HijriCalendarByDatePage = lazy(() => import('./pages/HijriCalendarByDatePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NotFound = lazy(() => import('./components/NotFound'));

const pages: Record<PagePathes, JSX.Element> = {
  '/': <HomePage />,
  '/quran': <QuranPage />,
  '/hijri-calendar': <HijriCalendarPage />,
  '/hijri-calendar/:date': <HijriCalendarByDatePage />,
  '/adhkar': <AdhkarPage />,
  '/about': <AboutPage />,
  '*': <NotFound />,
};

function App() {
  const { theme } = useThemeContext();
  const containerStyle = useMemo(() => ({
    '*::selection': {
      backgroundColor: theme.colors.primary.main,
      color: theme.colors.primary.contrastText,
    },
    direction: 'rtl',
    backgroundImage: theme.background,
    color: theme.colors.primary.fullDark,
    backgroundColor: theme.colors.primary.contrastText,
    backgroundRepeat: 'repeat',
    backgroundSize: '50%',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }), [theme]);

  return (
    <Box sx={containerStyle}>
      <CommonNavbar />
      <Suspense fallback={<SpinnerLoading />}>
        <Routes>
          {Object.entries(pages).map(([path, component]) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Routes>
      </Suspense>
      <CommonFooter />
    </Box>
  );
}

export default App;
