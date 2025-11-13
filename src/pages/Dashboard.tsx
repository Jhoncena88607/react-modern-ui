import { Building2, Copy, Pause, TrendingUp, Lock, Unlock } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  const investorsByType = [
    { type: "Natural", count: 3, color: "hsl(var(--chart-1))" },
    { type: "Legal", count: 2, color: "hsl(var(--chart-3))" },
    { type: "Other", count: 1, color: "hsl(var(--chart-4))" },
  ];

  const investorsByCountry = [
    { country: "Luxembourg", count: 4, percentage: 67 },
    { country: "United Kingdom", count: 1, percentage: 17 },
    { country: "Italy", count: 1, percentage: 17 },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
            <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">USP</h1>
            <p className="text-sm sm:text-base text-muted-foreground">UrbanSpace Properties</p>
          </div>
        </div>
        <Button className="gap-2 w-full sm:w-auto">
          Token actions
          <span className="ml-1">→</span>
        </Button>
      </div>

      {/* Token Address */}
      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Token Address</p>
              <div className="flex items-center gap-2">
                <code className="text-xs sm:text-sm text-primary font-mono flex-1 truncate">0x39eb88946F03B01B8d441fCd8a3E8f42649</code>
                <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Status</p>
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                  Active
                </Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Valuation</p>
                <p className="font-medium">-</p>
              </div>
              <Button variant="outline" className="gap-2 w-full sm:w-auto sm:ml-auto">
                <Pause className="h-4 w-4" />
                Pause token
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Circulating supply</p>
                <p className="text-xl sm:text-2xl font-semibold">130,463.33</p>
              </div>
              <div className="p-2 sm:p-3 rounded-lg bg-muted">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
              </div>
            </div>
            <Button variant="ghost" size="sm" className="w-full text-xs sm:text-sm">
              <Copy className="h-3 w-3 mr-2" />
              Copy
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Total unblocked</p>
                <p className="text-xl sm:text-2xl font-semibold">130,240.25</p>
              </div>
              <div className="p-2 sm:p-3 rounded-lg bg-success/10">
                <Unlock className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
              </div>
            </div>
            <Button variant="ghost" size="sm" className="w-full text-xs sm:text-sm">
              <Copy className="h-3 w-3 mr-2" />
              Copy
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Total blocked</p>
                <p className="text-xl sm:text-2xl font-semibold">233.08</p>
              </div>
              <div className="p-2 sm:p-3 rounded-lg bg-muted">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
              </div>
            </div>
            <Button variant="ghost" size="sm" className="w-full text-xs sm:text-sm">
              <Copy className="h-3 w-3 mr-2" />
              Copy
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Investors by Type */}
        <Card>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl">Investors by type</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-center py-6 sm:py-8">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  {investorsByType.map((item, index) => {
                    const total = investorsByType.reduce((sum, i) => sum + i.count, 0);
                    const percentage = (item.count / total) * 100;
                    const circumference = 2 * Math.PI * 40;
                    const offset = investorsByType
                      .slice(0, index)
                      .reduce((sum, i) => sum + (i.count / total) * 100, 0);
                    
                    return (
                      <circle
                        key={item.type}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="20"
                        strokeDasharray={`${(percentage / 100) * circumference} ${circumference}`}
                        strokeDashoffset={-((offset / 100) * circumference)}
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-2xl sm:text-3xl font-bold">6</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">investors</p>
                </div>
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
              {investorsByType.map((item) => (
                <div key={item.type} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-xs sm:text-sm">{item.type}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{item.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Investors by Country */}
        <Card>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl">Investors by country of residence</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-4 sm:space-y-6 py-2 sm:py-4">
              {investorsByCountry.map((item, index) => (
                <div key={item.country} className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="truncate pr-2">{index + 1}. {item.country}</span>
                    <span className="font-medium flex-shrink-0">{item.count}</span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
