import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

const VerifyEmailPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <Card className="max-w-md mx-auto shadow-medium">
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold">
                Verify Your Email
              </CardTitle>
              <CardDescription>
                We've sent a verification link to your email address. Please check your inbox and click the link to verify your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                <p className="font-medium mb-2">Didn't receive the email?</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Check your spam folder</li>
                  <li>Make sure the email address is correct</li>
                  <li>Wait a few minutes and try again</li>
                </ul>
              </div>
              <Button className="w-full bg-gradient-hero border-0 hover:opacity-90 transition-opacity">
                Resend Verification Email
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Link to="/login">
                <Button variant="ghost" className="w-full">
                  Back to Sign In
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VerifyEmailPage;


