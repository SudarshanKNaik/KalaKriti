import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const StoriesStrip = () => {
  const stories = [
    { id: 1, artist: "Sarah Chen", avatar: "", name: "Sarah" },
    { id: 2, artist: "Marcus Lee", avatar: "", name: "Marcus" },
    { id: 3, artist: "Emma Wilson", avatar: "", name: "Emma" },
    { id: 4, artist: "Alex Rivera", avatar: "", name: "Alex" },
    { id: 5, artist: "Lisa Park", avatar: "", name: "Lisa" },
    { id: 6, artist: "Mike Johnson", avatar: "", name: "Mike" },
    { id: 7, artist: "Anna Kim", avatar: "", name: "Anna" },
    { id: 8, artist: "David Chen", avatar: "", name: "David" },
  ];

  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="flex space-x-4 px-6">
        {stories.map((story) => (
          <Link
            key={story.id}
            to={`/artists/${story.id}`}
            className="flex flex-col items-center space-y-2 min-w-[70px] group cursor-pointer"
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-hero p-0.5 group-hover:scale-110 transition-transform">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Avatar className="w-14 h-14">
                    <AvatarFallback className="bg-gradient-hero text-white font-bold">
                      {story.name[0]}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
            <span className="text-xs text-muted-foreground truncate w-full text-center">
              {story.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StoriesStrip;



