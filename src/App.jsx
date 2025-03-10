import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageWrapper } from './components/StyledComponents';
import { Header } from './components/Header';
import { ContentWrapper } from './components/StyledComponents';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Classes } from './pages/Classes';
import { Studio } from './pages/Studio';
import { Book } from './pages/Book';

export const App = () => {
  return (
    <Router>
      <div>
        <PageWrapper>
        <Header />
        <ContentWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/book" element={<Book />} />
        </Routes>
        </ContentWrapper>
        <Footer />
        </PageWrapper>
      </div>
    </Router>
  );
};
