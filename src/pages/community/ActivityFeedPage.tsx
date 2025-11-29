import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Palette, User } from "lucide-react";

const ActivityFeedPage = () => {
  const activities = [
    { id: 1, artist: "Sarah Chen", action: "uploaded", artwork: "Digital Dreams", time: "2 hours ago", type: "upload" },
    { id: 2, artist: "Marcus Lee", action: "liked", artwork: "Abstract Flow", time: "5 hours ago", type: "like" },
    { id: 3, artist: "Emma Wilson", action: "uploaded", artwork: "Neon Nights", time: "1 day ago", type: "upload" },
    { id: 4, artist: "Alex Rivera", action: "uploaded", artwork: "Cosmic Waves", time: "2 days ago", type: "upload" },
    { id: 5, artist: "Lisa Park", action: "liked", artwork: "Sunset Dreams", time: "3 days ago", type: "like" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Activity Feed</h1>
            <p className="text-muted-foreground">Latest activity from artists you follow</p>
          </div>

          <div className="space-y-4">
            {activities.map((activity) => (
              <Card key={activity.id}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Link to={`/artists/${activity.id}`} className="font-bold hover:text-primary">
                          {activity.artist}
                        </Link>
                        <span className="text-muted-foreground">{activity.action}</span>
                        <Link to={`/artwork/${activity.id}`} className="font-medium hover:text-primary">
                          {activity.artwork}
                        </Link>
                      </div>
                      {activity.type === "upload" && (
                        <div className="w-full h-48 bg-gradient-hero opacity-20 rounded-lg mb-2"></div>
                      )}
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {activity.type === "like" && (
                        <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                      )}
                      {activity.type === "upload" && (
                        <Palette className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActivityFeedPage;



