import { Header } from '@/header';
import { GlobalStyles } from '@/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, BlogPage } from './pages';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/blog/:id' element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
