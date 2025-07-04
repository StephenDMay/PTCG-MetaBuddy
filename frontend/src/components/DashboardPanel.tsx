
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardPanelProps {
  title: string;
  children: React.ReactNode;
}

export function DashboardPanel({ title, children }: DashboardPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
