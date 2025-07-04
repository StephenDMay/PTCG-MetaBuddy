"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { MatchupData } from "@/lib/types";

interface MatchupSpreadPanelProps {
    matchupData: MatchupData[];
}

export function MatchupSpreadPanel({ matchupData }: MatchupSpreadPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Matchup Spread</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={matchupData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="winRate" name="Win Rate" stroke="#82ca9d" />
            <Line type="monotone" dataKey="opponentWinRate" name="Opponent Win Rate" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
