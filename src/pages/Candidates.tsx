import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, Filter, Download, User, CheckCircle, XCircle, Clock } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface Candidate {
  id: string;
  status: string;
  name: string;
  email: string;
  kyc: string;
  type: string;
  residence: string;
  currentSection: string;
}

const mockCandidates: Candidate[] = [
  { id: "1", status: "Pending", name: "a", email: "a...il.com", kyc: "Approved", type: "Individual", residence: "FRA", currentSection: "-" },
  { id: "2", status: "Registered", name: "T", email: "to...om", kyc: "Not checked", type: "Individual", residence: "LUX", currentSection: "Upload documents" },
  { id: "3", status: "Registered", name: "A", email: "o...ail.com", kyc: "Not checked", type: "Individual", residence: "FRA", currentSection: "Wallet address" },
  { id: "4", status: "Registered", name: "A", email: "a...email.com", kyc: "Not checked", type: "Individual", residence: "GBR", currentSection: "Identity verification (Onfi..." },
  { id: "5", status: "Registered", name: "D", email: "d...keny.com", kyc: "Not checked", type: "Individual", residence: "CZE", currentSection: "Wallet address" },
  { id: "6", status: "Registered", name: "-", email: "g...n@tokeny.com", kyc: "Not checked", type: "Individual", residence: "LUX", currentSection: "Main information" },
  { id: "7", status: "Qualified", name: "H", email: "h", kyc: "Approved", type: "Individual", residence: "FRA", currentSection: "-" },
  { id: "8", status: "Registered", name: "G", email: "g...om", kyc: "Not checked", type: "Individual", residence: "LUX", currentSection: "Wallet address" },
  { id: "9", status: "Qualified", name: "D", email: "d...keny.com", kyc: "Approved", type: "Individual", residence: "CZE", currentSection: "-" },
];

export default function Candidates() {
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleCandidate = (id: string) => {
    setSelectedCandidates(prev =>
      prev.includes(id) ? prev.filter(cid => cid !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedCandidates.length === mockCandidates.length) {
      setSelectedCandidates([]);
    } else {
      setSelectedCandidates(mockCandidates.map(c => c.id));
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "outline"; icon: any }> = {
      Pending: { variant: "outline", icon: Clock },
      Registered: { variant: "secondary", icon: Clock },
      Qualified: { variant: "default", icon: CheckCircle },
    };
    const config = variants[status] || variants.Registered;
    const Icon = config.icon;
    return (
      <Badge variant={config.variant} className="gap-1">
        <Icon className="w-3 h-3" />
        {status}
      </Badge>
    );
  };

  const getKYCBadge = (kyc: string) => {
    if (kyc === "Approved") {
      return (
        <Badge variant="default" className="gap-1 bg-green-500/10 text-green-700 hover:bg-green-500/20 border-green-500/20">
          <CheckCircle className="w-3 h-3" />
          {kyc}
        </Badge>
      );
    }
    return (
      <Badge variant="outline" className="gap-1">
        <Clock className="w-3 h-3" />
        {kyc}
      </Badge>
    );
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">Candidates</h1>
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
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedCandidates.length === mockCandidates.length}
                      onCheckedChange={toggleAll}
                    />
                  </TableHead>
                  <TableHead className="w-12"></TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>E-Mail</TableHead>
                  <TableHead>KYC</TableHead>
                  <TableHead>Investor Type</TableHead>
                  <TableHead>Residence</TableHead>
                  <TableHead>Current Section</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockCandidates.map((candidate) => (
                  <TableRow key={candidate.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedCandidates.includes(candidate.id)}
                        onCheckedChange={() => toggleCandidate(candidate.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                    <TableCell>{getStatusBadge(candidate.status)}</TableCell>
                    <TableCell className="font-medium">{candidate.name}</TableCell>
                    <TableCell className="text-muted-foreground">{candidate.email}</TableCell>
                    <TableCell>{getKYCBadge(candidate.kyc)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        {candidate.type}
                      </div>
                    </TableCell>
                    <TableCell>{candidate.residence}</TableCell>
                    <TableCell className="text-muted-foreground">{candidate.currentSection}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            {mockCandidates.length} items
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Items per page</span>
              <Select value={itemsPerPage.toString()} onValueChange={(v) => setItemsPerPage(Number(v))}>
                <SelectTrigger className="w-20">
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
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                « Prev
              </Button>
              <span className="text-sm">{currentPage}</span>
              <Button variant="outline" size="sm" disabled>
                Next »
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
