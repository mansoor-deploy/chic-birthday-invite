
import React from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, ExternalLink } from 'lucide-react';

interface AddToCalendarProps {
  event: {
    name: string;
    description: string;
    location: string;
    startDate: Date;
    endDate: Date;
  };
}

const AddToCalendar: React.FC<AddToCalendarProps> = ({ event }) => {
  // Format for Google Calendar
  const googleCalendarUrl = () => {
    const { name, description, location, startDate, endDate } = event;
    
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '');
    };
    
    const googleParams = new URLSearchParams({
      action: 'TEMPLATE',
      text: name,
      details: description,
      location: location,
      dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
    });
    
    return `https://calendar.google.com/calendar/render?${googleParams.toString()}`;
  };
  
  // Format for iCalendar (.ics file)
  const generateICalendar = () => {
    const { name, description, location, startDate, endDate } = event;
    
    const formatDateForIcs = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '');
    };
    
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `SUMMARY:${name}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      `DTSTART:${formatDateForIcs(startDate)}`,
      `DTEND:${formatDateForIcs(endDate)}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\n');
    
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    // Create a link element, click it, and then remove it
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${name.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          className="border-gold/30 text-gold hover:bg-gold/5 hover:border-gold flex gap-2"
        >
          <CalendarIcon className="h-4 w-4" />
          <span>Add to Calendar</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4" align="center">
        <div className="grid gap-4">
          <h4 className="font-medium text-sm">Add This Event To Your Calendar</h4>
          <div className="grid gap-2">
            <Button 
              variant="outline" 
              className="justify-start" 
              onClick={() => window.open(googleCalendarUrl(), '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Google Calendar
            </Button>
            <Button 
              variant="outline" 
              className="justify-start" 
              onClick={generateICalendar}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              iCalendar (.ics)
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AddToCalendar;
