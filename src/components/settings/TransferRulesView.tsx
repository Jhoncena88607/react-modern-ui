import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, Plus, X } from "lucide-react";

export const TransferRulesView = () => {
  const [dailyLimitEnabled, setDailyLimitEnabled] = useState(false);
  const [weeklyLimitEnabled, setWeeklyLimitEnabled] = useState(false);
  const [customPeriodEnabled, setCustomPeriodEnabled] = useState(false);
  const [customPeriodDays, setCustomPeriodDays] = useState("");
  const [customPeriodAmount, setCustomPeriodAmount] = useState("");
  const [requireApproval, setRequireApproval] = useState(false);
  const [selectedApprover, setSelectedApprover] = useState("");
  const [whitelistAddresses, setWhitelistAddresses] = useState<string[]>([""]);
  const [whitelistEnabled, setWhitelistEnabled] = useState(false);
  const [transferFeeEnabled, setTransferFeeEnabled] = useState(false);

  const addWhitelistAddress = () => {
    if (whitelistAddresses.length < 5) {
      setWhitelistAddresses([...whitelistAddresses, ""]);
    }
  };

  const removeWhitelistAddress = (index: number) => {
    setWhitelistAddresses(whitelistAddresses.filter((_, i) => i !== index));
  };

  const updateWhitelistAddress = (index: number, value: string) => {
    const updated = [...whitelistAddresses];
    updated[index] = value;
    setWhitelistAddresses(updated);
  };

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Transfer Rules</h1>
        <p className="text-sm text-muted-foreground">
          Configure transfer restrictions and requirements for your token
        </p>
      </div>

      {/* Transfer Limits */}
      <Card>
        <CardHeader>
          <CardTitle>Transfer Limits</CardTitle>
          <CardDescription>Set maximum transfer amounts per time period</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Daily Limit */}
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Daily transfer limit</Label>
              <p className="text-sm text-muted-foreground">Maximum amount per 24 hours</p>
            </div>
            <Switch checked={dailyLimitEnabled} onCheckedChange={setDailyLimitEnabled} />
          </div>
          {dailyLimitEnabled && (
            <Input placeholder="Enter daily limit" type="number" />
          )}

          {/* Weekly Limit */}
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Weekly transfer limit</Label>
              <p className="text-sm text-muted-foreground">Maximum amount per 7 days</p>
            </div>
            <Switch checked={weeklyLimitEnabled} onCheckedChange={setWeeklyLimitEnabled} />
          </div>
          {weeklyLimitEnabled && (
            <Input placeholder="Enter weekly limit" type="number" />
          )}

          {/* Custom Period */}
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Custom period limit</Label>
              <p className="text-sm text-muted-foreground">Set custom time period</p>
            </div>
            <Switch checked={customPeriodEnabled} onCheckedChange={setCustomPeriodEnabled} />
          </div>
          {customPeriodEnabled && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Number of days"
                type="number"
                value={customPeriodDays}
                onChange={(e) => setCustomPeriodDays(e.target.value)}
              />
              <Input
                placeholder="Maximum amount"
                type="number"
                value={customPeriodAmount}
                onChange={(e) => setCustomPeriodAmount(e.target.value)}
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Conditional Transfers */}
      <Card>
        <CardHeader>
          <CardTitle>Conditional Transfers</CardTitle>
          <CardDescription>Require approval for certain transfers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Require approval</Label>
              <p className="text-sm text-muted-foreground">Transfers need approval from designated address</p>
            </div>
            <Switch checked={requireApproval} onCheckedChange={setRequireApproval} />
          </div>

          {requireApproval && (
            <div className="space-y-4">
              <div>
                <Label>Approver</Label>
                <Select value={selectedApprover} onValueChange={setSelectedApprover}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select approver" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="agent1">Agent 1</SelectItem>
                    <SelectItem value="agent2">Agent 2</SelectItem>
                    <SelectItem value="agent3">Agent 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Wallet addresses</Label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={addWhitelistAddress}
                    disabled={whitelistAddresses.length >= 5}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Address
                  </Button>
                </div>
                {whitelistAddresses.map((address, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder="0x..."
                      value={address}
                      onChange={(e) => updateWhitelistAddress(index, e.target.value)}
                    />
                    {whitelistAddresses.length > 1 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeWhitelistAddress(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <p className="text-xs text-muted-foreground">
                  Maximum 5 addresses can be added
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Transfer Whitelisting */}
      <Card>
        <CardHeader>
          <CardTitle>Transfer Whitelisting</CardTitle>
          <CardDescription>Only allow transfers to/from whitelisted addresses</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              When enabled, only whitelisted addresses can send or receive tokens
            </AlertDescription>
          </Alert>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Enable whitelist</Label>
              <p className="text-sm text-muted-foreground">Restrict transfers to approved addresses</p>
            </div>
            <Switch checked={whitelistEnabled} onCheckedChange={setWhitelistEnabled} />
          </div>
        </CardContent>
      </Card>

      {/* Transfer Fees */}
      <Card>
        <CardHeader>
          <CardTitle>Transfer Fees</CardTitle>
          <CardDescription>Apply fees to token transfers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Enable transfer fees</Label>
              <p className="text-sm text-muted-foreground">Charge a fee on each transfer</p>
            </div>
            <Switch checked={transferFeeEnabled} onCheckedChange={setTransferFeeEnabled} />
          </div>
          {transferFeeEnabled && (
            <div className="space-y-4">
              <div>
                <Label>Fee percentage</Label>
                <Input placeholder="0.5" type="number" step="0.1" />
              </div>
              <div>
                <Label>Fee recipient address</Label>
                <Input placeholder="0x..." />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button>Save Changes</Button>
        <Button variant="outline">Discard</Button>
      </div>
    </div>
  );
};
