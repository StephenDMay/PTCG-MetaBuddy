
import { TopDecksPanel } from "@/components/TopDecksPanel";
import { MetaTrendsPanel } from "@/components/MetaTrendsPanel";
import { MatchupSpreadPanel } from "@/components/MatchupSpreadPanel";
import { IndividualCardReportPanel } from "@/components/IndividualCardReportPanel";
import { MetaHealthReportPanel } from "@/components/MetaHealthReportPanel";

export const dashboardPanels = [
  {
    id: "topDecks",
    component: TopDecksPanel,
    gridSpan: "lg:col-span-1", // Adjusted for a 3-column layout
  },
  {
    id: "matchupSpread",
    component: MatchupSpreadPanel,
    gridSpan: "lg:col-span-2",
  },
  {
    id: "metaTrends",
    component: MetaTrendsPanel,
    gridSpan: "lg:col-span-1",
  },
  {
    id: "individualCardReport",
    component: IndividualCardReportPanel,
    gridSpan: "lg:col-span-1",
  },
  {
    id: "metaHealthReport",
    component: MetaHealthReportPanel,
    gridSpan: "lg:col-span-1",
  },
];
