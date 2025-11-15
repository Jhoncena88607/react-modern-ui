import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";

interface TokenInfoViewProps {
  onBack: () => void;
}

export const TokenInfoView = ({ onBack }: TokenInfoViewProps) => {
  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={onBack}>
        ← Back to Settings
      </Button>
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Token info</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Token info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name <span className="text-destructive">*</span></Label>
                <Input id="name" defaultValue="Sample token" />
                <p className="text-xs text-muted-foreground">Name is not editable after the token is deployed.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="symbol">Symbol <span className="text-destructive">*</span></Label>
                <Input id="symbol" defaultValue="SMP" />
                <p className="text-xs text-muted-foreground">Symbol is not editable after the token is deployed.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="decimals">Decimals <span className="text-destructive">*</span></Label>
                <Input id="decimals" type="number" defaultValue="2" />
                <p className="text-xs text-muted-foreground">Decimals is not editable after the token is deployed.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="network">Network <span className="text-destructive">*</span></Label>
                <Select defaultValue="polygon">
                  <SelectTrigger id="network">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="polygon">Polygon</SelectItem>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="bsc">BSC</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">Network is not editable after the token is deployed.</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Token logo <span className="text-destructive">*</span></Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-2">
                <Upload className="w-10 h-10 mx-auto text-muted-foreground" />
                <div>
                  <p className="text-sm text-primary cursor-pointer hover:underline">Drag and drop your image here</p>
                  <p className="text-xs text-muted-foreground">or click to browse your files</p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">tokenlogo.png 86.79KB</p>
              </div>
              <p className="text-xs text-muted-foreground">Token logo should be a square and should be at least 1250×1250 px</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="instrument">Instrument type <span className="text-destructive">*</span></Label>
                <Select defaultValue="fund">
                  <SelectTrigger id="instrument">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fund">Fund</SelectItem>
                    <SelectItem value="equity">Equity</SelectItem>
                    <SelectItem value="debt">Debt</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Base currency <span className="text-destructive">*</span></Label>
                <Select defaultValue="eur">
                  <SelectTrigger id="currency">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="gbp">GBP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full">Save changes</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
