import { Eye, ArrowRight } from "lucide-react";
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

const mockOffers = [
  { 
    id: 1, 
    status: "Active", 
    quantityToSell: "1", 
    tokenToSell: "USDC", 
    quantityToBuy: "10", 
    tokenToBuy: "USP", 
    price: "USP 1 = USDC 0.1", 
    expiration: "30 Nov 2024, 09:24:18",
    typeOfInvestor: "-"
  },
];

export default function SecondaryMarketBillboardOffers() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Offers</h1>

        <div className="rounded-lg border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Actions</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Quantity To Sell</TableHead>
                <TableHead>Token To Sell</TableHead>
                <TableHead></TableHead>
                <TableHead>Quantity To Buy</TableHead>
                <TableHead>Token To Buy</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Expiration</TableHead>
                <TableHead>Type Of Investor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockOffers.map((offer) => (
                <TableRow key={offer.id}>
                  <TableCell>
                    <div className="flex gap-2">
                      <Eye className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
                      <Button size="sm" variant="destructive" className="h-7 px-3">
                        Deactivate
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      {offer.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span>{offer.quantityToSell}</span>
                      <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                        <span className="text-muted-foreground">📋</span>
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="w-5 h-5 bg-blue-500">
                        <AvatarFallback className="text-xs text-white">U</AvatarFallback>
                      </Avatar>
                      {offer.tokenToSell}
                    </div>
                  </TableCell>
                  <TableCell>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span>{offer.quantityToBuy}</span>
                      <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                        <span className="text-muted-foreground">📋</span>
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="w-5 h-5 bg-orange-500">
                        <AvatarFallback className="text-xs text-white">U</AvatarFallback>
                      </Avatar>
                      {offer.tokenToBuy}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{offer.price}</TableCell>
                  <TableCell className="text-muted-foreground">{offer.expiration}</TableCell>
                  <TableCell className="text-muted-foreground">{offer.typeOfInvestor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">1 item</p>
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
