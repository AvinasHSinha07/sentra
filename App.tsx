import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import FeatureSplit from './components/FeatureSplit';
import Mission from './components/Mission';
import Quality from './components/Quality';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary-100 selection:text-primary-900">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <FeatureSplit />
        <Mission />
        <Quality />
      </main>
      <Footer />
    </div>
  );
}

export default App;