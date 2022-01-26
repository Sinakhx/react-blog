import type React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Footer, NavBar } from '../components';

const categories = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

interface IChildrenProps {
  children: React.ReactNode | Array<React.ReactNode>;
}

const theme = createTheme();

export const Layout = ({ children }: IChildrenProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <NavBar title="Sinakhx Blog" categories={categories} />
        { children }
      </Container>
      <Footer
        title="Sinakhx"
        description="React Developer!"
      />
    </ThemeProvider>
  );
}