import Header from './components/Header';
import Salutation from './components/Salutation';
import Search from './components/Search';
import Category from './components/Category';
import Pages from './pages/Pages';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <div className="mx-4">
          <Header />
          <Salutation />
          <Search />
          <Category />
          <Pages />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
