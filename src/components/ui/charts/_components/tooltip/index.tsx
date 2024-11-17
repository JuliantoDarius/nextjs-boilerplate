import { getFilteredChartTooltipPayload } from "@mantine/charts";
import { Text } from "@mantine/core";

interface ChartTooltipProps {
  label: string;
  payload: Record<string, any>[] | undefined;
  valueOnLeft: boolean;
}

export default function ChartTooltip({
  label,
  payload,
  valueOnLeft,
}: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <section className="bg-slate-800 p-4 rounded-2xl mt-16">
      {/* <Text fw={500} mb={2}>
        {label}
      </Text> */}
      {getFilteredChartTooltipPayload(payload).map((item: any) => (
        <Text key={item.name} c={item.color} fz="sm">
          {valueOnLeft
            ? `${item.value}: ${item.name}`
            : `${item.name}: ${item.value}`}
        </Text>
      ))}
    </section>
  );
}
