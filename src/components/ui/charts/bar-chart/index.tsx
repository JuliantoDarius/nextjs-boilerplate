import {
  BarChartProps,
  BarChartSeries,
  BarChart as MantineBarChart,
} from "@mantine/charts";
import ChartTooltip from "../_components/tooltip";

type Props = {
  valueOnLeft?: boolean;
  series: BarChartSeries[];
  data: Record<string, any>[];
  dataKey: string;
  isCurrency?: boolean;
};

export default function BarChart({
  valueOnLeft = false,
  data,
  series,
  dataKey,
  isCurrency = false,
  ...props
}: Props & BarChartProps) {
  return (
    <div className="overflow-x-auto pb-4">
      <MantineBarChart
        miw={150 * data.length}
        h={400}
        data={data}
        dataKey={dataKey}
        tooltipAnimationDuration={200}
        barProps={{ radius: [10, 10, 0, 0] }}
        withLegend
        classNames={{
          legend: "flex gap-4 font-semibold mb-10 clr--base justify-start",
          legendItem: "flex items-center gap-1.5",
        }}
        yAxisProps={{ color: "#d1d5db" }}
        xAxisProps={{ color: "#d1d5db" }}
        series={series}
        tooltipProps={{
          content: ({ label, payload }) => (
            <ChartTooltip
              label={label}
              payload={payload}
              valueOnLeft={valueOnLeft}
              isCurrency={isCurrency}
            />
          ),
        }}
        {...props}
      />
    </div>
  );
}
