"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import imageLoader from "@/lib/image-loader";
import { TopDeck } from "@/lib/types";

interface TopDecksPanelProps {
  decks: TopDeck[];
}

export function TopDecksPanel({ decks }: TopDecksPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 10 Decks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 gap-y-2 items-center text-sm">
          <span className="font-bold col-span-2">Deck Name</span>
          <span className="font-bold text-right">Win Rate</span>
          {decks.map((deck, index) => {
            const winRateColorClass =
              deck.winRate >= 55
                ? "text-green-500"
                : deck.winRate >= 50
                ? "text-yellow-500"
                : "text-red-500";
            return (
              <React.Fragment key={index}>
                <Image
                  src={deck.spriteUrl}
                  alt={`${deck.name} sprite`}
                  width={24}
                  height={24}
                  className="rounded-full"
                  loader={imageLoader}
                />
                <span>{deck.name}</span>
                <span className={`font-bold text-right ${winRateColorClass}`}>
                  {deck.winRate.toFixed(1)}%
                </span>
              </React.Fragment>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

