import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Recht from './pages/Recht';
import Anbau from './pages/Anbau';
import CannabisClubs from './pages/CannabisClubs';
import Medizinisch from './pages/Medizinisch';
import Produkte from './pages/Produkte';
import Blog from './pages/Blog';
import Tools from './pages/Tools';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Kontakt from './pages/Kontakt';
import Newsletter from './pages/Newsletter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recht" element={<Recht />} />
          <Route path="recht/*" element={<Recht />} />
          <Route path="anbau" element={<Anbau />} />
          <Route path="anbau/*" element={<Anbau />} />
          <Route path="cannabis-clubs" element={<CannabisClubs />} />
          <Route path="cannabis-clubs/*" element={<CannabisClubs />} />
          <Route path="medizinisch" element={<Medizinisch />} />
          <Route path="medizinisch/*" element={<Medizinisch />} />
          <Route path="produkte" element={<Produkte />} />
          <Route path="produkte/*" element={<Produkte />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="tools" element={<Tools />} />
          <Route path="tools/*" element={<Tools />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="datenschutz" element={<Datenschutz />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
