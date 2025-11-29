import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, HelpCircle } from "lucide-react";

const HelpCenterPage = () => {
  const categories = [
    {
      title: "Getting Started",
      faqs: [
        { q: "How do I create an account?", a: "Click on the 'Sign Up' button and fill in your details. You can choose to join as an artist, buyer, or both." },
        { q: "How do I upload my first artwork?", a: "Go to your artist dashboard and click 'Upload Artwork'. Fill in the details and upload your images." },
        { q: "What file formats are supported?", a: "We support PNG, JPG, GIF, and SVG formats up to 10MB each." },
      ],
    },
    {
      title: "Buying Art",
      faqs: [
        { q: "How do I purchase an artwork?", a: "Browse the gallery, click on an artwork you like, and click 'Add to Cart'. Proceed to checkout when ready." },
        { q: "What payment methods are accepted?", a: "We accept credit/debit cards and PayPal." },
        { q: "How long does delivery take?", a: "Digital artworks are delivered instantly via email. Physical prints take 5-7 business days." },
      ],
    },
    {
      title: "Selling Art",
      faqs: [
        { q: "How do I set my artwork price?", a: "When uploading, you can set your price. You can also edit it later from your artworks page." },
        { q: "What commission does the platform take?", a: "We take a 10% commission on each sale." },
        { q: "When do I get paid?", a: "Earnings are available for payout 7 days after delivery. Payouts are processed within 3-5 business days." },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Help{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Center
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search for help..." className="pl-10 h-12" />
            </div>
          </div>

          <div className="space-y-6">
            {categories.map((category, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                        <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenterPage;



