import {
  LineChartProps,
  LineChartSeries,
  LineChart as MantineLineChart,
} from "@mantine/charts";
import ChartTooltip from "../_components/tooltip";

type Props = {
  valueOnLeft?: boolean;
  series: LineChartSeries[];
  data: Record<string, any>[];
  dataKey: string;
  isCurrency?: boolean;
};

export default function LineChart({
  valueOnLeft = false,
  series,
  data,
  dataKey,
  isCurrency = false,
  ...props
}: Props & LineChartProps) {
  return (
    <div className="overflow-x-auto pb-4">
      <MantineLineChart
        miw={180 * data.length}
        h={250}
        curveType="linear"
        tooltipAnimationDuration={200}
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
        yAxisProps={{ color: "#d1d5db", width: 80 }}
        xAxisProps={{ color: "#d1d5db" }}
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
        data={data}
        dataKey={dataKey}
        series={series}
      />
    </div>
  );
}
