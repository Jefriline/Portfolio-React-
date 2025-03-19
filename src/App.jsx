import { Routes, Route } from 'react-router-dom';
import Header from './Components/Layouts/Header/Header';
import Footer from './Components/Layouts/Footer/Footer';
import Container from './Components/Layouts/Container/Container';
import Home from './Components/Pages/Home/Home';
import Technical from './Components/Pages/Technical/Technical';
import Social from './Components/Pages/Social/Social';
import Experience from './Components/Pages/Experience/Experience';
import Studies from './Components/Pages/Studies/Studies';
import NotFound from './Components/Pages/NotFound/NotFound';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/social" element={<Social />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
};