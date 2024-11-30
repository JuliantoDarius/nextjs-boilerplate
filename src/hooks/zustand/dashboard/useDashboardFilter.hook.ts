// import { create } from "zustand";

// interface DashboardFilterState {
//   activeTab: "day" | "week" | "month";
//   startDate: Date | null;
//   endDate: Date | null;
//   setStartDate: (startDate: Date | null) => void;
//   setEndDate: (endDate: Date | null) => void;
//   setActiveTab: (startDate: DashboardFilterState["activeTab"]) => void;
// }

// const useDashboardFilterStore = create<DashboardFilterState>((set) => ({
//   activeTab: "day",
//   startDate: null,
//   endDate: null,
//   setStartDate: (startDate) => set(() => ({ startDate })),
//   setEndDate: (endDate) => set(() => ({ endDate })),
//   setActiveTab: (activeTab) => set(() => ({ activeTab })),
// }));

// export const useDashboardFilter = () => {
//   const activeTab = useDashboardFilterStore((state) => state.activeTab);
//   const startDate = useDashboardFilterStore((state) => state.startDate);
//   const endDate = useDashboardFilterStore((state) => state.endDate);
//   const setStartDate = useDashboardFilterStore((state) => state.setStartDate);
//   const setEndDate = useDashboardFilterStore((state) => state.setEndDate);
//   const setActiveTab = useDashboardFilterStore((state) => state.setActiveTab);
//   return {
//     activeTab,
//     startDate,
//     endDate,
//     setStartDate,
//     setEndDate,
//     setActiveTab,
//   };
// };
