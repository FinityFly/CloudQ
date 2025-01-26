"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const eventsData = [
  { month: "Jan", events: 45 },
  { month: "Feb", events: 52 },
  { month: "Mar", events: 61 },
  { month: "Apr", events: 58 },
  { month: "May", events: 70 },
  { month: "Jun", events: 85 },
  { month: "Jul", events: 93 },
  { month: "Aug", events: 102 },
  { month: "Sep", events: 89 },
  { month: "Oct", events: 78 },
  { month: "Nov", events: 67 },
  { month: "Dec", events: 72 },
];

export default function EventsCreatedChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Events Created</CardTitle>
        <CardDescription>Number of events created per month over the past year</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            events: {
              label: "Events Created",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px] min-w-full"
        >
          <ResponsiveContainer>
            <BarChart data={eventsData}>
              <XAxis dataKey="month" stroke="#737373" fontSize={12} tickLine={false} axisLine={true} />
              <YAxis
                stroke="#737373"
                fontSize={12}
                tickLine={true}
                axisLine={true}
                tickFormatter={(value) => `${value}`}
                domain={[30, 120]} // Start the Y-axis at 30
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="events" fill="#1e1a4d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
