import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Dashboard from "./pages/Dashboard";
import Agents from "./pages/Agents";
import TokenActions from "./pages/TokenActions";
import Transactions from "./pages/Transactions";
import InvestorList from "./pages/InvestorList";
import InvestorProfile from "./pages/InvestorProfile";
import Candidates from "./pages/Candidates";
import PositionReports from "./pages/PositionReports";
import Requests from "./pages/Requests";
import PrimaryMarketSubscriptionOrders from "./pages/PrimaryMarketSubscriptionOrders";
import PrimaryMarketRedemptionOrders from "./pages/PrimaryMarketRedemptionOrders";
import SecondaryMarketBillboardSettings from "./pages/SecondaryMarketBillboardSettings";
import SecondaryMarketBillboardOffers from "./pages/SecondaryMarketBillboardOffers";
import SecondaryMarketCEX from "./pages/SecondaryMarketCEX";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-background">
            <AppSidebar />
            <div className="flex-1 flex flex-col min-w-0">
              <header className="h-14 border-b border-border flex items-center px-4 bg-card sticky top-0 z-10">
                <SidebarTrigger />
              </header>
              <main className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/agents" element={<Agents />} />
                  <Route path="/token-actions" element={<TokenActions />} />
                  <Route path="/transactions" element={<Transactions />} />
                  <Route path="/investors" element={<InvestorList />} />
                  <Route path="/investors/:id" element={<InvestorProfile />} />
                  <Route path="/investors/candidates" element={<Candidates />} />
                  <Route path="/investors/position-reports" element={<PositionReports />} />
                  <Route path="/investors/requests" element={<Requests />} />
                  <Route path="/primary-market/subscription-orders" element={<PrimaryMarketSubscriptionOrders />} />
                  <Route path="/primary-market/redemption-orders" element={<PrimaryMarketRedemptionOrders />} />
                  <Route path="/secondary-market/billboard-settings" element={<SecondaryMarketBillboardSettings />} />
                  <Route path="/secondary-market/billboard-offers" element={<SecondaryMarketBillboardOffers />} />
                  <Route path="/secondary-market/cex" element={<SecondaryMarketCEX />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
