import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Eye, Check, X, Truck } from "lucide-react";

const OrdersManagementPage = () => {
  const orders = [
    { id: 1, artwork: "Digital Dreams", buyer: "John Doe", date: "2024-01-15", status: "Pending", amount: "$299", orderNumber: "ORD-001" },
    { id: 2, artwork: "Abstract Flow", buyer: "Jane Smith", date: "2024-01-14", status: "Processing", amount: "$450", orderNumber: "ORD-002" },
    { id: 3, artwork: "Neon Nights", buyer: "Mike Johnson", date: "2024-01-13", status: "Shipped", amount: "$199", orderNumber: "ORD-003" },
    { id: 4, artwork: "Cosmic Waves", buyer: "Sarah Lee", date: "2024-01-12", status: "Delivered", amount: "$350", orderNumber: "ORD-004" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Processing":
        return "bg-yellow-100 text-yellow-700";
      case "Pending":
        return "bg-gray-100 text-gray-700";
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
            <h1 className="text-4xl font-bold mb-2">Orders Management</h1>
            <p className="text-muted-foreground">Manage and track all your orders</p>
          </div>

          <Tabs defaultValue="all" className="space-y-6">
            <TabsList>
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
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
                          <p className="text-sm text-muted-foreground">Order #{order.orderNumber}</p>
                          <p className="text-sm text-muted-foreground">Buyer: {order.buyer}</p>
                          <p className="text-xs text-muted-foreground">{order.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-bold text-xl text-primary mb-1">{order.amount}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Link to={`/artist/orders/${order.id}`}>
                            <Button variant="outline" size="icon">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                          {order.status === "Pending" && (
                            <>
                              <Button variant="outline" size="icon" className="text-green-600">
                                <Check className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="icon" className="text-red-600">
                                <X className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                          {order.status === "Processing" && (
                            <Button variant="outline" size="icon" className="text-blue-600">
                              <Truck className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {["pending", "processing", "shipped", "delivered"].map((status) => (
              <TabsContent key={status} value={status} className="space-y-4">
                {orders.filter((o) => o.status.toLowerCase() === status).map((order) => (
                  <Card key={order.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-20 h-20 bg-gradient-hero opacity-20 rounded-lg"></div>
                          <div>
                            <p className="font-bold">{order.artwork}</p>
                            <p className="text-sm text-muted-foreground">Order #{order.orderNumber}</p>
                            <p className="text-sm text-muted-foreground">Buyer: {order.buyer}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-bold text-primary">{order.amount}</p>
                            <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </div>
                          <Link to={`/artist/orders/${order.id}`}>
                            <Button variant="outline" size="icon">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrdersManagementPage;



