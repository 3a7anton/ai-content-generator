import { Sparkles, History, CreditCard, Settings, LayoutDashboard, X } from 'lucide-react';
import { Button } from './ui/button';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: 'generate' | 'history') => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ currentView, onViewChange, isOpen, onClose }: SidebarProps) {
  return (
    <div className={`
      fixed lg:static inset-y-0 left-0 z-40
      w-64 bg-white border-r border-gray-200 flex flex-col
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl text-gray-900">ContentAI</span>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <Button
          variant={currentView === 'generate' ? 'secondary' : 'ghost'}
          className="w-full justify-start"
          onClick={() => onViewChange('generate')}
        >
          <LayoutDashboard className="w-4 h-4 mr-3" />
          Generate
        </Button>
        
        <Button
          variant={currentView === 'history' ? 'secondary' : 'ghost'}
          className="w-full justify-start"
          onClick={() => onViewChange('history')}
        >
          <History className="w-4 h-4 mr-3" />
          History
        </Button>
        
        <Button variant="ghost" className="w-full justify-start">
          <CreditCard className="w-4 h-4 mr-3" />
          Billing
        </Button>
        
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="w-4 h-4 mr-3" />
          Settings
        </Button>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full" />
          <div className="flex-1">
            <div className="text-sm text-gray-900">John Doe</div>
            <div className="text-xs text-gray-500">Pro Plan</div>
          </div>
        </div>
      </div>
    </div>
  );
}