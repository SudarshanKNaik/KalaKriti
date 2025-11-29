import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MessageCircle, Bookmark, Share2, Eye } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface FeedCardProps {
  id: number;
  title: string;
  artist: string;
  artistId: number;
  image: string;
  likes: number;
  comments: number;
  views: number;
  isFeatured?: boolean;
}

const FeedCard = ({ id, title, artist, artistId, image, likes, comments, views, isFeatured = false }: FeedCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className={`group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-medium transition-all duration-300 ${
      isFeatured ? "md:col-span-2 md:row-span-2" : ""
    }`}>
      <Link to={`/artwork/${id}`}>
        <div className={`relative bg-gradient-hero opacity-20 group-hover:opacity-30 transition-opacity ${
          isFeatured ? "aspect-[4/3]" : "aspect-square"
        }`}>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex items-center space-x-2 text-white">
              <Eye className="w-5 h-5" />
              <span className="font-medium">{views.toLocaleString()} views</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Card Footer */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <Link to={`/artists/${artistId}`} className="flex items-center space-x-2 group/artist">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-gradient-hero text-white text-xs">
                {artist[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium group-hover/artist:text-primary transition-colors">
                {artist}
              </p>
              <p className="text-xs text-muted-foreground truncate max-w-[150px]">{title}</p>
            </div>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={(e) => {
                e.preventDefault();
                setIsLiked(!isLiked);
              }}
            >
              <Heart className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
              <span className="ml-1 text-xs">{likes}</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <Link to={`/artwork/${id}`}>
                <MessageCircle className="w-4 h-4" />
                <span className="ml-1 text-xs">{comments}</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={(e) => {
                e.preventDefault();
                setIsSaved(!isSaved);
              }}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? "fill-yellow-500 text-yellow-500" : ""}`} />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;



