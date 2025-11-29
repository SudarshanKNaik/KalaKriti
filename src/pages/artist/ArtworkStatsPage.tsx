import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Heart, DollarSign, TrendingUp, Users, Calendar } from "lucide-react";

const ArtworkStatsPage = () => {
  const { id } = useParams();
  const stats = {
    views: 1234,
    likes: 256,
    sales: 12,
    revenue: 3588,
    avgRating: 4.8,
    reviews: 45,
  };

  const dailyViews = [
    { date: "Jan 1", views: 45 },
    { date: "Jan 2", views: 52 },
    { date: "Jan 3", views: 48 },
    { date: "Jan 4", views: 61 },
    { date: "Jan 5", views: 55 },
    { date: "Jan 6", views: 67 },
    { date: "Jan 7", views: 72 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Artwork Statistics</h1>
            <p className="text-muted-foreground">Detailed analytics for your artwork</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Views</p>
                    <p className="text-3xl font-bold">{stats.views.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20">
                    <Eye className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Likes</p>
                    <p className="text-3xl font-bold">{stats.likes.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20">
                    <Heart className="w-6 h-6 text-red-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Sales</p>
                    <p className="text-3xl font-bold">{stats.sales}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20">
                    <DollarSign className="w-6 h-6 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Revenue</p>
                    <p className="text-3xl font-bold">${stats.revenue.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20">
                    <TrendingUp className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Average Rating</p>
                    <p className="text-3xl font-bold">{stats.avgRating}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20">
                    <Users className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Reviews</p>
                    <p className="text-3xl font-bold">{stats.reviews}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20">
                    <Calendar className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts and Details */}
          <Tabs defaultValue="views" className="space-y-6">
            <TabsList>
              <TabsTrigger value="views">Views</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
            </TabsList>

            <TabsContent value="views">
              <Card>
                <CardHeader>
                  <CardTitle>Views Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {dailyViews.map((day, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-gradient-hero rounded-t"
                          style={{ height: `${(day.views / 100) * 100}%` }}
                        ></div>
                        <span className="text-xs text-muted-foreground mt-2">{day.date}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="engagement">
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Like Rate</span>
                        <span className="font-medium">20.7%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-hero h-2 rounded-full" style={{ width: "20.7%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Conversion Rate</span>
                        <span className="font-medium">0.97%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-hero h-2 rounded-full" style={{ width: "0.97%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Review Rate</span>
                        <span className="font-medium">3.6%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-hero h-2 rounded-full" style={{ width: "3.6%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sales">
              <Card>
                <CardHeader>
                  <CardTitle>Sales History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Sale #{i}</p>
                          <p className="text-sm text-muted-foreground">2 days ago</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">$299</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtworkStatsPage;



