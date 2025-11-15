import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Eye, Heart, Package, ArrowRight, Plus } from "lucide-react";

const ArtistDashboard = () => {
  const stats = [
    { label: "Total Earnings", value: "$12,450", icon: DollarSign, change: "+12%", color: "text-green-500" },
    { label: "Artworks Sold", value: "45", icon: Package, change: "+8", color: "text-blue-500" },
    { label: "Total Views", value: "12.5K", icon: Eye, change: "+23%", color: "text-purple-500" },
    { label: "Total Likes", value: "2.3K", icon: Heart, change: "+15%", color: "text-red-500" },
  ];

  const recentSales = [
    { id: 1, artwork: "Digital Dreams", buyer: "John Doe", date: "2024-01-15", amount: "$299" },
    { id: 2, artwork: "Abstract Flow", buyer: "Jane Smith", date: "2024-01-14", amount: "$450" },
    { id: 3, artwork: "Neon Nights", buyer: "Mike Johnson", date: "2024-01-13", amount: "$199" },
  ];

  const topArtworks = [
    { id: 1, title: "Digital Dreams", views: 1234, likes: 256, sales: 12 },
    { id: 2, title: "Abstract Flow", views: 987, likes: 189, sales: 8 },
    { id: 3, title: "Neon Nights", views: 1456, likes: 312, sales: 15 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Artist Dashboard</h1>
              <p className="text-muted-foreground">Overview of your art business</p>
            </div>
            <Link to="/artist/upload">
              <Button className="bg-gradient-hero border-0">
                <Plus className="mr-2 w-4 h-4" />
                Upload Artwork
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <span className="text-sm font-medium text-green-500">{stat.change}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Sales */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Sales</CardTitle>
                  <Link to="/artist/orders">
                    <Button variant="ghost" size="sm">
                      View All
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentSales.map((sale) => (
                      <div key={sale.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-hero opacity-20 rounded-lg"></div>
                          <div>
                            <p className="font-medium">{sale.artwork}</p>
                            <p className="text-sm text-muted-foreground">Sold to {sale.buyer}</p>
                            <p className="text-xs text-muted-foreground">{sale.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary text-lg">{sale.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Artworks */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topArtworks.map((artwork) => (
                    <Link key={artwork.id} to={`/artist/artworks/${artwork.id}`}>
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="w-16 h-16 bg-gradient-hero opacity-20 rounded-lg"></div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{artwork.title}</p>
                          <div className="flex items-center space-x-3 text-xs text-muted-foreground mt-1">
                            <span>{artwork.views} views</span>
                            <span>{artwork.likes} likes</span>
                            <span>{artwork.sales} sales</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/artist/upload">
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="mr-2 w-4 h-4" />
                      Upload Artwork
                    </Button>
                  </Link>
                  <Link to="/artist/artworks">
                    <Button variant="outline" className="w-full justify-start">
                      <Package className="mr-2 w-4 h-4" />
                      My Artworks
                    </Button>
                  </Link>
                  <Link to="/artist/analytics">
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="mr-2 w-4 h-4" />
                      Analytics
                    </Button>
                  </Link>
                  <Link to="/artist/earnings">
                    <Button variant="outline" className="w-full justify-start">
                      <DollarSign className="mr-2 w-4 h-4" />
                      Earnings
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtistDashboard;

