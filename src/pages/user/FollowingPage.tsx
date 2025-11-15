import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Palette, Users, Star } from "lucide-react";

const FollowingPage = () => {
  const [following, setFollowing] = useState([
    { id: 1, name: "Sarah Chen", username: "@sarahchen", followers: 12500, artworks: 45, rating: 4.9, verified: true },
    { id: 2, name: "Marcus Lee", username: "@marcuslee", followers: 9800, artworks: 32, rating: 4.8, verified: true },
    { id: 3, name: "Emma Wilson", username: "@emmawilson", followers: 15200, artworks: 67, rating: 4.9, verified: false },
    { id: 4, name: "Alex Rivera", username: "@alexrivera", followers: 8700, artworks: 28, rating: 4.7, verified: false },
    { id: 5, name: "Lisa Park", username: "@lisapark", followers: 11200, artworks: 41, rating: 4.8, verified: true },
    { id: 6, name: "Mike Johnson", username: "@mikejohnson", followers: 6500, artworks: 19, rating: 4.6, verified: false },
  ]);

  const unfollow = (id: number) => {
    setFollowing(following.filter((artist) => artist.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Following</h1>
            <p className="text-muted-foreground">
              {following.length} {following.length === 1 ? "artist" : "artists"} you're following
            </p>
          </div>

          {following.length === 0 ? (
            <Card className="text-center p-12">
              <UserPlus className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Not following anyone yet</h2>
              <p className="text-muted-foreground mb-6">
                Discover and follow your favorite artists!
              </p>
              <Link to="/artists">
                <Button className="bg-gradient-hero border-0">
                  Browse Artists
                </Button>
              </Link>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {following.map((artist) => (
                <Card key={artist.id} className="p-6 hover:shadow-medium transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full"></div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-lg">{artist.name}</h3>
                          {artist.verified && (
                            <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{artist.username}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{artist.followers.toLocaleString()} followers</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{artist.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Palette className="w-4 h-4" />
                      <span>{artist.artworks} artworks</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/artists/${artist.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        View Profile
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      onClick={() => unfollow(artist.id)}
                      className="text-red-500 hover:text-red-600 hover:border-red-500"
                    >
                      Unfollow
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FollowingPage;

