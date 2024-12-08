import Table from "@components/ui/table";
import ComponentsForm from "@containers/_forms";
import dynamic from "next/dynamic";
import { dataColumn } from "../_table";
import Card from "@components/ui/card";

const BarChart = dynamic(() => import("@components/ui/charts/bar-chart"));
const Layout = dynamic(() => import("@components/layouts"));

export default function ComponentsView() {
  return (
    <Layout>
      <section className="space-y-10">
        <Card>
          <ComponentsForm />
        </Card>

        <Card>
          <BarChart
            data={[
              { month: "jan", phone: 2, laptop: 3, pc: 5 },
              { month: "feb", phone: 3, laptop: 30, pc: 2 },
              { month: "mar", phone: 10, laptop: 25, pc: 15 },
              { month: "apr", phone: 90, laptop: 125, pc: 15 },
              { month: "mei", phone: 50, laptop: 245, pc: 295 },
              { month: "jun", phone: 40, laptop: 255, pc: 145 },
              { month: "jul", phone: 220, laptop: 145, pc: 125 },
              { month: "aug", phone: 10, laptop: 205, pc: 150 },
            ]}
            series={[
              { name: "phone", color: "#732ECB" },
              { name: "laptop", color: "#2ECB89" },
              { name: "pc", color: "#2EA5CB" },
            ]}
            dataKey="month"
          />
        </Card>

        <Card>
          <Table
            currentPage={1}
            limitPage={10}
            totalData={10}
            onChangePage={(page) => console.log(page)}
            columns={dataColumn}
          />
        </Card>
      </section>
    </Layout>
  );
}
