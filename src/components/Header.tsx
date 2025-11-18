import { Coins, Bell, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface HeaderProps {
  credits: number;
  onMenuClick: () => void;
}

export function Header({ credits, onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-lg sm:text-2xl text-gray-900">AI Content Generator</h1>
            <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Create compelling content in seconds</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
            <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            <div>
              <div className="text-xs text-gray-600 hidden sm:block">Available Credits</div>
              <div className="text-sm sm:text-lg text-gray-900">{credits.toLocaleString()}</div>
            </div>
          </div>
          
          <Button variant="outline" size="icon" className="relative hidden sm:flex">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-red-500">
              3
            </Badge>
          </Button>
        </div>
      </div>
    </header>
  );
}