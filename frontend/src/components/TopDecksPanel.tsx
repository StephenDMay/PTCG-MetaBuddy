"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TopDeck } from "@/lib/types";
import { ListReport } from "@/components/ui/ListReport";

interface TopDecksPanelProps {
  decks: TopDeck[];
}

export function TopDecksPanel({ decks }: TopDecksPanelProps) {
  const listItems = decks.map((deck, index) => {
    const winRateColorClass =
      deck.winRate >= 55
        ? "text-green-500"
        : deck.winRate >= 50
        ? "text-yellow-500"
        : "text-red-500";

    return {
      id: index,
      imageUrl: deck.spriteUrl,
      imageAlt: `${deck.name} sprite`,
      name: deck.name,
      value: {
        text: `${deck.winRate.toFixed(1)}%`,
        colorClassName: winRateColorClass,
      },
    };
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 10 Decks</CardTitle>
      </CardHeader>
      <CardContent>
        <ListReport
          headerLeft="Deck Name"
          headerRight="Win Rate"
          items={listItems}
        />
      </CardContent>
    </Card>
  );
}

