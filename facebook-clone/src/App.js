import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';
import NavBar from './NavBar/NavBar';
import NestedComments from './NestedComments';

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <NestedComments />
    </ThemeProvider>
  );
}

export default App;
