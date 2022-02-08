const Button = (props) => {
  return (
    <button
      className="border-background border-solid border bg-primary rounded-full px-5 hover:text-primary hover:bg-transparent"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
