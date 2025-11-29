import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Truck, Clock, Globe } from "lucide-react";

const ShippingInfoPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Shipping Information</h1>
            <p className="text-muted-foreground">Everything you need to know about delivery</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20 flex-shrink-0">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Digital Artworks</h2>
                    <p className="text-muted-foreground mb-4">
                      Digital artworks are delivered instantly via email after purchase. You'll receive a download link 
                      that remains active for 30 days. Files are provided in high-resolution formats suitable for printing.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Instant delivery via email</li>
                      <li>High-resolution files included</li>
                      <li>Download link valid for 30 days</li>
                      <li>Multiple format options available</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20 flex-shrink-0">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Physical Prints</h2>
                    <p className="text-muted-foreground mb-4">
                      Physical prints are shipped within 3-5 business days after order confirmation. We use trusted 
                      shipping partners to ensure safe delivery.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="font-medium mb-2">Standard Shipping</p>
                        <p className="text-muted-foreground text-sm">5-7 business days - Free</p>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Express Shipping</p>
                        <p className="text-muted-foreground text-sm">2-3 business days - $15</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20 flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">International Shipping</h2>
                    <p className="text-muted-foreground mb-4">
                      We ship to over 150 countries worldwide. International orders may take 10-15 business days 
                      and may be subject to customs fees.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20 flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Tracking Your Order</h2>
                    <p className="text-muted-foreground">
                      Once your order ships, you'll receive a tracking number via email. You can track your order 
                      status from your account dashboard.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingInfoPage;



