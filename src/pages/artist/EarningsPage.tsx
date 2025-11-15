import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, TrendingUp, Download, Calendar } from "lucide-react";

const EarningsPage = () => {
  const earnings = {
    total: 12450,
    pending: 1250,
    available: 11200,
    thisMonth: 3450,
    lastMonth: 2890,
  };

  const transactions = [
    { id: 1, date: "2024-01-15", type: "Sale", artwork: "Digital Dreams", amount: 299, status: "Completed" },
    { id: 2, date: "2024-01-14", type: "Sale", artwork: "Abstract Flow", amount: 450, status: "Completed" },
    { id: 3, date: "2024-01-13", type: "Sale", artwork: "Neon Nights", amount: 199, status: "Pending" },
    { id: 4, date: "2024-01-12", type: "Payout", artwork: "-", amount: -1000, status: "Completed" },
    { id: 5, date: "2024-01-10", type: "Sale", artwork: "Cosmic Waves", amount: 350, status: "Completed" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Earnings</h1>
            <p className="text-muted-foreground">Track your revenue and payouts</p>
          </div>

          {/* Earnings Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Earnings</p>
                    <p className="text-3xl font-bold">${earnings.total.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20">
                    <DollarSign className="w-6 h-6 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Available</p>
                    <p className="text-3xl font-bold">${earnings.available.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20">
                    <TrendingUp className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Pending</p>
                    <p className="text-3xl font-bold">${earnings.pending.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20">
                    <Calendar className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">This Month</p>
                    <p className="text-3xl font-bold">${earnings.thisMonth.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center opacity-20">
                    <TrendingUp className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Transactions */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              transaction.type === "Sale" ? "bg-green-100" : "bg-blue-100"
                            }`}>
                              <DollarSign className={`w-5 h-5 ${
                                transaction.type === "Sale" ? "text-green-600" : "text-blue-600"
                              }`} />
                            </div>
                            <div>
                              <p className="font-medium">{transaction.type}</p>
                              <p className="text-sm text-muted-foreground">{transaction.artwork}</p>
                              <p className="text-xs text-muted-foreground">{transaction.date}</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold text-lg ${
                            transaction.amount > 0 ? "text-green-600" : "text-blue-600"
                          }`}>
                            {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount)}
                          </p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            transaction.status === "Completed" 
                              ? "bg-green-100 text-green-700" 
                              : "bg-yellow-100 text-yellow-700"
                          }`}>
                            {transaction.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payout */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Request Payout</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Available Balance</p>
                    <p className="text-3xl font-bold text-primary">${earnings.available.toLocaleString()}</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Amount</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border rounded-lg"
                      placeholder="Enter amount"
                      max={earnings.available}
                    />
                  </div>
                  <Button className="w-full bg-gradient-hero border-0">
                    <Download className="mr-2 w-4 h-4" />
                    Request Payout
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Payouts are processed within 3-5 business days
                  </p>
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

export default EarningsPage;

