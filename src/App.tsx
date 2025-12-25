import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './contexts/I18nContext';
import Home from './pages/Home';
import Article from './pages/Article';

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:slug" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
