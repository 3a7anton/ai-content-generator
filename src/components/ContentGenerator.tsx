import { useState } from 'react';
import { Sparkles, Copy, Download, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Generation } from '../App';
import { toast } from 'sonner@2.0.3';

interface ContentGeneratorProps {
  onGenerate: (generation: Omit<Generation, 'id' | 'createdAt'>) => void;
  availableCredits: number;
}

const contentTypes = [
  { value: 'blog', label: 'Blog Post', tokens: 500 },
  { value: 'email', label: 'Email', tokens: 300 },
  { value: 'ad', label: 'Ad Copy', tokens: 150 },
  { value: 'social', label: 'Social Media', tokens: 100 },
  { value: 'product', label: 'Product Description', tokens: 200 },
];

export function ContentGenerator({ onGenerate, availableCredits }: ContentGeneratorProps) {
  const [contentType, setContentType] = useState('blog');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const selectedType = contentTypes.find(t => t.value === contentType);
  const canGenerate = prompt.trim().length > 10 && availableCredits >= (selectedType?.tokens || 0);

  const handleGenerate = async () => {
    if (!canGenerate) return;

    setIsGenerating(true);

    const mockContent = generateMockContent(contentType, prompt);
    
    setTimeout(() => {
      setGeneratedContent(mockContent);
      setIsGenerating(false);
      
      onGenerate({
        type: selectedType!.label,
        title: prompt.substring(0, 50),
        content: mockContent,
        tokens: selectedType!.tokens,
      });

      toast.success('Content generated successfully!');
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    toast.success('Copied to clipboard!');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            Create New Content
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="content-type">Content Type</Label>
            <Select value={contentType} onValueChange={setContentType}>
              <SelectTrigger id="content-type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {contentTypes.map(type => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label} ({type.tokens} tokens)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="prompt">Prompt</Label>
            <Textarea
              id="prompt"
              placeholder="Describe what you want to create..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[150px] sm:min-h-[200px] resize-none"
            />
            <div className="text-xs text-gray-500">
              {prompt.length} characters
            </div>
          </div>

          <div className="pt-4 border-t">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-600">Cost</div>
              <div className="text-base sm:text-lg text-gray-900">{selectedType?.tokens} tokens</div>
            </div>
            
            <Button 
              onClick={handleGenerate} 
              disabled={!canGenerate || isGenerating}
              className="w-full"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Content
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-base sm:text-lg">
            <span>Generated Content</span>
            {generatedContent && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {generatedContent ? (
            <div className="prose prose-sm max-w-none">
              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 min-h-[300px] sm:min-h-[400px] whitespace-pre-wrap text-sm">
                {generatedContent}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[300px] sm:min-h-[400px] text-gray-400">
              <div className="text-center">
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 opacity-50" />
                <p className="text-sm">Your generated content will appear here</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function generateMockContent(type: string, prompt: string): string {
  const templates: Record<string, string> = {
    blog: `# ${prompt}\n\nIn today's fast-paced digital landscape, understanding this topic is crucial for success. Let me break down the key insights you need to know.\n\n## Introduction\n\nThe importance of ${prompt.toLowerCase()} cannot be overstated. Industry leaders have recognized this trend and are adapting their strategies accordingly.\n\n## Key Points\n\n1. **Strategic Implementation**: Start by analyzing your current position and identifying opportunities for improvement.\n\n2. **Best Practices**: Follow proven methodologies that have delivered results for similar organizations.\n\n3. **Measuring Success**: Track relevant metrics to ensure your efforts are paying off.\n\n## Conclusion\n\nBy following these guidelines, you'll be well-positioned to achieve your goals. Remember, consistency and adaptability are key to long-term success.`,
    email: `Subject: ${prompt}\n\nDear Valued Customer,\n\nI hope this message finds you well. I'm reaching out to share some exciting news that I think you'll find valuable.\n\n${prompt}\n\nWe've been working hard to bring you the best possible experience, and this is just the beginning. Here's what you can expect:\n\n• Enhanced features designed with you in mind\n• Improved performance and reliability\n• Dedicated support whenever you need it\n\nWe'd love to hear your thoughts. Feel free to reply to this email with any questions or feedback.\n\nBest regards,\nThe Team`,
    ad: `🚀 ${prompt}\n\nDiscover the solution you've been searching for!\n\n✨ Key Benefits:\n• Save time and increase productivity\n• Easy to use, powerful results\n• Trusted by thousands of satisfied customers\n\n🎯 Limited Time Offer: Get started today and receive exclusive bonuses!\n\n👉 Click here to learn more and claim your spot.\n\nDon't miss out on this opportunity to transform your workflow!`,
    social: `🔥 ${prompt}\n\nHere's what everyone's talking about! 👇\n\nWe're excited to share this with our amazing community. Your support means everything to us! 💙\n\n✨ What makes this special:\n→ Innovative approach\n→ Real results\n→ Built for you\n\nDouble tap if you agree! 💯\n\n#Innovation #Success #Growth #Community`,
    product: `${prompt}\n\nProduct Description:\n\nExperience premium quality with this exceptional product designed to exceed your expectations. Crafted with attention to detail and built to last.\n\nFeatures:\n• High-quality materials and construction\n• Sleek, modern design that fits any space\n• Easy to use with intuitive controls\n• Energy-efficient and environmentally friendly\n• Backed by our satisfaction guarantee\n\nSpecifications:\n- Dimensions: Perfect size for versatile use\n- Weight: Lightweight and portable\n- Color: Available in multiple options\n\nWhat's Included:\n- Main product unit\n- User manual\n- 1-year warranty\n\nOrder now and enjoy fast, free shipping!`,
  };

  return templates[type] || templates.blog;
}