import "./inputError.css";

const InputError = ({ children }) => {
  return children && <div className="input-error">{children}</div>;
};

export default InputError;
