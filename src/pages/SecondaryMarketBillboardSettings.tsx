import { Settings } from "lucide-react";

export default function SecondaryMarketBillboardSettings() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
          <Settings className="w-12 h-12 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Billboard Settings</h2>
          <p className="text-muted-foreground max-w-md">
            Configure billboard settings here.
          </p>
        </div>
      </div>
    </div>
  );
}
