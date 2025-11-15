import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

const ReviewsPage = () => {
  const reviews = [
    { id: 1, user: "John Doe", artwork: "Digital Dreams", rating: 5, comment: "Absolutely stunning artwork! Exceeded my expectations.", date: "2024-01-15" },
    { id: 2, user: "Jane Smith", artwork: "Abstract Flow", rating: 4, comment: "Great piece, very happy with the purchase.", date: "2024-01-14" },
    { id: 3, user: "Mike Johnson", artwork: "Neon Nights", rating: 5, comment: "Perfect for my office space. Highly recommended!", date: "2024-01-13" },
    { id: 4, user: "Sarah Lee", artwork: "Cosmic Waves", rating: 4, comment: "Beautiful artwork, fast delivery.", date: "2024-01-12" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Reviews</h1>
            <p className="text-muted-foreground">Customer reviews and ratings</p>
          </div>

          <div className="space-y-4">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-medium">{review.user}</p>
                          <Link to={`/artwork/${review.id}`} className="text-sm text-primary hover:underline">
                            {review.artwork}
                          </Link>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-2">{review.comment}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
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

export default ReviewsPage;

