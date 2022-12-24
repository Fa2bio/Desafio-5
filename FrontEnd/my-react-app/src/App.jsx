import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { Transferencias } from './components/Transferencias'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div className="App">
        <h1>Banco ABC Cash</h1>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Transferencias />
        </LocalizationProvider>
    </div>
    </ThemeProvider>
  )
}

export default App
