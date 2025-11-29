import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, User, Package, TrendingUp, Eye, ArrowRight } from "lucide-react";

const UserDashboard = () => {
  const stats = [
    { label: "Orders", value: "12", icon: ShoppingBag, color: "text-blue-500" },
    { label: "Favorites", value: "24", icon: Heart, color: "text-red-500" },
    { label: "Following", value: "8", icon: User, color: "text-green-500" },
    { label: "Collections", value: "5", icon: Package, color: "text-purple-500" },
  ];

  const recentOrders = [
    { id: 1, artwork: "Digital Dreams", artist: "Sarah Chen", date: "2024-01-15", status: "Delivered", price: "$299" },
    { id: 2, artwork: "Abstract Flow", artist: "Marcus Lee", date: "2024-01-10", status: "Shipped", price: "$450" },
    { id: 3, artwork: "Neon Nights", artist: "Emma Wilson", date: "2024-01-05", status: "Processing", price: "$199" },
  ];

  const recommendedArtworks = [
    { id: 1, title: "Cosmic Waves", artist: "Alex Rivera", price: "$350" },
    { id: 2, title: "Sunset Dreams", artist: "Lisa Park", price: "$280" },
    { id: 3, title: "Urban Vibes", artist: "Mike Johnson", price: "$420" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening with your account.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Orders */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Orders</CardTitle>
                  <Link to="/orders">
                    <Button variant="ghost" size="sm">
                      View All
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-hero opacity-20 rounded-lg"></div>
                          <div>
                            <p className="font-medium">{order.artwork}</p>
                            <p className="text-sm text-muted-foreground">by {order.artist}</p>
                            <p className="text-xs text-muted-foreground">{order.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">{order.price}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            order.status === "Delivered" ? "bg-green-100 text-green-700" :
                            order.status === "Shipped" ? "bg-blue-100 text-blue-700" :
                            "bg-yellow-100 text-yellow-700"
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/profile">
                    <Button variant="outline" className="w-full justify-start">
                      <User className="mr-2 w-4 h-4" />
                      Edit Profile
                    </Button>
                  </Link>
                  <Link to="/favorites">
                    <Button variant="outline" className="w-full justify-start">
                      <Heart className="mr-2 w-4 h-4" />
                      My Favorites
                    </Button>
                  </Link>
                  <Link to="/following">
                    <Button variant="outline" className="w-full justify-start">
                      <User className="mr-2 w-4 h-4" />
                      Following
                    </Button>
                  </Link>
                  <Link to="/orders">
                    <Button variant="outline" className="w-full justify-start">
                      <Package className="mr-2 w-4 h-4" />
                      Order History
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended for You</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recommendedArtworks.map((artwork) => (
                    <Link key={artwork.id} to={`/artwork/${artwork.id}`}>
                      <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="w-16 h-16 bg-gradient-hero opacity-20 rounded-lg"></div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{artwork.title}</p>
                          <p className="text-xs text-muted-foreground">{artwork.artist}</p>
                          <p className="text-sm font-bold text-primary">{artwork.price}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
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

export default UserDashboard;



