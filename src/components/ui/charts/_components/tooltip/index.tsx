import { formatNumber } from "@helpers/number-format.helper";
import { getFilteredChartTooltipPayload } from "@mantine/charts";
import { Text } from "@mantine/core";

type ChartTooltipProps = {
  label: string;
  payload: Record<string, any>[] | undefined;
  valueOnLeft: boolean;
  isCurrency: boolean;
};

export default function ChartTooltip({
  label,
  payload,
  valueOnLeft,
  isCurrency,
}: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <section className="bg-slate-800 p-4 rounded-2xl mt-16">
      <Text fw={500} mb={2}>
        {label ? label.replaceAll("-", " ") : ""}
      </Text>
      {getFilteredChartTooltipPayload(payload).map((item) => (
        <Text key={item.name} c={item.color} fz="sm">
          {valueOnLeft
            ? `${formatNumber(item.value, isCurrency)}: ${item.name}`
            : `${item.name}: ${formatNumber(item.value, isCurrency)}`}
        </Text>
      ))}
    </section>
  );
}
