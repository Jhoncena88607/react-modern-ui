import { useState } from "react";
import { Filter, Download, CheckCircle, XCircle, AlertCircle, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Transaction = {
  id: string;
  status: "confirmed" | "pending" | "failed";
  type: "mint" | "burn" | "block" | "unblock" | "transfer";
  dateTime: string;
  sender: string;
  recipient: string;
  amount: number;
  senderBalance: number | null;
  senderBlockStatus: number | null;
};

const mockTransactions: Transaction[] = [
  { id: "1", status: "confirmed", type: "mint", dateTime: "9 May 2024, 14:32:18", sender: "-", recipient: "0x58c...0c0", amount: 5.07, senderBalance: null, senderBlockStatus: null },
  { id: "2", status: "confirmed", type: "mint", dateTime: "9 May 2024, 14:32:18", sender: "-", recipient: "0x38...1b", amount: 4000, senderBalance: null, senderBlockStatus: null },
  { id: "3", status: "confirmed", type: "block", dateTime: "22 Apr 2024, 14:48:27", sender: "-", recipient: "0x5c...15", amount: 223.08, senderBalance: null, senderBlockStatus: null },
  { id: "4", status: "confirmed", type: "unblock", dateTime: "22 Apr 2024, 14:48:21", sender: "0x5c...12", recipient: "-", amount: 223.08, senderBalance: null, senderBlockStatus: null },
  { id: "5", status: "confirmed", type: "transfer", dateTime: "22 Apr 2024, 14:48:21", sender: "0x9187C59438A...792", recipient: "0x5c...15", amount: 466.16, senderBalance: 0, senderBlockStatus: 0 },
  { id: "6", status: "confirmed", type: "block", dateTime: "18 Apr 2024, 09:56:56", sender: "0x5c...12", recipient: "-", amount: 223.08, senderBalance: null, senderBlockStatus: null },
];

export default function Transactions() {
  const [itemsPerPage, setItemsPerPage] = useState("50");
  const [currentPage, setCurrentPage] = useState(1);

  const getStatusIcon = (status: string) => {
    if (status === "confirmed") return <CheckCircle className="w-4 h-4 text-success" />;
    if (status === "pending") return <AlertCircle className="w-4 h-4 text-warning" />;
    return <XCircle className="w-4 h-4 text-destructive" />;
  };

  const getTypeIcon = (type: string) => {
    const iconClass = "w-4 h-4";
    if (type === "mint") return <CheckCircle className={`${iconClass} text-success`} />;
    if (type === "burn") return <XCircle className={`${iconClass} text-destructive`} />;
    if (type === "block") return <XCircle className={`${iconClass} text-destructive`} />;
    if (type === "unblock") return <CheckCircle className={`${iconClass} text-success`} />;
    return <AlertCircle className={`${iconClass} text-primary`} />;
  };

  const getTypeColor = (type: string) => {
    if (type === "mint" || type === "unblock") return "text-success";
    if (type === "burn" || type === "block") return "text-destructive";
    return "text-primary";
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Transactions</h1>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Badge variant="outline" className="font-mono">0x58C...0c0</Badge>
          <Badge variant="secondary">Agent</Badge>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[100px]">Status</TableHead>
                <TableHead className="min-w-[100px]">Type</TableHead>
                <TableHead className="min-w-[150px]">Date And Time</TableHead>
                <TableHead className="min-w-[150px]">Sender</TableHead>
                <TableHead className="min-w-[150px]">Recipient</TableHead>
                <TableHead className="min-w-[100px] text-right">Amount</TableHead>
                <TableHead className="min-w-[120px] text-right">Sender Balance</TableHead>
                <TableHead className="min-w-[120px] text-right">Sender Block/Unbl</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(transaction.status)}
                      <span className="capitalize text-sm">{transaction.status}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getTypeIcon(transaction.type)}
                      <span className={`capitalize text-sm ${getTypeColor(transaction.type)}`}>
                        {transaction.type}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{transaction.dateTime}</TableCell>
                  <TableCell>
                    {transaction.sender !== "-" ? (
                      <div className="flex items-center gap-2">
                        <span className="text-primary text-sm font-mono">{transaction.sender}</span>
                        <button
                          onClick={() => copyToClipboard(transaction.sender)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-sm">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {transaction.recipient !== "-" ? (
                      <div className="flex items-center gap-1">
                        <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold">
                          {transaction.recipient.charAt(2).toUpperCase()}
                        </div>
                        <span className="text-primary text-sm font-mono">{transaction.recipient}</span>
                        <button
                          onClick={() => copyToClipboard(transaction.recipient)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-sm">-</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-sm">{transaction.amount.toLocaleString()}</span>
                      <button
                        onClick={() => copyToClipboard(transaction.amount.toString())}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="text-right text-sm">
                    {transaction.senderBalance !== null ? transaction.senderBalance : "-"}
                    {transaction.senderBalance !== null && (
                      <button
                        onClick={() => copyToClipboard(transaction.senderBalance?.toString() || "")}
                        className="ml-2 text-muted-foreground hover:text-foreground"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    {transaction.senderBlockStatus !== null ? (
                      <span className={`text-sm ${transaction.senderBlockStatus === 0 ? "text-destructive" : ""}`}>
                        {transaction.senderBlockStatus}
                      </span>
                    ) : (
                      <span className="text-sm">-</span>
                    )}
                    {transaction.senderBlockStatus !== null && (
                      <button
                        onClick={() => copyToClipboard(transaction.senderBlockStatus?.toString() || "")}
                        className="ml-2 text-muted-foreground hover:text-foreground"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          22 items
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Items per page:</span>
            <Select value={itemsPerPage} onValueChange={setItemsPerPage}>
              <SelectTrigger className="w-[70px] h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8" disabled>
              «
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" disabled>
              ‹
            </Button>
            <Button variant="ghost" size="sm" className="h-8 min-w-[32px]">
              1
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              ›
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              »
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
