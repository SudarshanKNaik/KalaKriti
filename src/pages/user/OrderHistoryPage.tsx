import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Eye, Download, Star } from "lucide-react";

const OrderHistoryPage = () => {
  const orders = [
    { id: 1, artwork: "Digital Dreams", artist: "Sarah Chen", date: "2024-01-15", status: "Delivered", price: "$299", orderNumber: "ORD-001" },
    { id: 2, artwork: "Abstract Flow", artist: "Marcus Lee", date: "2024-01-10", status: "Shipped", price: "$450", orderNumber: "ORD-002" },
    { id: 3, artwork: "Neon Nights", artist: "Emma Wilson", date: "2024-01-05", status: "Processing", price: "$199", orderNumber: "ORD-003" },
    { id: 4, artwork: "Cosmic Waves", artist: "Alex Rivera", date: "2023-12-28", status: "Delivered", price: "$350", orderNumber: "ORD-004" },
    { id: 5, artwork: "Sunset Dreams", artist: "Lisa Park", date: "2023-12-20", status: "Delivered", price: "$280", orderNumber: "ORD-005" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Processing":
        return "bg-yellow-100 text-yellow-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Order History</h1>
            <p className="text-muted-foreground">View and manage all your orders</p>
          </div>

          <Tabs defaultValue="all" className="space-y-6">
            <TabsList>
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="shipped">Shipped</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-20 h-20 bg-gradient-hero opacity-20 rounded-lg"></div>
                        <div>
                          <p className="font-bold text-lg">{order.artwork}</p>
                          <p className="text-sm text-muted-foreground">by {order.artist}</p>
                          <p className="text-xs text-muted-foreground mt-1">Order #{order.orderNumber}</p>
                          <p className="text-xs text-muted-foreground">{order.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-bold text-xl text-primary mb-1">{order.price}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Link to={`/orders/${order.id}`}>
                            <Button variant="outline" size="icon">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                          {order.status === "Delivered" && (
                            <Button variant="outline" size="icon">
                              <Download className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="processing">
              {orders.filter((o) => o.status === "Processing").map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-gradient-hero opacity-20 rounded-lg"></div>
                        <div>
                          <p className="font-bold">{order.artwork}</p>
                          <p className="text-sm text-muted-foreground">by {order.artist}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{order.price}</p>
                        <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="shipped">
              {orders.filter((o) => o.status === "Shipped").map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-gradient-hero opacity-20 rounded-lg"></div>
                        <div>
                          <p className="font-bold">{order.artwork}</p>
                          <p className="text-sm text-muted-foreground">by {order.artist}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{order.price}</p>
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="delivered">
              {orders.filter((o) => o.status === "Delivered").map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-gradient-hero opacity-20 rounded-lg"></div>
                        <div>
                          <p className="font-bold">{order.artwork}</p>
                          <p className="text-sm text-muted-foreground">by {order.artist}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-bold text-primary">{order.price}</p>
                          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                            {order.status}
                          </span>
                        </div>
                        <Button variant="outline" size="icon">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderHistoryPage;



