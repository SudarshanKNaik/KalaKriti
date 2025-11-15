import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw, Clock, CheckCircle } from "lucide-react";

const ReturnsPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Returns & Refunds Policy</h1>
            <p className="text-muted-foreground">Our policy on returns and refunds</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20 flex-shrink-0">
                    <RefreshCw className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Digital Artworks</h2>
                    <p className="text-muted-foreground mb-4">
                      Due to the digital nature of our products, digital artwork purchases are final and non-refundable. 
                      However, if you experience technical issues with your download, please contact our support team 
                      and we'll be happy to help.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Physical Prints</h2>
                    <p className="text-muted-foreground mb-4">
                      We accept returns for physical prints within 14 days of delivery if the item is damaged, 
                      defective, or significantly different from the description.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Items must be in original condition</li>
                      <li>Return shipping costs are the responsibility of the buyer</li>
                      <li>Refunds will be processed within 5-7 business days</li>
                    </ul>
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
                    <h2 className="text-2xl font-bold mb-3">Refund Process</h2>
                    <p className="text-muted-foreground mb-4">
                      To initiate a return or refund:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Contact our support team within the return period</li>
                      <li>Provide your order number and reason for return</li>
                      <li>We'll review your request and provide return instructions if approved</li>
                      <li>Once we receive the item, we'll process your refund</li>
                    </ol>
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

export default ReturnsPolicyPage;

