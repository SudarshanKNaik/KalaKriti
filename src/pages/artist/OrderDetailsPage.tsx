import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, User, Calendar, MapPin, DollarSign, Truck, Check } from "lucide-react";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const order = {
    id: id,
    orderNumber: "ORD-001",
    artwork: "Digital Dreams",
    buyer: "John Doe",
    email: "john@example.com",
    date: "2024-01-15",
    status: "Processing",
    amount: 299,
    shipping: {
      address: "123 Main Street",
      city: "San Francisco",
      state: "CA",
      zip: "94102",
      country: "United States",
    },
    tracking: "TRACK123456",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-8">
            <Link to="/artist/orders">
              <Button variant="ghost" className="mb-4">
                ← Back to Orders
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-2">Order Details</h1>
            <p className="text-muted-foreground">Order #{order.orderNumber}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Order Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 bg-gradient-hero opacity-20 rounded-lg"></div>
                    <div>
                      <p className="font-bold text-lg">{order.artwork}</p>
                      <p className="text-sm text-muted-foreground">Digital Artwork</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Order Number</p>
                      <p className="font-medium">{order.orderNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Order Date</p>
                      <p className="font-medium">{order.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Status</p>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                        {order.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tracking</p>
                      <p className="font-medium">{order.tracking}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shipping Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">{order.buyer}</p>
                      <p className="text-muted-foreground">{order.shipping.address}</p>
                      <p className="text-muted-foreground">
                        {order.shipping.city}, {order.shipping.state} {order.shipping.zip}
                      </p>
                      <p className="text-muted-foreground">{order.shipping.country}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Buyer Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">{order.buyer}</p>
                        <p className="text-sm text-muted-foreground">{order.email}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Actions & Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${order.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Platform Fee</span>
                    <span className="font-medium">$29.90</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t">
                    <span className="font-bold">Your Earnings</span>
                    <span className="font-bold text-primary">${(order.amount * 0.9).toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {order.status === "Pending" && (
                    <>
                      <Button className="w-full bg-gradient-hero border-0">
                        <Check className="mr-2 w-4 h-4" />
                        Accept Order
                      </Button>
                      <Button variant="outline" className="w-full">
                        Decline Order
                      </Button>
                    </>
                  )}
                  {order.status === "Processing" && (
                    <Button className="w-full bg-gradient-hero border-0">
                        <Truck className="mr-2 w-4 h-4" />
                        Mark as Shipped
                      </Button>
                  )}
                  <Button variant="outline" className="w-full">
                    Download Artwork
                  </Button>
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

export default OrderDetailsPage;

