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
        styles={{
          legend: {
            display: "flex",
            columnGap: "1rem",
            fontWeight: "600",
            justifyContent: "start",
            marginBottom: "3rem",
          },
          legendItem: {
            display: "flex",
            alignItems: "center",
            columnGap: "0.3rem",
          },
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
