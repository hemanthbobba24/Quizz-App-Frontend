// Theme Provider HOC for optimized theme usage
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';

export const withTheme = (Component) => {
  return (props) => (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );
};
