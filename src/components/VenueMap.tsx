
import React from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface VenueDetailsProps {
  address: string;
  date: string;
  time: string;
  additionalInfo?: string;
}

const VenueMap: React.FC<VenueDetailsProps> = ({ address, date, time, additionalInfo }) => {
  // Convert address to URL-friendly format for embedding in Google Maps
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}`;
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="overflow-hidden rounded-sm border border-gold/20 shadow-sm">
        <iframe
          title="Event Venue Location"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={mapSrc}
        ></iframe>
      </div>
      
      <Card className="border-gold/20">
        <CardContent className="p-4 md:p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-gold mt-0.5" />
            <div>
              <h4 className="font-medium text-base">Location</h4>
              <p className="text-muted-foreground">{address}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Calendar className="w-5 h-5 text-gold mt-0.5" />
            <div>
              <h4 className="font-medium text-base">Date</h4>
              <p className="text-muted-foreground">{date}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-gold mt-0.5" />
            <div>
              <h4 className="font-medium text-base">Time</h4>
              <p className="text-muted-foreground">{time}</p>
            </div>
          </div>
          
          {additionalInfo && (
            <div className="pt-2 border-t border-gold/10">
              <p className="text-sm italic">{additionalInfo}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VenueMap;
