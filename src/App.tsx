import { Routes, Route } from 'react-router-dom';
//Components
import Navbar from './components/Navbar/Navbar';
import Sudoku from './components/Sudoku/Sudoku';
import Subscription from './components/Subscription/Subscription';
import NotFound from './components/NotFound/NotFound';
//Pages
import Home from './components/Home/Home';
//CSS
import './css/main.min.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>React Sudoku Solver</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sudoku" element={<Sudoku />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </div>
  );
}

export default App;
