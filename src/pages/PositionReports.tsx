import { Button } from "@/components/ui/button";
import { FileSearch } from "lucide-react";

export default function PositionReports() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
          <FileSearch className="w-12 h-12 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">You have not yet created any position reports.</h2>
          <p className="text-muted-foreground max-w-md">
            Click the button below and select a date to generate your first position report.
          </p>
        </div>
        <Button size="lg">
          Create a position report
        </Button>
      </div>
    </div>
  );
}
