import { store } from './redux/store';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

import { Grid } from '@mui/material';
import ToDoList from './components/todoList';
import DoneList from './components/doneList';
import ShowTag from './components/showTag';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={4} sx={{ padding: '1rem' }}>
          <Grid item xs={12} md={4}>
            <ToDoList />
          </Grid>
          <Grid item xs={12} md={4}>
            <DoneList />
          </Grid>
          <Grid item xs={12} md={4}>
            <ShowTag />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
