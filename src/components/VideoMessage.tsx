
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface VideoMessageProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  videoUrl: string;
}

const VideoMessage: React.FC<VideoMessageProps> = ({
  isOpen,
  onClose,
  title,
  description,
  videoUrl,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-background rounded-lg">
        <DialogHeader className="p-6 pb-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-3 right-3" 
            onClick={onClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          
          <DialogTitle className="font-serif text-2xl">{title}</DialogTitle>
          <DialogDescription className="mt-2">{description}</DialogDescription>
        </DialogHeader>
        
        <div className="relative aspect-video w-full">
          <video 
            controls 
            autoPlay 
            className="w-full h-full object-cover"
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="p-4 flex justify-end">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="gold-border hover:bg-gold/10"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoMessage;
