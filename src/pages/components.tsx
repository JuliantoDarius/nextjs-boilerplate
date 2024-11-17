import dynamic from "next/dynamic";

const ComponentsView = dynamic(() => import("@containers/components/views"));

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default ComponentsView;
