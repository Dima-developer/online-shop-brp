import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Compare from './pages/Compare';

const App: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='about' element={<About />} />
        <Route path='faq' element={<FAQ />} />
        <Route path='contact' element={<Contact />} />
        <Route path='compare' element={<Compare />} />
      </Routes>
    </Layout>
  );
};

export default App;
