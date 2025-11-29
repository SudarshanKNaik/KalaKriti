import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Search } from "lucide-react";

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");

  const chats = [
    { id: 1, name: "Sarah Chen", lastMessage: "Thank you for the artwork!", time: "2 hours ago", unread: 2 },
    { id: 2, name: "Marcus Lee", lastMessage: "I love your style!", time: "1 day ago", unread: 0 },
    { id: 3, name: "Emma Wilson", lastMessage: "Can you create a custom piece?", time: "2 days ago", unread: 1 },
  ];

  const messages = [
    { id: 1, sender: "Sarah Chen", text: "Hi! I'm interested in your artwork.", time: "10:30 AM", isMe: false },
    { id: 2, sender: "You", text: "Hello! Thank you for your interest.", time: "10:35 AM", isMe: true },
    { id: 3, sender: "Sarah Chen", text: "Thank you for the artwork!", time: "11:00 AM", isMe: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Messages</h1>
            <p className="text-muted-foreground">Communicate with artists and buyers</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chat List */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-0">
                  <div className="p-4 border-b">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search conversations..." className="pl-10" />
                    </div>
                  </div>
                  <div className="divide-y">
                    {chats.map((chat) => (
                      <div
                        key={chat.id}
                        onClick={() => setSelectedChat(chat.id)}
                        className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                          selectedChat === chat.id ? "bg-muted" : ""
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-hero rounded-full"></div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <p className="font-medium truncate">{chat.name}</p>
                              {chat.unread > 0 && (
                                <span className="w-5 h-5 bg-primary text-white rounded-full text-xs flex items-center justify-center">
                                  {chat.unread}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                            <p className="text-xs text-muted-foreground mt-1">{chat.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Window */}
            <div className="lg:col-span-2">
              <Card className="h-[600px] flex flex-col">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="p-4 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-hero rounded-full"></div>
                      <div>
                        <p className="font-medium">{chats.find((c) => c.id === selectedChat)?.name}</p>
                        <p className="text-xs text-muted-foreground">Online</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`max-w-[70%] ${msg.isMe ? "bg-gradient-hero text-white" : "bg-muted"} rounded-lg p-3`}>
                          <p className="text-sm">{msg.text}</p>
                          <p className={`text-xs mt-1 ${msg.isMe ? "text-white/70" : "text-muted-foreground"}`}>
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1"
                      />
                      <Button className="bg-gradient-hero border-0">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
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

export default MessagesPage;



