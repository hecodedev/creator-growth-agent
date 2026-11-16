import { Route, Routes } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { CampaignPage } from "./pages/CampaignPage";
import { CreativeStudioPage } from "./pages/CreativeStudioPage";
import { DashboardPage } from "./pages/DashboardPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/campaigns/:campaignId" element={<CampaignPage />} />
        <Route path="/creative-studio" element={<CreativeStudioPage />} />
      </Route>
    </Routes>
  );
}