
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CountdownTimer from "@/components/CountdownTimer";
import RSVPForm from "@/components/RSVPForm";
import VenueMap from "@/components/VenueMap";
import PhotoGallery from "@/components/PhotoGallery";
import GiftRegistry from "@/components/GiftRegistry";
import AudioPlayer from "@/components/AudioPlayer";
import AddToCalendar from "@/components/AddToCalendar";
import { Separator } from "@/components/ui/separator";
import { Heart, Gift, MapPin, Calendar, Users } from "lucide-react";

const birthdayPerson = {
  name: "Alexandra",
  date: new Date("2023-11-15T19:00:00"), // Set this to a future date
  age: 30,
  venue: {
    name: "The Grand Hotel",
    address: "123 Elegant Street, New York, NY 10001",
    date: "November 15th, 2023",
    time: "7:00 PM - 11:00 PM",
    additionalInfo: "Valet parking available. Cocktail attire suggested."
  },
  photos: [
    { id: 1, src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80", alt: "Birthday celebration" },
    { id: 2, src: "https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", alt: "Party decorations" },
    { id: 3, src: "https://images.unsplash.com/photo-1583875762487-5f8f7c718d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", alt: "Celebration moments" },
    { id: 4, src: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=636&q=80", alt: "Birthday cake" },
    { id: 5, src: "https://images.unsplash.com/photo-1605548230627-391ee8c59803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80", alt: "Elegant dinner" },
    { id: 6, src: "https://images.unsplash.com/photo-1598623536383-97c54a57c4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80", alt: "Party toast" },
  ],
  gifts: [
    { id: 1, name: "Donation to Charity", description: "A contribution to my favorite charity in lieu of gifts would be wonderful.", link: "https://www.example.org/donate", icon: "heart" },
    { id: 2, name: "Gift Card", description: "A gift card to my favorite store - Nordstrom", link: "https://www.nordstrom.com/gift-cards", icon: "shopping" },
    { id: 3, name: "Flowers", description: "I love fresh flowers - lilies and roses are my favorites", icon: "gift" },
    { id: 4, name: "Wine Collection", description: "I'm building my wine collection - red wines preferred", icon: "gift" },
  ]
};

// Create calendar event data
const calendarEvent = {
  name: `${birthdayPerson.name}'s ${birthdayPerson.age}th Birthday Celebration`,
  description: `Please join us for an elegant evening celebrating ${birthdayPerson.name}'s ${birthdayPerson.age}th birthday. Dinner, drinks, and dancing to follow.`,
  location: birthdayPerson.venue.address,
  startDate: birthdayPerson.date,
  endDate: new Date(birthdayPerson.date.getTime() + 4 * 60 * 60 * 1000), // 4 hours after start
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("event");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4 ${
        isScrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}>
        <div className="container flex justify-center">
          <h1 className={`font-serif transition-all duration-500 ${
            isScrolled ? "text-xl" : "text-2xl md:text-3xl"
          }`}>
            {birthdayPerson.name}'s <span className="text-gold">{birthdayPerson.age}th</span> Birthday
          </h1>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white"></div>
        </div>
        
        <div className="container max-w-3xl mx-auto z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-6xl mb-3">Save the Date</h2>
            <p className="text-xl md:text-2xl text-muted-foreground">{birthdayPerson.venue.date}</p>
            
            <div className="my-8">
              <CountdownTimer targetDate={birthdayPerson.date} />
            </div>
            
            <p className="max-w-xl mx-auto text-muted-foreground mb-8">
              Please join us for an elegant evening celebrating {birthdayPerson.name}'s {birthdayPerson.age}th birthday.
              Dinner, drinks, and dancing to follow.
            </p>
            
            <div className="flex justify-center">
              <AddToCalendar event={calendarEvent} />
            </div>
          </div>
          
          <Tabs 
            defaultValue="event" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full animate-fade-in"
          >
            <TabsList className="grid grid-cols-4 w-full mb-8">
              <TabsTrigger value="event" className="flex flex-col items-center gap-1 py-3">
                <Calendar className="h-4 w-4" />
                <span>Event</span>
              </TabsTrigger>
              <TabsTrigger value="venue" className="flex flex-col items-center gap-1 py-3">
                <MapPin className="h-4 w-4" />
                <span>Venue</span>
              </TabsTrigger>
              <TabsTrigger value="gallery" className="flex flex-col items-center gap-1 py-3">
                <Heart className="h-4 w-4" />
                <span>Gallery</span>
              </TabsTrigger>
              <TabsTrigger value="gifts" className="flex flex-col items-center gap-1 py-3">
                <Gift className="h-4 w-4" />
                <span>Gifts</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="event" className="space-y-8">
              <div className="md:flex gap-8 space-y-8 md:space-y-0">
                <div className="md:w-1/2">
                  <h3 className="section-heading">Details</h3>
                  <p className="mb-4">
                    Join us for an unforgettable evening celebrating {birthdayPerson.name}'s {birthdayPerson.age}th birthday.
                  </p>
                  <p className="text-muted-foreground">
                    Enjoy an elegant dinner, craft cocktails, and dancing into the night.
                    Semi-formal attire suggested.
                  </p>
                  
                  <Separator className="my-6 bg-gold/30" />
                  
                  <div className="flex items-center gap-2 text-gold mb-2">
                    <Users className="h-5 w-5" />
                    <span className="font-medium">RSVP by November 1st</span>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="section-heading">RSVP</h3>
                  <RSVPForm />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="venue">
              <h3 className="section-heading">Location & Time</h3>
              <div className="md:flex gap-8">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <p className="mb-6">
                    The celebration will be held at the beautiful {birthdayPerson.venue.name}.
                    Located in the heart of the city, this venue offers an elegant setting 
                    for our special evening.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Valet parking will be available. If you're staying overnight,
                    we've arranged for a special room rate.
                  </p>
                </div>
                
                <div className="md:w-1/2">
                  <VenueMap 
                    address={birthdayPerson.venue.address} 
                    date={birthdayPerson.venue.date} 
                    time={birthdayPerson.venue.time}
                    additionalInfo={birthdayPerson.venue.additionalInfo}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="gallery">
              <h3 className="section-heading">Memories</h3>
              <p className="mb-6 text-muted-foreground">A glimpse of joyful moments through the years</p>
              <PhotoGallery photos={birthdayPerson.photos} />
            </TabsContent>
            
            <TabsContent value="gifts">
              <h3 className="section-heading">Gift Ideas</h3>
              <GiftRegistry 
                items={birthdayPerson.gifts}
                message="Your presence is the greatest gift, but if you wish to bring something, here are a few ideas:"
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <footer className="bg-secondary py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} | {birthdayPerson.name}'s {birthdayPerson.age}th Birthday Celebration</p>
          <p className="mt-1">With love and appreciation for your friendship</p>
        </div>
      </footer>
      
      <AudioPlayer />
    </div>
  );
};

export default Index;
