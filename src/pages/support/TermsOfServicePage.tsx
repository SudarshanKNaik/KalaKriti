import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-muted-foreground">Last updated: January 15, 2024</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using KalaKriti, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to these terms, please do not use our service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
                <p className="text-muted-foreground mb-4">
                  When you create an account, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Content and Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  Artists retain all rights to their original artwork. By uploading content, you grant 
                  KalaKriti a license to display, distribute, and promote your content on the platform.
                </p>
                <p className="text-muted-foreground">
                  You may not upload content that infringes on others' intellectual property rights, 
                  contains illegal material, or violates any laws.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Transactions</h2>
                <p className="text-muted-foreground mb-4">
                  All sales are final unless otherwise stated. Buyers are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Providing accurate payment information</li>
                  <li>Understanding the license terms of purchased artworks</li>
                  <li>Respecting the artist's intellectual property rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Prohibited Activities</h2>
                <p className="text-muted-foreground mb-4">
                  You may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Use the platform for any illegal purpose</li>
                  <li>Upload malicious software or viruses</li>
                  <li>Impersonate others or provide false information</li>
                  <li>Interfere with the platform's operation</li>
                  <li>Harass, abuse, or harm other users</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to terminate or suspend your account at any time for violations 
                  of these terms or for any other reason we deem necessary.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about these Terms of Service, please contact us at legal@kalakriti.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;

