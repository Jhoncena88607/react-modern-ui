import { useState } from "react";
import { SettingsMainView } from "@/components/settings/SettingsMainView";
import { TokenInfoView } from "@/components/settings/TokenInfoView";
import { TokenOwnershipView } from "@/components/settings/TokenOwnershipView";
import { IdentityEligibilityView } from "@/components/settings/IdentityEligibilityView";
import { JurisdictionsView } from "@/components/settings/JurisdictionsView";
import { SupplyRulesView } from "@/components/settings/SupplyRulesView";
import { TransferRulesView } from "@/components/settings/TransferRulesView";

type SettingView = "main" | "token-info" | "token-ownership" | "identity-eligibility" | "jurisdictions" | "supply-rules" | "transfer-rules";

const Settings = () => {
  const [currentView, setCurrentView] = useState<SettingView>("main");
  const [identityEnabled, setIdentityEnabled] = useState(true);
  const [jurisdictionsEnabled, setJurisdictionsEnabled] = useState(false);
  const [supplyRulesEnabled, setSupplyRulesEnabled] = useState(false);
  const [transferRulesEnabled, setTransferRulesEnabled] = useState(false);

  const handleBackToMain = () => setCurrentView("main");

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-lg text-primary font-medium">Token configuration & Back/fee presentation</h2>
      </div>
      
      {currentView === "main" && (
        <SettingsMainView
          onViewChange={setCurrentView}
          identityEnabled={identityEnabled}
          setIdentityEnabled={setIdentityEnabled}
          jurisdictionsEnabled={jurisdictionsEnabled}
          setJurisdictionsEnabled={setJurisdictionsEnabled}
          supplyRulesEnabled={supplyRulesEnabled}
          setSupplyRulesEnabled={setSupplyRulesEnabled}
          transferRulesEnabled={transferRulesEnabled}
          setTransferRulesEnabled={setTransferRulesEnabled}
        />
      )}
      {currentView === "token-info" && <TokenInfoView onBack={handleBackToMain} />}
      {currentView === "token-ownership" && <TokenOwnershipView onBack={handleBackToMain} />}
      {currentView === "identity-eligibility" && <IdentityEligibilityView onBack={handleBackToMain} />}
      {currentView === "jurisdictions" && <JurisdictionsView onBack={handleBackToMain} />}
      {currentView === "supply-rules" && <SupplyRulesView onBack={handleBackToMain} />}
      {currentView === "transfer-rules" && <TransferRulesView onBack={handleBackToMain} />}
    </div>
  );
};

export default Settings;
