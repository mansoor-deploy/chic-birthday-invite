
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, ShoppingBag, Heart } from 'lucide-react';

interface GiftItem {
  id: number;
  name: string;
  description?: string;
  link?: string;
  icon: 'gift' | 'shopping' | 'heart';
}

interface GiftRegistryProps {
  items: GiftItem[];
  message: string;
}

const GiftRegistry: React.FC<GiftRegistryProps> = ({ items, message }) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'gift':
        return <Gift className="w-5 h-5" />;
      case 'shopping':
        return <ShoppingBag className="w-5 h-5" />;
      case 'heart':
        return <Heart className="w-5 h-5" />;
      default:
        return <Gift className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <p className="text-center italic text-muted-foreground">{message}</p>
      
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <Card 
            key={item.id} 
            className="border-gold/20 hover:border-gold/50 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start space-x-3">
                <div className="text-gold mt-1">{renderIcon(item.icon)}</div>
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  {item.description && (
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  )}
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-gold hover:underline mt-2 inline-block"
                    >
                      View Details
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GiftRegistry;
