
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { CheckCircle2 } from 'lucide-react';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attendance, setAttendance] = useState('attending');
  const [guests, setGuests] = useState('1');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast.error('Please provide your name and email');
      return;
    }
    
    // Here you would normally send the data to your backend
    console.log({ name, email, attendance, guests, message });
    
    // Show success
    setSubmitted(true);
    toast.success('Thank you for your RSVP!');
  };

  if (submitted) {
    return (
      <Card className="p-8 text-center animate-fade-in">
        <CheckCircle2 className="mx-auto text-gold w-16 h-16 mb-4" />
        <h3 className="font-serif text-2xl mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-4">Your RSVP has been received.</p>
        <Button variant="outline" onClick={() => setSubmitted(false)} className="elegant-button">
          Submit Another Response
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6 md:p-8 animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input 
              id="name" 
              placeholder="John Doe" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="john@example.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>Will you attend?</Label>
            <RadioGroup 
              value={attendance} 
              onValueChange={setAttendance}
              defaultValue="attending"
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="attending" id="attending" />
                <Label htmlFor="attending" className="cursor-pointer">Yes, I'll be there</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="not-attending" id="not-attending" />
                <Label htmlFor="not-attending" className="cursor-pointer">Sorry, I can't make it</Label>
              </div>
            </RadioGroup>
          </div>
          
          {attendance === 'attending' && (
            <div>
              <Label htmlFor="guests">Number of Guests</Label>
              <select 
                id="guests" 
                value={guests} 
                onChange={(e) => setGuests(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="1">Just me</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
              </select>
            </div>
          )}
          
          <div>
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea 
              id="message" 
              placeholder="Looking forward to celebrating with you!" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1.5"
              rows={3}
            />
          </div>
        </div>
        
        <Button type="submit" className="w-full elegant-button font-medium">
          Send RSVP
        </Button>
      </form>
    </Card>
  );
};

export default RSVPForm;
