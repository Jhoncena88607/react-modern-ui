import { Button } from "@/components/ui/button";

interface TransferRulesViewProps {
  onBack: () => void;
}

export const TransferRulesView = ({ onBack }: TransferRulesViewProps) => {
  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={onBack}>
        ← Back to Settings
      </Button>
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Transfer rules</h1>
        <p className="text-muted-foreground">Configure transfer rules here.</p>
      </div>
    </div>
  );
};
