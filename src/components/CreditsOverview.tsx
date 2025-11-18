import { TrendingUp, Zap, AlertCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { Button } from './ui/button';

interface CreditsOverviewProps {
  credits: number;
}

export function CreditsOverview({ credits }: CreditsOverviewProps) {
  const maxCredits = 15000;
  const usagePercentage = ((maxCredits - credits) / maxCredits) * 100;
  const isLowCredits = credits < 2000;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="text-xs sm:text-sm text-gray-600">Total Credits</div>
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
          </div>
          <div className="text-2xl sm:text-3xl text-gray-900 mb-1 sm:mb-2">{maxCredits.toLocaleString()}</div>
          <div className="text-xs text-gray-500">Monthly allocation</div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="text-xs sm:text-sm text-gray-600">Remaining</div>
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
          </div>
          <div className="text-2xl sm:text-3xl text-gray-900 mb-1 sm:mb-2">{credits.toLocaleString()}</div>
          <Progress value={(credits / maxCredits) * 100} className="h-2" />
        </CardContent>
      </Card>

      <Card className={isLowCredits ? 'border-orange-200 bg-orange-50' : ''}>
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="text-xs sm:text-sm text-gray-600">Usage This Month</div>
            <AlertCircle className={`w-4 h-4 sm:w-5 sm:h-5 ${isLowCredits ? 'text-orange-600' : 'text-blue-600'}`} />
          </div>
          <div className="text-2xl sm:text-3xl text-gray-900 mb-1 sm:mb-2">{usagePercentage.toFixed(0)}%</div>
          {isLowCredits && (
            <Button size="sm" variant="outline" className="w-full mt-2">
              Upgrade Plan
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}