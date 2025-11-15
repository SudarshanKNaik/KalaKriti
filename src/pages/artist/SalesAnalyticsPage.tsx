import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, DollarSign, Package, Eye } from "lucide-react";

const SalesAnalyticsPage = () => {
  const monthlyData = [
    { month: "Jan", sales: 12, revenue: 3450, views: 1234 },
    { month: "Feb", sales: 15, revenue: 4200, views: 1456 },
    { month: "Mar", sales: 18, revenue: 5100, views: 1678 },
    { month: "Apr", sales: 14, revenue: 3900, views: 1345 },
    { month: "May", sales: 20, revenue: 5800, views: 1890 },
    { month: "Jun", sales: 22, revenue: 6400, views: 2100 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Sales Analytics</h1>
              <p className="text-muted-foreground">Comprehensive sales data and insights</p>
            </div>
            <Select defaultValue="6months">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="3months">Last 3 months</SelectItem>
                <SelectItem value="6months">Last 6 months</SelectItem>
                <SelectItem value="year">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
                    <p className="text-3xl font-bold">$28,850</p>
                    <p className="text-sm text-green-500 mt-1">+18% from last period</p>
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
                    <p className="text-sm text-muted-foreground mb-1">Total Sales</p>
                    <p className="text-3xl font-bold">101</p>
                    <p className="text-sm text-green-500 mt-1">+12% from last period</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20">
                    <Package className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Average Order Value</p>
                    <p className="text-3xl font-bold">$285</p>
                    <p className="text-sm text-green-500 mt-1">+5% from last period</p>
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
                    <p className="text-sm text-muted-foreground mb-1">Total Views</p>
                    <p className="text-3xl font-bold">9,703</p>
                    <p className="text-sm text-green-500 mt-1">+23% from last period</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20">
                    <Eye className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <Tabs defaultValue="revenue" className="space-y-6">
            <TabsList>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="views">Views</TabsTrigger>
            </TabsList>

            <TabsContent value="revenue">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {monthlyData.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-gradient-hero rounded-t"
                          style={{ height: `${(data.revenue / 7000) * 100}%` }}
                        ></div>
                        <span className="text-xs text-muted-foreground mt-2">{data.month}</span>
                        <span className="text-xs font-medium mt-1">${(data.revenue / 1000).toFixed(1)}k</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sales">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {monthlyData.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-gradient-hero rounded-t"
                          style={{ height: `${(data.sales / 25) * 100}%` }}
                        ></div>
                        <span className="text-xs text-muted-foreground mt-2">{data.month}</span>
                        <span className="text-xs font-medium mt-1">{data.sales}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="views">
              <Card>
                <CardHeader>
                  <CardTitle>Views Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {monthlyData.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-gradient-hero rounded-t"
                          style={{ height: `${(data.views / 2500) * 100}%` }}
                        ></div>
                        <span className="text-xs text-muted-foreground mt-2">{data.month}</span>
                        <span className="text-xs font-medium mt-1">{data.views}</span>
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

export default SalesAnalyticsPage;

