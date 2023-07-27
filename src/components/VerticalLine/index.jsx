import "./index.css";

const VerticalLine = ({ color }) => {
  return (
    <hr
      className="cssVerticalLine"
      style={{
        borderColor: `${color}`,
      }}
    />
  );
};

export default VerticalLine;
