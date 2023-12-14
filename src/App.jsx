import Header from './components/Header';
import Category from './components/Category';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Header />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
