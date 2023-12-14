import Header from './components/Header';
import Category from './components/Category';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <div className="mx-4">
          <Header />
          <Category />
          <Pages />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
