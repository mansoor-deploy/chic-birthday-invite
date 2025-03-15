
import React, { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface Photo {
  id: number;
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {photos.map((photo, index) => (
          <div 
            key={photo.id} 
            className="cursor-pointer overflow-hidden border border-gold/20 hover:border-gold/40 transition-all duration-300 rounded-sm animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <AspectRatio ratio={1 / 1}>
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </AspectRatio>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-3xl p-0 bg-background border-gold/30">
          {selectedPhoto && (
            <div className="relative">
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.alt} 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4">
                <p className="text-white font-serif text-lg">{selectedPhoto.alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoGallery;
