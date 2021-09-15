import { Switch } from "antd";

type LangSwitchProps = {
  onChange: () => void;
};

const LangSwitch: React.FC<LangSwitchProps> = ({ onChange }) => {
  return (
    <Switch unCheckedChildren="EN" checkedChildren="RU" onChange={onChange} />
  );
};

export default LangSwitch;
