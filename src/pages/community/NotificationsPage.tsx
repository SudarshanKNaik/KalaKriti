import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Heart, UserPlus, MessageSquare, Star, Check } from "lucide-react";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "like", message: "John Doe liked your artwork 'Digital Dreams'", time: "2 hours ago", read: false },
    { id: 2, type: "follow", message: "Jane Smith started following you", time: "5 hours ago", read: false },
    { id: 3, type: "comment", message: "Mike Johnson commented on your artwork", time: "1 day ago", read: true },
    { id: 4, type: "rating", message: "Sarah Lee gave your artwork a 5-star rating", time: "2 days ago", read: true },
    { id: 5, type: "sale", message: "Your artwork 'Abstract Flow' was purchased", time: "3 days ago", read: true },
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="w-5 h-5 text-red-500" />;
      case "follow":
        return <UserPlus className="w-5 h-5 text-blue-500" />;
      case "comment":
        return <MessageSquare className="w-5 h-5 text-green-500" />;
      case "rating":
        return <Star className="w-5 h-5 text-yellow-500" />;
      default:
        return <Bell className="w-5 h-5 text-primary" />;
    }
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Notifications</h1>
              <p className="text-muted-foreground">
                {notifications.filter((n) => !n.read).length} unread notifications
              </p>
            </div>
            <Button variant="outline">
              <Check className="mr-2 w-4 h-4" />
              Mark all as read
            </Button>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <Card
                key={notification.id}
                className={!notification.read ? "border-primary/50 bg-primary/5" : ""}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20 flex-shrink-0">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium mb-1">{notification.message}</p>
                      <p className="text-sm text-muted-foreground">{notification.time}</p>
                    </div>
                    {!notification.read && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <Check className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
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

export default NotificationsPage;

