import Label from "./Label";
import Input from "./Input";
const InputForm = (props) => {
  const { label, type, name, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
