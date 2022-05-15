import "./styles.css";

export const Atom = ({ id, symbol, name, groupBlock, atomicNumber, color }) => {
  return (
    <div
      className="atom"
      style={{ borderLeftColor: color, borderLeftWidth: 10 }}
    >
      <div className="symbol-container">{atomicNumber}</div>
      <div key={id} className="content">
        <h2 style={{ color }}>{symbol}</h2>
        <p> {groupBlock} </p>
        <span>{name}</span>
      </div>
    </div>
  );
};
