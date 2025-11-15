import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Check, X, Eye, Calendar } from "lucide-react";

const CommissionRequestsPage = () => {
  const requests = [
    {
      id: 1,
      buyer: "John Doe",
      title: "Custom Portrait",
      description: "I would like a custom portrait of my family in your style.",
      budget: "$500",
      deadline: "2024-02-15",
      status: "Pending",
      date: "2024-01-15",
    },
    {
      id: 2,
      buyer: "Jane Smith",
      title: "Logo Design",
      description: "Need a modern logo for my startup company.",
      budget: "$300",
      deadline: "2024-02-10",
      status: "Accepted",
      date: "2024-01-12",
    },
    {
      id: 3,
      buyer: "Mike Johnson",
      title: "Digital Artwork",
      description: "Looking for a unique digital artwork for my office.",
      budget: "$800",
      deadline: "2024-02-20",
      status: "Declined",
      date: "2024-01-10",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-700";
      case "Declined":
        return "bg-red-100 text-red-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
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
            <h1 className="text-4xl font-bold mb-2">Commission Requests</h1>
            <p className="text-muted-foreground">Manage custom commission inquiries from buyers</p>
          </div>

          <Tabs defaultValue="all" className="space-y-6">
            <TabsList>
              <TabsTrigger value="all">All Requests</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="accepted">Accepted</TabsTrigger>
              <TabsTrigger value="declined">Declined</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {requests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-lg">{request.title}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(request.status)}`}>
                            {request.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">From: {request.buyer}</p>
                        <p className="text-muted-foreground mb-3">{request.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>Budget: {request.budget}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>Deadline: {request.deadline}</span>
                          </div>
                          <span>Requested: {request.date}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link to={`/artist/commissions/${request.id}`}>
                          <Button variant="outline" size="icon">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                        {request.status === "Pending" && (
                          <>
                            <Button variant="outline" size="icon" className="text-green-600">
                              <Check className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="text-red-600">
                              <X className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {["pending", "accepted", "declined"].map((status) => (
              <TabsContent key={status} value={status} className="space-y-4">
                {requests.filter((r) => r.status.toLowerCase() === status).map((request) => (
                  <Card key={request.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold">{request.title}</h3>
                            <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(request.status)}`}>
                              {request.status}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">From: {request.buyer}</p>
                          <p className="text-muted-foreground mb-2">{request.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Budget: {request.budget}</span>
                            <span>Deadline: {request.deadline}</span>
                          </div>
                        </div>
                        <Link to={`/artist/commissions/${request.id}`}>
                          <Button variant="outline" size="icon">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
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

export default CommissionRequestsPage;

