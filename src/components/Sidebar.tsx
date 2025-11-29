import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Sparkles, ArrowRight } from "lucide-react";

const Sidebar = () => {
  const categories = [
    "Digital Art", "Abstract", "Portraits", "Landscape", 
    "Illustration", "3D Art", "Typography", "Branding"
  ];

  const trendingTags = [
    { tag: "minimalist", count: 1234 },
    { tag: "vibrant", count: 987 },
    { tag: "modern", count: 856 },
    { tag: "abstract", count: 743 },
    { tag: "digital", count: 692 },
  ];

  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Browse Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <Link key={category} to={`/categories/${category.toLowerCase()}`}>
              <Button
                variant="ghost"
                className="w-full justify-start text-sm"
              >
                {category}
              </Button>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Trending Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <TrendingUp className="w-4 h-4 mr-2" />
            Trending Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {trendingTags.map((item) => (
              <Link key={item.tag} to={`/search?q=${item.tag}`}>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary/10">
                  #{item.tag}
                  <span className="ml-1 text-xs text-muted-foreground">({item.count})</span>
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Get Matched CTA */}
      <Card className="bg-gradient-hero text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Get Matched Now</h3>
              <p className="text-sm text-white/80">Find your perfect artist</p>
            </div>
          </div>
          <Button className="w-full bg-white text-primary hover:bg-white/90">
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;



