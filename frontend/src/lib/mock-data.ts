
// src/lib/mock-data.ts

import { TopDeck, CardTrend, MatchupData, MetaHealthMetric, MetaTrend } from "./types";

// Data for TopDecksPanel
export const mockTopDecks: TopDeck[] = [
  { name: "Charizard ex", archetype: "Fire", winRate: 62.5, spriteUrl: "/placeholders/charizard.png" },
  { name: "Lost Box", archetype: "Grass/Dark", winRate: 58.2, spriteUrl: "/placeholders/comfey.png" },
  { name: "Lugia VSTAR", archetype: "Colorless", winRate: 55.1, spriteUrl: "/placeholders/lugia.png" },
  { name: "Gardevoir ex", archetype: "Psychic", winRate: 53.9, spriteUrl: "/placeholders/gardevoir.png" },
  { name: "Chien-Pao ex", archetype: "Water", winRate: 51.8, spriteUrl: "/placeholders/chienpao.png" },
  { name: "Miraidon ex", archetype: "Lightning", winRate: 50.3, spriteUrl: "/placeholders/miraidon.png" },
  { name: "Arceus VSTAR", archetype: "Colorless", winRate: 49.7, spriteUrl: "/placeholders/arceus.png" },
  { name: "Snorlax Stall", archetype: "Colorless", winRate: 48.5, spriteUrl: "/placeholders/snorlax.png" },
  { name: "Iron Hands ex", archetype: "Lightning", winRate: 47.2, spriteUrl: "/placeholders/ironhands.png" },
  { name: "Rapid Strike Urshifu VMAX", archetype: "Fighting", winRate: 46.1, spriteUrl: "/placeholders/urshifu.png" },
];

// Data for IndividualCardReportPanel
export const mockCardTrends: CardTrend[] = [
  { name: "Iono", imageUrl: "/placeholders/iono.png", change: 15, type: "increase" },
  { name: "Path to the Peak", imageUrl: "/placeholders/pathtothepeak.png", change: 10, type: "increase" },
  { name: "Lost Vacuum", imageUrl: "/placeholders/lostvacuum.png", change: 8, type: "increase" },
  { name: "Boss's Orders", imageUrl: "/placeholders/bossorders.png", change: -12, type: "decrease" },
  { name: "Forest Seal Stone", imageUrl: "/placeholders/forestsealstone.png", change: -7, type: "decrease" },
];

// Data for MatchupSpreadPanel
export const mockMatchupData: MatchupData[] = [
  { name: 'Charizard ex', winRate: 60, opponentWinRate: 40 },
  { name: 'Lost Box', winRate: 55, opponentWinRate: 45 },
  { name: 'Lugia VSTAR', winRate: 50, opponentWinRate: 50 },
  { name: 'Gardevoir ex', winRate: 48, opponentWinRate: 52 },
  { name: 'Chien-Pao ex', winRate: 40, opponentWinRate: 60 },
];

// Data for MetaHealthReportPanel
export const mockMetaHealthMetrics: MetaHealthMetric[] = [
  { name: "Pace of Play", value: 75, unit: "/100", description: "(Fast)", colorClass: "text-green-500" },
  { name: "Damage Output", value: 80, unit: "/100", description: "(High)", colorClass: "text-green-500" },
  { name: "Meta Variety", value: 60, unit: "%", description: "(Moderate)", colorClass: "text-yellow-500" },
  { name: "Control Presence", value: 30, unit: "%", description: "(Low)", colorClass: "text-red-500" },
  { name: "Aggro Presence", value: 70, unit: "%", description: "(High)", colorClass: "text-green-500" },
];

// Data for MetaTrendsPanel
export const mockMetaTrends: MetaTrend[] = [
  { description: "Charizard ex usage +5%", type: "riser" },
  { description: "Lost Box win rate -3%", type: "faller" },
  { description: "New tech card 'XYZ' adoption", type: "change" },
  { description: "Lugia VSTAR top 8 finishes +2", type: "riser" },
  { description: "Snorlax Stall popularity -1%", type: "faller" },
  { description: "Shift to more basic energy", type: "change" },
];
