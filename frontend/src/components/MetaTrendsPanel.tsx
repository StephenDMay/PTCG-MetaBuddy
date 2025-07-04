import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetaTrend } from "@/lib/types";

interface MetaTrendsPanelProps {
    metaTrends: MetaTrend[];
}

export function MetaTrendsPanel({ metaTrends }: MetaTrendsPanelProps) {
  const risers = metaTrends.filter((trend) => trend.type === "riser");
  const fallers = metaTrends.filter((trend) => trend.type === "faller");
  const changes = metaTrends.filter((trend) => trend.type === "change");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 3 Trends</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Risers</h3>
          <ul className="space-y-1">
            {risers.map((trend, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-green-500">▲</span>
                <span>{trend.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Fallers</h3>
          <ul className="space-y-1">
            {fallers.map((trend, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-red-500">▼</span>
                <span>{trend.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Changes</h3>
          <ul className="space-y-1">
            {changes.map((trend, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-blue-500">●</span>
                <span>{trend.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
