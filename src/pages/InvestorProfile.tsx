import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Copy, User, Wallet, Receipt } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function InvestorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("profile");

  // Mock data - replace with actual data fetching
  const investor = {
    id: id || "1",
    name: "Project 17",
    wallet: "0x605424E652...",
    fullWallet: "0x605424E652A1B2C3D4E5F6A7B8C9D0E1F2A3B4C5",
    balance: "749",
    type: "Institution",
    tradeName: "",
    legalName: "",
    registryNumber: "",
    registryCountry: "LUX",
    sector: "Finance",
    incorporationDate: "",
    legalForm: "Sarl",
    country: "LUX",
    city: "Luxembourg",
    street: "",
    buildingNumber: "",
    state: "-",
    zipCode: "3456",
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Wallet address copied successfully",
    });
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <Button
        variant="ghost"
        onClick={() => navigate("/investors")}
        className="mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {investor.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <h1 className="text-2xl font-semibold">{investor.name}</h1>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">{investor.wallet}</span>
                  <span className="text-muted-foreground">{investor.balance}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => copyToClipboard(investor.fullWallet)}
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">
                    <User className="w-3 h-3 mr-1" />
                    Tokenholder
                  </Badge>
                </div>
              </div>
              <Button className="w-full md:w-auto">
                Token recovery
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="profile">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="wallet">
              <Wallet className="w-4 h-4 mr-2" />
              Wallet
            </TabsTrigger>
            <TabsTrigger value="transactions">
              <Receipt className="w-4 h-4 mr-2" />
              Transactions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Trade name */}
                  <div>
                    <label className="text-sm text-muted-foreground">Trade name</label>
                    <div className="mt-1 p-3 bg-muted/50 rounded-md min-h-[40px]">
                      {investor.tradeName || "-"}
                    </div>
                  </div>

                  {/* Legal name */}
                  <div>
                    <label className="text-sm text-muted-foreground">Legal name</label>
                    <div className="mt-1 p-3 bg-muted/50 rounded-md min-h-[40px]">
                      {investor.legalName || "-"}
                    </div>
                  </div>

                  {/* Type of investor */}
                  <div className="md:col-span-1 md:row-span-3">
                    <label className="text-sm text-muted-foreground">Type of investor</label>
                    <div className="mt-1 p-3 bg-muted/50 rounded-md flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {investor.type}
                    </div>
                  </div>

                  {/* Registry number */}
                  <div>
                    <label className="text-sm text-muted-foreground">Registry number</label>
                    <div className="mt-1 p-3 bg-muted/50 rounded-md min-h-[40px]">
                      {investor.registryNumber || "-"}
                    </div>
                  </div>

                  {/* Registry country */}
                  <div>
                    <label className="text-sm text-muted-foreground">Registry country</label>
                    <div className="mt-1 p-3 bg-muted/50 rounded-md">
                      {investor.registryCountry}
                    </div>
                  </div>

                  {/* Sector of activity */}
                  <div>
                    <label className="text-sm text-muted-foreground">Sector of activity</label>
                    <div className="mt-1 p-3 bg-muted/50 rounded-md">
                      {investor.sector}
                    </div>
                  </div>

                  {/* Incorporation date */}
                  <div>
                    <label className="text-sm text-muted-foreground">Incorporation date</label>
                    <div className="mt-1 p-3 bg-muted/50 rounded-md min-h-[40px]">
                      {investor.incorporationDate || "-"}
                    </div>
                  </div>

                  {/* Legal form */}
                  <div>
                    <label className="text-sm text-muted-foreground">Legal form</label>
                    <div className="mt-1 p-3 bg-muted/50 rounded-md">
                      {investor.legalForm}
                    </div>
                  </div>

                  {/* Country of residence */}
                  <div>
                    <label className="text-sm text-muted-foreground">Country of residence</label>
                    <div className="mt-1 p-3 bg-muted/50 rounded-md">
                      {investor.country}
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <label className="text-sm text-muted-foreground">City</label>
                    <div className="mt-1 p-3 bg-muted/50 rounded-md">
                      {investor.city}
                    </div>
                  </div>

                  {/* Street */}
                  <div>
                    <label className="text-sm text-muted-foreground">Street</label>
                    <div className="mt-1 p-3 bg-muted/50 rounded-md min-h-[40px]">
                      {investor.street || "-"}
                    </div>
                  </div>

                  {/* Building number */}
                  <div>
                    <label className="text-sm text-muted-foreground">Building number</label>
                    <div className="mt-1 p-3 bg-muted/50 rounded-md min-h-[40px]">
                      {investor.buildingNumber || "-"}
                    </div>
                  </div>

                  {/* State */}
                  <div>
                    <label className="text-sm text-muted-foreground">State</label>
                    <div className="mt-1 p-3 bg-muted/50 rounded-md">
                      {investor.state}
                    </div>
                  </div>

                  {/* Zip code */}
                  <div>
                    <label className="text-sm text-muted-foreground">Zip code</label>
                    <div className="mt-1 p-3 bg-muted/50 rounded-md">
                      {investor.zipCode}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wallet" className="mt-6">
            <Card>
              <CardContent className="p-6 text-center py-12">
                <Wallet className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Wallet information will be displayed here</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions" className="mt-6">
            <Card>
              <CardContent className="p-6 text-center py-12">
                <Receipt className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Transaction history will be displayed here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
