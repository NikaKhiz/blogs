import { Header } from '@/header';
import { GlobalStyles } from '@/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landing';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
