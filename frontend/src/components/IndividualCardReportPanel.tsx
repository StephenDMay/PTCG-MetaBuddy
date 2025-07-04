"use client";

import Image from "next/image";
import imageLoader from "@/lib/image-loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardTrend } from "@/lib/types";

interface IndividualCardReportPanelProps {
    cardTrends: CardTrend[];
}

export function IndividualCardReportPanel({ cardTrends }: IndividualCardReportPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Individual Card Report</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 gap-y-2 items-center text-sm">
          <span className="font-bold col-span-2">Card Name</span>
          <span className="font-bold text-right">Change</span>
          {cardTrends.map((card, index) => {
            const changeColorClass =
              card.type === "increase"
                ? "text-green-500"
                : "text-red-500";
            const changeIcon =
              card.type === "increase"
                ? "▲"
                : "▼";
            return (
              <div key={index} className="contents">
                <Image
                  src={card.imageUrl}
                  alt={`${card.name} image`}
                  width={32}
                  height={32}
                  className="rounded"
                  loader={imageLoader}
                />
                <span>{card.name}</span>
                <span className={`font-bold text-right ${changeColorClass}`}>
                  {changeIcon} {Math.abs(card.change)}%
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

