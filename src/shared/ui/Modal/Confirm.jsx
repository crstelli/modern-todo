function Confirm({ children, ...props }) {
  return (
    <button
      {...props}
      className="mx-auto mt-4 rounded-lg border border-violet-400 px-6 py-[1px] font-thin uppercase"
    >
      {children}
    </button>
  );
}

export { Confirm };
