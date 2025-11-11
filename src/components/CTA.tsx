import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-gradient-hero shadow-glow">
          <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Join Our Community Today
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Start Your Creative Journey?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Whether you're an artist looking to showcase your work or an art lover 
            searching for unique pieces, ArtistHub is your gateway to the creative world.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-medium"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-2 border-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
          
          <p className="text-sm text-white/70 pt-4">
            No credit card required • Join 100,000+ creative minds
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
