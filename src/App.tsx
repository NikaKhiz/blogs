import { Header } from '@/header';
import { GlobalStyles } from '@/styles';
import { Routes, Route } from 'react-router-dom';
import { LandingPage, BlogPage } from './pages';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/blog/:id' element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;
