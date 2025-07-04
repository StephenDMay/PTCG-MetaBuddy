"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardTrend } from "@/lib/types";
import { ListReport } from "@/components/ui/ListReport";

interface IndividualCardReportPanelProps {
  cardTrends: CardTrend[];
}

export function IndividualCardReportPanel({
  cardTrends,
}: IndividualCardReportPanelProps) {
  const listItems = cardTrends.map((card, index) => {
    const changeColorClass =
      card.type === "increase" ? "text-green-500" : "text-red-500";
    const changeIcon = card.type === "increase" ? "▲" : "▼";

    return {
      id: index,
      imageUrl: card.imageUrl,
      imageAlt: `${card.name} image`,
      name: card.name,
      value: {
        text: `${changeIcon} ${Math.abs(card.change)}%`,
        colorClassName: changeColorClass,
      },
    };
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Individual Card Report</CardTitle>
      </CardHeader>
      <CardContent>
        <ListReport
          headerLeft="Card Name"
          headerRight="Change"
          items={listItems}
        />
      </CardContent>
    </Card>
  );
}

