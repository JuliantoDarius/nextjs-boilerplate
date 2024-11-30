import payloadFormatDate from "@helpers/date.helper";
import { DatesRangeValue } from "@mantine/dates";
import { PaginationRequest } from "@utils/types/fetching/request.type";
import { SetStateType } from "@utils/types/set-state.type";
import { useEffect } from "react";

type Props = {
  setPayload: SetStateType<PaginationRequest>;
  query: string;
  dateRange: DatesRangeValue;
};

export const useHandleFilterPayload = ({
  setPayload,
  query,
  dateRange,
}: Props) => {
  useEffect(() => {
    setPayload((prev) => {
      const body: PaginationRequest = {
        ...prev,
        q: query,
        page: 1,
        start_date:
          dateRange[0] != null && dateRange[1] != null
            ? payloadFormatDate(dateRange[0])
            : "",
        end_date:
          dateRange[0] != null && dateRange[1] != null
            ? payloadFormatDate(dateRange[1])
            : "",
      };
      return body;
    });
  }, [setPayload, query, dateRange]);
};
