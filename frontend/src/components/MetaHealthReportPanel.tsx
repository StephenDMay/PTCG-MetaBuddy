"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetaHealthMetric } from "@/lib/types";

interface MetaHealthReportPanelProps {
    metaHealthMetrics: MetaHealthMetric[];
}

export function MetaHealthReportPanel({ metaHealthMetrics }: MetaHealthReportPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Meta Health Report</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          {metaHealthMetrics.map((metric, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold">{metric.name}</p>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
              <p className={`text-2xl font-bold ${metric.colorClass}`}>
                {metric.value}{metric.unit}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
