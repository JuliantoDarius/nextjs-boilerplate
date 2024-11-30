import { FaSearch } from "react-icons/fa";
import { limitOptions } from "@utils/common/constants.common";
import { useMemo, useState } from "react";
import { DatesRangeValue } from "@mantine/dates";
import { SetStateType } from "@utils/types/set-state.type";
import { Button } from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import dynamic from "next/dynamic";
import { generateQueryKey } from "@helpers/queryKey.helper";
import { PaginationRequest } from "@utils/types/fetching/request.type";
import { useHandleFilterPayload } from "@hooks/useHandleFilterPayload.hook";

const Input = dynamic(() => import("@components/ui/input"));
const InputSelect = dynamic(() => import("@components/ui/input/select"));
const InputDatepicker = dynamic(
  () => import("@components/ui/input/datepicker")
);

type Props = {
  payload: PaginationRequest;
  setPayload: SetStateType<PaginationRequest>;
  withMutationType?: boolean;
  withAccountId?: boolean;
};

export default function TableFilter({
  payload,
  setPayload,
  withMutationType = false,
  withAccountId = false,
}: Props) {
  const [query, setQuery] = useDebouncedState("", 500);
  const [dateRange, setDateRange] = useState<DatesRangeValue>([null, null]);
  useHandleFilterPayload({ dateRange, setPayload, query });

  // const { data, isLoading } = useGetMutationTypes({
  //   queryKey: ["mutation-type"],
  //   enabled: withMutationType == true,
  // });

  // const [accountsPayload, setAccountsPayload] = usePaginationPayload();

  // const { data: accountQ, isLoading: accountLoading } = useGetAllAccount(
  //   accountsPayload,
  //   {
  //     enabled: withAccountId == true,
  //     queryKey: generateQueryKey("accounts", accountsPayload),
  //   }
  // );

  // const options = useMemo(() => {
  //   if (data?.data == null) return [];
  //   return [
  //     {
  //       value: 0,
  //       label: data.data[0],
  //     },
  //     {
  //       value: 1,
  //       label: data.data[1],
  //     },
  //     {
  //       value: 2,
  //       label: data.data[2],
  //     },
  //   ];
  // }, [data]);

  return (
    <section className="space-y-6 mb-4">
      <div className="gap-4 grid grid-cols-2">
        <InputDatepicker
          type="range"
          value={dateRange}
          onChange={(value: any) => setDateRange(value)}
        />

        {/* {withMutationType && (
          <InputSelect
            name="mutation-type"
            label="Tipe Mutasi"
            placeholder="Pilih tipe mutasi"
            options={options}
            optionName="label"
            optionValue="value"
            isLoading={isLoading}
            value={payload.mutation_type}
            onChange={(e: any) => {
              setPayload((prev) => ({
                ...prev,
                mutation_type: e == null ? undefined : e,
                page: 1,
              }));
            }}
          />
        )}

        {withAccountId && (
          <InputSelect
            label="Akun"
            value={payload.account_id}
            options={accountQ?.data.accounts ?? []}
            optionName="name"
            isLoading={accountLoading}
            optionValue="id"
            onChange={(value) => {
              setPayload((prev) => ({
                ...prev,
                account_id: value == null ? undefined : value,
                page: 1,
              }));
            }}
            name="account"
            placeholder="filter berdasarkan akun"
            searchPlaceholder="Cari akun"
            handleSearch={
              accountQ?.data != null && accountQ.data.total_data > 10
                ? (q) => setAccountsPayload((prev) => ({ ...prev, q }))
                : undefined
            }
          />
        )} */}
      </div>

      <div className="flex w-full justify-end">
        <Button
          type="button"
          className="_btn-primary-outline w-32"
          onClick={() => {
            setDateRange([null, null]);
            setPayload((prev) => ({
              ...prev,
              start_date: "",
              end_date: "",
              mutation_type: undefined,
              account_id: undefined,
            }));
          }}
        >
          Reset
        </Button>
      </div>

      <div className="flex gap-4 items-end justify-between">
        <div className="min-w-40 w-1/4">
          <InputSelect
            label="Limit"
            value={payload.limit_per_page}
            options={limitOptions}
            optionName="label"
            optionValue="value"
            onChange={(value) => {
              setPayload((prev) => ({ ...prev, limit_per_page: value }));
            }}
            name="limit"
            placeholder="Limit per halaman"
          />
        </div>
        <Input
          placeholder="Cari"
          defaultValue={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          leftSection={<FaSearch />}
          name="search"
          containerClassName="min-w-40 w-1/4"
        />
      </div>
    </section>
  );
}
