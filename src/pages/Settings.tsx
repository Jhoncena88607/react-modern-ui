import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Coins, Settings as SettingsIcon, CheckCircle, Globe, Scale, ArrowLeftRight, Upload, Copy, Pencil, Trash2, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type SettingView = "main" | "token-info" | "token-ownership" | "identity-eligibility" | "jurisdictions" | "supply-rules" | "transfer-rules";

const Settings = () => {
  const [currentView, setCurrentView] = useState<SettingView>("main");
  const [identityEnabled, setIdentityEnabled] = useState(true);
  const [jurisdictionsEnabled, setJurisdictionsEnabled] = useState(false);
  const [supplyRulesEnabled, setSupplyRulesEnabled] = useState(false);
  const [transferRulesEnabled, setTransferRulesEnabled] = useState(false);

  const settingsOptions = [
    {
      id: "token-info",
      title: "Token info",
      description: "Manage token name, symbol, decimals, network, logo, base currency and instrument type.",
      icon: Coins,
      view: "token-info" as SettingView,
    },
    {
      id: "token-ownership",
      title: "Token Ownership",
      description: "Set the token owner wallet address that can manage token settings and token agents.",
      icon: SettingsIcon,
      view: "token-ownership" as SettingView,
    },
    {
      id: "identity-eligibility",
      title: "Identity eligibility",
      description: "Set required claims for the investors to be eligible to hold tokens.",
      icon: CheckCircle,
      view: "identity-eligibility" as SettingView,
      toggle: identityEnabled,
      onToggle: setIdentityEnabled,
    },
    {
      id: "jurisdictions",
      title: "Jurisdictions",
      description: "Restrict the circulation of tokens in certain countries. Transfers to restricted countries will be rejected.",
      icon: Globe,
      view: "jurisdictions" as SettingView,
      toggle: jurisdictionsEnabled,
      onToggle: setJurisdictionsEnabled,
    },
    {
      id: "supply-rules",
      title: "Supply rules",
      description: "Set total supply limit and balance limit per investor.",
      icon: Scale,
      view: "supply-rules" as SettingView,
      toggle: supplyRulesEnabled,
      onToggle: setSupplyRulesEnabled,
    },
    {
      id: "transfer-rules",
      title: "Transfer rules",
      description: "Set transfer limits per time interval and manage transfer expenses.",
      icon: ArrowLeftRight,
      view: "transfer-rules" as SettingView,
      toggle: transferRulesEnabled,
      onToggle: setTransferRulesEnabled,
    },
  ];

  const renderMainView = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Settings</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {settingsOptions.map((option) => (
          <Card 
            key={option.id} 
            className="cursor-pointer hover:border-primary/50 transition-colors"
            onClick={() => option.toggle === undefined && setCurrentView(option.view)}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <option.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                </div>
                {option.toggle !== undefined && (
                  <div onClick={(e) => e.stopPropagation()}>
                    <Badge variant={option.toggle ? "default" : "secondary"} className="ml-2">
                      {option.toggle ? "On" : "Off"}
                    </Badge>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderTokenInfoView = () => (
    <div className="space-y-6">
      <Button variant="ghost" onClick={() => setCurrentView("main")}>
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

  const renderTokenOwnershipView = () => (
    <div className="space-y-6">
      <Button variant="ghost" onClick={() => setCurrentView("main")}>
        ← Back to Settings
      </Button>
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Token ownership</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Token ownership</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Owner wallet address</Label>
            <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <code className="text-sm font-mono flex-1 truncate">0x4b211c9f037fff3bae8fb49fc853...</code>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">This is the only wallet authorized to edit agents in the token and manage token settings</p>
          </div>
          <div className="space-y-2">
            <Label>Transfer ownership</Label>
            <Button variant="outline" className="w-full">Transfer ownership</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderIdentityEligibilityView = () => (
    <div className="space-y-6">
      <Button variant="ghost" onClick={() => setCurrentView("main")}>
        ← Back to Settings
      </Button>
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Identity eligibility</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Claims</CardTitle>
          <CardDescription>Select the rules that your investors need to meet to receive tokens</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">Set up eligibility for your token by specifying which claims are required on the on-chain identities (ONCHAINID) that will receive your token.</p>
          <p className="text-sm text-muted-foreground">Create your own claims (e.g. a KYB/AML claim) or add an existing claim from a trusted claim issuer (e.g. a KYC provider) using the same blockchain network.</p>
          <div className="flex flex-wrap gap-2">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create new claim
            </Button>
            <Button variant="outline">Add an existing claim</Button>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 text-sm font-medium">Actions</th>
                    <th className="text-left p-3 text-sm font-medium">Claim</th>
                    <th className="text-left p-3 text-sm font-medium">Topic ID</th>
                    <th className="text-left p-3 text-sm font-medium">Claim issuer</th>
                    <th className="text-left p-3 text-sm font-medium">Used for</th>
                    <th className="text-left p-3 text-sm font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Pencil className="h-4 w-4 text-primary" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </td>
                    <td className="p-3">
                      <div>
                        <p className="font-medium">DEFAULT CLAIM</p>
                        <p className="text-xs text-muted-foreground">Lorem ipsum dolor sit amet consectetur</p>
                      </div>
                    </td>
                    <td className="p-3">
                      <code className="text-xs">0xfbf8e9ef9769f72</code>
                    </td>
                    <td className="p-3 text-sm">Default claim issuer</td>
                    <td className="p-3 text-sm">SMP</td>
                    <td className="p-3">
                      <Badge variant="default" className="bg-green-500">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Active
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-lg text-primary font-medium">Token configuration & Back/fee presentation</h2>
      </div>
      
      {currentView === "main" && renderMainView()}
      {currentView === "token-info" && renderTokenInfoView()}
      {currentView === "token-ownership" && renderTokenOwnershipView()}
      {currentView === "identity-eligibility" && renderIdentityEligibilityView()}
      {currentView === "jurisdictions" && (
        <div className="space-y-6">
          <Button variant="ghost" onClick={() => setCurrentView("main")}>
            ← Back to Settings
          </Button>
          <div>
            <h1 className="text-2xl font-semibold text-foreground mb-2">Jurisdictions</h1>
            <p className="text-muted-foreground">Configure jurisdiction restrictions here.</p>
          </div>
        </div>
      )}
      {currentView === "supply-rules" && (
        <div className="space-y-6">
          <Button variant="ghost" onClick={() => setCurrentView("main")}>
            ← Back to Settings
          </Button>
          <div>
            <h1 className="text-2xl font-semibold text-foreground mb-2">Supply rules</h1>
            <p className="text-muted-foreground">Configure supply limits here.</p>
          </div>
        </div>
      )}
      {currentView === "transfer-rules" && (
        <div className="space-y-6">
          <Button variant="ghost" onClick={() => setCurrentView("main")}>
            ← Back to Settings
          </Button>
          <div>
            <h1 className="text-2xl font-semibold text-foreground mb-2">Transfer rules</h1>
            <p className="text-muted-foreground">Configure transfer rules here.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
