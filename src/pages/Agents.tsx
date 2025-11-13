import { Copy, Trash2, UserPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const agents = [
  { email: "t@tokeny.com", permission: "Agent", wallet: "0x80f6D78D532755d53...e0C" },
  { email: "tokeny.com", permission: "Agent", wallet: "0x4dfFE6afBDd58E8CB...2E0" },
  { email: "okeny.com", permission: "Agent", wallet: "0x0bf10Cf31cb1022689...594" },
  { email: "@tokeny.com", permission: "Agent", wallet: "0x7bEC0210SD08E6ee3...c7b" },
  { email: "okeny.com", permission: "Agent", wallet: "0x36B764ED2d3d8c39A...2b2" },
  { email: "tokeny.com", permission: "Agent", wallet: "0x95d98e0067BDf31C...453" },
  { email: "nt@tokeny.com", permission: "Agent", wallet: "0x8eCd2d2a85E7a88d0...e90" },
  { email: "@tokeny.com", permission: "Agent", wallet: "0x19a6de871851B0836...3a6" },
  { email: "nt@tokeny.com", permission: "Agent", wallet: "0x58C203FDA5B277ed...0c0" },
  { email: "tokeny.com", permission: "Agent", wallet: "0xd1e1e9d793C78ba89...d1E" },
  { email: "otokeny.com", permission: "Owner", wallet: "0x0CC5c52AF4b2D16A...f14" },
];

export default function Agents() {
  return (
    <div className="p-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="outline" className="gap-1">
                <Copy className="h-3 w-3" />
                0x5BC...0c0
              </Badge>
              <Badge variant="secondary">Agent</Badge>
            </div>
            <CardTitle className="text-2xl">Agents</CardTitle>
          </div>
          <Button className="gap-2">
            <UserPlus className="h-4 w-4" />
            Add Agent
          </Button>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Actions</TableHead>
                  <TableHead>Permission</TableHead>
                  <TableHead>E-Mail</TableHead>
                  <TableHead>Wallet</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agents.map((agent, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Badge variant={agent.permission === "Owner" ? "default" : "secondary"}>
                        {agent.permission}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{agent.email}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <code className="text-xs text-primary">{agent.wallet}</code>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
