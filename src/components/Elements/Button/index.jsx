const Button = (props) => {
  const { classname, children, onClick = () => {}, type = "button" } = props; // example default value: {varian = bg-red-500}, children = Login
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
