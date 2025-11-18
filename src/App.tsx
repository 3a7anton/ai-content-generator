import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ContentGenerator } from './components/ContentGenerator';
import { GenerationHistory } from './components/GenerationHistory';
import { CreditsOverview } from './components/CreditsOverview';
import { HomePage } from './components/HomePage';

export interface Generation {
  id: string;
  type: string;
  title: string;
  content: string;
  tokens: number;
  createdAt: Date;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState<'generate' | 'history'>('generate');
  const [credits, setCredits] = useState(10000);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [generations, setGenerations] = useState<Generation[]>([
    {
      id: '1',
      type: 'Blog Post',
      title: 'How to Scale Your SaaS Business',
      content: 'Scaling a SaaS business requires strategic planning...',
      tokens: 450,
      createdAt: new Date('2025-11-17'),
    },
    {
      id: '2',
      type: 'Email',
      title: 'Product Launch Announcement',
      content: 'Dear valued customers, we are excited to announce...',
      tokens: 280,
      createdAt: new Date('2025-11-16'),
    },
  ]);

  const handleGenerate = (generation: Omit<Generation, 'id' | 'createdAt'>) => {
    const newGeneration: Generation = {
      ...generation,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    
    setGenerations([newGeneration, ...generations]);
    setCredits(credits - generation.tokens);

    // const savedGeneration = await saveToDatabase(newGeneration);
    // const updatedCredits = await updateUserCredits(credits - generation.tokens);
  };

  if (!isLoggedIn) {
    return <HomePage onGetStarted={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        currentView={currentView} 
        onViewChange={(view) => {
          setCurrentView(view);
          setSidebarOpen(false);
        }}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header credits={credits} onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {currentView === 'generate' && (
            <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
              <CreditsOverview credits={credits} />
              <ContentGenerator onGenerate={handleGenerate} availableCredits={credits} />
            </div>
          )}
          
          {currentView === 'history' && (
            <div className="max-w-6xl mx-auto">
              <GenerationHistory generations={generations} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}