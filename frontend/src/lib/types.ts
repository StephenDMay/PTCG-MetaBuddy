
// src/lib/types.ts

// =================================================================
// == Core Database Entities (from schema)
// =================================================================

/**
 * Represents a single card in the Pokemon TCG.
 * Based on the 'Cards' table in the database schema.
 * Uses camelCase for property names.
 */
export interface Card {
  id: string;
  name: string;
  setId: string;
  setNumber: string;
  rarity: string;
  cardType: 'Pokemon' | 'Trainer' | 'Energy';
  pokemonType?: string; // Optional: only for Pokemon
  hp?: number;          // Optional: only for Pokemon
  legalFormats: ('Standard' | 'Expanded')[];
  imageUrl: string;
  // createdAt: Date; // Timestamps can be added when needed
  // updatedAt: Date;
}

/**
 * Represents a player's deck from a specific tournament.
 * Based on the 'Decks' table in the database schema.
 * Uses camelCase for property names.
 */
export interface Deck {
  id: string;
  tournamentId: string;
  playerId: string;
  placement: string; // e.g., "1st", "Top 8"
  deckName: string; // e.g., "Charizard ex"
  deckArchetype: string;
  // createdAt: Date;
}

// =================================================================
// == Component-Specific & Analytics Types
// =================================================================

/**
 * Simplified deck representation for the TopDecksPanel.
 */
export interface TopDeck {
  name: string;
  archetype: string;
  winRate: number;
  spriteUrl: string;
}

/**
 * Represents the change in a card's usage for IndividualCardReportPanel.
 */
export interface CardTrend {
  name: string;
  imageUrl: string;
  change: number;
  type: 'increase' | 'decrease';
}

/**
 * Data structure for the MatchupSpreadPanel's chart.
 * Uses camelCase for keys. The display name will be set in the component.
 */
export interface MatchupData {
  name: string;
  winRate: number;
  opponentWinRate: number;
}

/**
 * Represents a single metric in the MetaHealthReportPanel.
 */
export interface MetaHealthMetric {
  name: string;
  value: number;
  unit: string;
  description: string;
  colorClass: string;
}

/**
 * Represents a single trend in the meta for MetaTrendsPanel.
 */
export interface MetaTrend {
  description: string;
  type: 'riser' | 'faller' | 'change';
}
