import React from "react";

const Button = (props) => {
  const { variant, children } = props; // example default value: {varian = bg-red-500}, children = Login
  return (
    <button
      class={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};
function App() {
  return (
    <div className="flex justify-center bg-black min-h-screen items-center">
      <div className="flex gap-x-2">
        {/* //login and register are a special component that can capture tags within the component */}
        <Button variant="bg-red-500">Register</Button>
        <Button variant="bg-blue-500">Login</Button>
      </div>
    </div>
  );
}

export default App;
