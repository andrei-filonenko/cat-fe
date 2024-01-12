export function Promcode(props) {
  return (
    <div className="promcode">
      <input
        type="text"
        className="promcode-input"
        placeholder="Promcode"
        value={props.promcode || ""} />
      <button className="promcode">Apply promcode</button>
      <div>0% discount</div>
    </div>
  );
}
