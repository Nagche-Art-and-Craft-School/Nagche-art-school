import './App.css';
import Routes from "./core/routes";
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from './core/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;