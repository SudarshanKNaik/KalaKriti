import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Package, Home } from "lucide-react";

const OrderConfirmationPage = () => {
  const order = {
    orderNumber: "ORD-001234",
    date: "2024-01-15",
    total: 1147,
    items: [
      { title: "Digital Dreams", artist: "Sarah Chen", price: 299 },
      { title: "Abstract Flow", artist: "Marcus Lee", price: 450 },
      { title: "Neon Nights", artist: "Emma Wilson", price: 199, quantity: 2 },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="text-center p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for your purchase. Your order has been successfully placed.
            </p>

            <div className="max-w-md mx-auto mb-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Order Number</p>
                    <p className="text-2xl font-bold">{order.orderNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Order Date</p>
                    <p className="font-medium">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                    <p className="text-2xl font-bold text-primary">${order.total.toFixed(2)}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Order Items</h2>
              <div className="space-y-3 max-w-md mx-auto">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-hero opacity-20 rounded-lg"></div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">by {item.artist}</p>
                      </div>
                    </div>
                    <p className="font-bold text-primary">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/orders">
                <Button variant="outline" className="w-full sm:w-auto">
                  <Package className="mr-2 w-4 h-4" />
                  View Orders
                </Button>
              </Link>
              <Link to="/">
                <Button className="w-full sm:w-auto bg-gradient-hero border-0">
                  <Home className="mr-2 w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderConfirmationPage;



