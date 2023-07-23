const Button = (props) => {
  const { classname, children } = props; // example default value: {varian = bg-red-500}, children = Login
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
