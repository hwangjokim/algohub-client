import { useTabState } from "@/common/component/Tab/TabProvider";
import { indicatorStyle } from "@/common/component/Tab/index.css";

const Indicator = () => {
  const { variant } = useTabState();

  return <div className={indicatorStyle({ variant: variant })} />;
};

export default Indicator;
