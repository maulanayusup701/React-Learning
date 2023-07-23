const authLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-2">
          Welcome, Please enter your details
        </p>
        {children}
      </div>
    </div>
  );
};

export default authLayout;
