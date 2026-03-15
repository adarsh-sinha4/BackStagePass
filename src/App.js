import React from 'react';
import './App.css';
import TopNavBar from './components/TopNavBar';
import Sidebar from './components/Sidebar';
import MobileDaySelector from './components/MobileDaySelector';
import SubmissionCard from './components/SubmissionCard';
import FeedSection from './components/FeedSection';
import { ThemeProvider } from './contexts/ThemeContext';
import PageWrapper from './components/Pagewrapper';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <TopNavBar />
        <PageWrapper currentDay={1} onBack={() => alert('Go back clicked')}>
          <MobileDaySelector />
          <Sidebar />
          <main className="main-content">
            <SubmissionCard />
            <FeedSection />
          </main>
        </PageWrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;
