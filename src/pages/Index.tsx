import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoriesStrip from "@/components/StoriesStrip";
import FeedCard from "@/components/FeedCard";
import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Sparkles, Loader2 } from "lucide-react";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const popularTags = ["dashboard", "logo", "card", "illustration", "ui", "branding", "mobile", "web"];

  // Generate feed items
  const generateFeedItems = (count: number, startId: number = 1) => {
    return Array.from({ length: count }, (_, i) => ({
      id: startId + i,
      title: `Artwork ${startId + i}`,
      artist: `Artist ${((startId + i) % 10) + 1}`,
      artistId: ((startId + i) % 10) + 1,
      image: "",
      likes: Math.floor(Math.random() * 500) + 50,
      comments: Math.floor(Math.random() * 100) + 10,
      views: Math.floor(Math.random() * 5000) + 500,
      isFeatured: i === 2 || i === 8, // Make some items featured
    }));
  };

  const [feedItems, setFeedItems] = useState(generateFeedItems(12));

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const newItems = generateFeedItems(12, feedItems.length + 1);
      setFeedItems([...feedItems, ...newItems]);
      setPage(page + 1);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 1000 &&
        !loading
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, feedItems.length]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero & Search Section */}
      <section className="pt-24 pb-8 bg-gradient-subtle border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero Text */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Discover the World's{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Top Designers
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore, connect, and get inspired by the best digital artists and designers from around the globe.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for designs, artists, or tags..."
                className="pl-12 h-14 text-lg"
              />
            </div>

            {/* Popular Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-sm text-muted-foreground">Popular:</span>
              {popularTags.map((tag) => (
                <Link key={tag} to={`/search?q=${tag}`}>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-primary/10 px-3 py-1">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories Strip */}
      <div className="bg-background border-b py-4">
        <StoriesStrip />
      </div>

      {/* Main Feed Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Desktop Only */}
            <div className="hidden lg:block lg:col-span-1">
              <Sidebar />
            </div>

            {/* Main Feed */}
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold flex items-center">
                  <Sparkles className="w-6 h-6 mr-2 text-primary" />
                  Explore Feed
                </h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Latest</Button>
                  <Button variant="outline" size="sm">Popular</Button>
                  <Button variant="outline" size="sm">Trending</Button>
                </div>
              </div>

              {/* Feed Grid - Masonry/Staggered Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-max">
                {feedItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={item.isFeatured ? "md:col-span-2" : ""}
                  >
                    <FeedCard {...item} />
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="flex justify-center mt-8">
                {loading ? (
                  <Button disabled>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Loading...
                  </Button>
                ) : (
                  <Button onClick={loadMore} variant="outline">
                    Load More
                  </Button>
                )}
              </div>
            </div>

            {/* Right Sidebar - Desktop Only */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Promotional Banner */}
                <div className="bg-gradient-hero rounded-lg p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Get Hired</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Connect with clients looking for your skills
                  </p>
                  <Link to="/register">
                    <Button className="w-full bg-white text-primary hover:bg-white/90">
                      Join as Artist
                    </Button>
                  </Link>
                </div>

                {/* Curated Collections */}
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold mb-4">Curated Collections</h3>
                  <div className="space-y-3">
                    {["Abstract Dreams", "Digital Portraits", "Nature's Beauty"].map((collection, i) => (
                      <Link key={i} to="/collections" className="block group">
                        <div className="aspect-video bg-gradient-hero opacity-20 rounded-lg mb-2 group-hover:opacity-30 transition-opacity"></div>
                        <p className="text-sm font-medium group-hover:text-primary transition-colors">
                          {collection}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
