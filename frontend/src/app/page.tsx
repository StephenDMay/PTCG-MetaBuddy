import { dashboardPanels } from "@/lib/dashboard-config";
import {
  mockTopDecks,
  mockCardTrends,
  mockMatchupData,
  mockMetaHealthMetrics,
  mockMetaTrends,
} from "@/lib/mock-data";

export default function Home() {
  // Map panel IDs to their corresponding mock data
  const panelData = {
    topDecks: { decks: mockTopDecks },
    matchupSpread: { matchupData: mockMatchupData },
    metaTrends: { metaTrends: mockMetaTrends },
    individualCardReport: { cardTrends: mockCardTrends },
    metaHealthReport: { metaHealthMetrics: mockMetaHealthMetrics },
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Meta Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {dashboardPanels.map((panel) => {
          const PanelComponent = panel.component;
          const props = panelData[panel.id as keyof typeof panelData];
          return (
            <div key={panel.id} className={panel.gridSpan}>
              <PanelComponent {...props} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
