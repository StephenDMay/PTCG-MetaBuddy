import { TopDecksPanel } from "@/components/TopDecksPanel";
import { MetaTrendsPanel } from "@/components/MetaTrendsPanel";
import { MatchupSpreadPanel } from "@/components/MatchupSpreadPanel";
import { IndividualCardReportPanel } from "@/components/IndividualCardReportPanel";
import { MetaHealthReportPanel } from "@/components/MetaHealthReportPanel";
import {
  mockTopDecks,
  mockCardTrends,
  mockMatchupData,
  mockMetaHealthMetrics,
  mockMetaTrends,
} from "@/lib/mock-data";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Meta Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Section A: Top 10 deck lists */}
        <TopDecksPanel decks={mockTopDecks} />

        {/* Section B: Matchup spread */}
        <div className="lg:col-span-2">
          <MatchupSpreadPanel matchupData={mockMatchupData} />
        </div>

        {/* Section C: Top 3 trends */}
        <MetaTrendsPanel metaTrends={mockMetaTrends} />

        {/* Section D: Individual card report */}
        <IndividualCardReportPanel cardTrends={mockCardTrends} />

        {/* Section E: Meta health report */}
        <div className="lg:col-span-2">
          <MetaHealthReportPanel metaHealthMetrics={mockMetaHealthMetrics} />
        </div>
      </div>
    </main>
  );
}
