import { Button } from "@/components/ui/button";
import galleryPreview from "@/assets/gallery-preview.jpg";
import { ArrowRight } from "lucide-react";

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Amazing{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Artworks
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover diverse styles from talented artists around the world
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-medium group">
          <img
            src={galleryPreview}
            alt="Gallery preview"
            className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end justify-center pb-12">
            <Button 
              size="lg"
              className="bg-gradient-hero border-0 hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-glow"
            >
              View Full Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              50K+
            </div>
            <div className="text-muted-foreground">Artworks</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              10K+
            </div>
            <div className="text-muted-foreground">Artists</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              100K+
            </div>
            <div className="text-muted-foreground">Art Lovers</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              25K+
            </div>
            <div className="text-muted-foreground">Transactions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
