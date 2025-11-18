import { useState } from 'react';
import { FileText, Calendar, Coins, Search, Download, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Generation } from '../App';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface GenerationHistoryProps {
  generations: Generation[];
}

export function GenerationHistory({ generations }: GenerationHistoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGeneration, setSelectedGeneration] = useState<Generation | null>(null);

  const filteredGenerations = generations.filter(gen =>
    gen.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    gen.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalTokensUsed = generations.reduce((sum, gen) => sum + gen.tokens, 0);

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl text-gray-900">Generation History</h2>
          <p className="text-xs sm:text-sm text-gray-500">View and manage your past generations</p>
        </div>
        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 rounded-lg">
          <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
          <div>
            <div className="text-xs text-gray-600">Total Tokens Used</div>
            <div className="text-base sm:text-lg text-gray-900">{totalTokensUsed.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search generations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Export All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredGenerations.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <FileText className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 opacity-50" />
                <p className="text-sm">No generations found</p>
              </div>
            ) : (
              filteredGenerations.map((generation) => (
                <div
                  key={generation.id}
                  className="flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors cursor-pointer"
                  onClick={() => setSelectedGeneration(generation)}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                      <h3 className="text-sm sm:text-base text-gray-900 truncate">{generation.title}</h3>
                      <Badge variant="secondary" className="text-xs self-start sm:self-auto">{generation.type}</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {generation.createdAt.toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Coins className="w-3 h-3" />
                        {generation.tokens} tokens
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 sm:gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedGeneration} onOpenChange={() => setSelectedGeneration(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-3xl max-h-[85vh] sm:max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span className="text-base sm:text-lg">{selectedGeneration?.title}</span>
              <Badge className="self-start sm:self-auto">{selectedGeneration?.type}</Badge>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {selectedGeneration?.createdAt.toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Coins className="w-4 h-4" />
                {selectedGeneration?.tokens} tokens
              </div>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 whitespace-pre-wrap text-sm max-h-[50vh] overflow-y-auto">
              {selectedGeneration?.content}
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" className="flex-1">
                Regenerate
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}