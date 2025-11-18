import { Eye, Filter, Download, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Checkbox } from "@/components/ui/checkbox";

const mockOrders = [
  { id: 1, investor: "R", email: "mail.com", status: "Canceled by investor", date: "24 Jun", amount: "€137,373.74", hasActions: false },
  { id: 2, investor: "J", email: "mail.com", status: "Pending", date: "14 Jun", amount: "USDC 1,084,681.", hasActions: true },
  { id: 3, investor: "D", email: "tokeny.com", status: "Pending", date: "10 May", amount: "€303,030.31", hasActions: true },
  { id: 4, investor: "A", email: "tokeny.com", status: "Minted", date: "9 May", amount: "US$135,645.96", hasActions: false },
  { id: 5, investor: "A", email: "tokeny.com", status: "Minted", date: "9 May", amount: "USDC 135,640.20", hasActions: false },
  { id: 6, investor: "B", email: "@tokeny.com", status: "Minted", date: "9 May", amount: "€125,262.63", hasActions: false },
  { id: 7, investor: "B", email: "@tokeny.com", status: "Pending", date: "9 May", amount: "USDC 1,262,615.", hasActions: true },
  { id: 8, investor: "P", email: "mail.com", status: "Minted", date: "9 May", amount: "US$1,262,625.16", hasActions: false },
];

export default function PrimaryMarketSubscriptionOrders() {
  const getStatusColor = (status: string) => {
    if (status === "Canceled by investor") return "destructive";
    if (status === "Pending") return "default";
    if (status === "Minted") return "secondary";
    return "default";
  };

  const getStatusIcon = (status: string) => {
    if (status === "Canceled by investor") return "⊗";
    if (status === "Pending") return "○";
    if (status === "Minted") return "⊙";
    return "";
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Subscriptions Orders</h1>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>

        <div className="rounded-lg border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox />
                </TableHead>
                <TableHead className="w-12">○</TableHead>
                <TableHead>Actions</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Creation Date</TableHead>
                <TableHead>Investor</TableHead>
                <TableHead>E-Mail</TableHead>
                <TableHead className="text-right">Amount To Pay</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Eye className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
                  </TableCell>
                  <TableCell>
                    {order.hasActions && (
                      <div className="flex gap-2">
                        <Button size="sm" variant="default" className="bg-green-600 hover:bg-green-700 text-white">
                          <Check className="w-4 h-4 mr-1" />
                          Confirm
                        </Button>
                        <Button size="sm" variant="destructive">
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(order.status)} className="gap-1">
                      <span>{getStatusIcon(order.status)}</span>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{order.date}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6 bg-blue-500">
                        <AvatarFallback className="text-xs text-white">{order.investor}</AvatarFallback>
                      </Avatar>
                      {order.investor}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{order.email}</TableCell>
                  <TableCell className="text-right font-medium">{order.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">15 items</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Items per page</span>
              <select className="border rounded px-2 py-1 text-sm">
                <option>50</option>
                <option>100</option>
                <option>200</option>
              </select>
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <Button variant="outline" size="sm" disabled>«</Button>
                </PaginationItem>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
                <PaginationItem>
                  <Button variant="outline" size="sm">»</Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
