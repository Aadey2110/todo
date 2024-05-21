export default function GetCard(props) {
  const { index, todo, handleRemoveTodo } = props;
  return (
    <div className="card">
      <div className="name">{todo}</div>
      <button
        className="remove-btn btn"
        onClick={() => handleRemoveTodo(index)}
      >
        <img
          src="https://em-content.zobj.net/source/toss-face/381/wastebasket_1f5d1-fe0f.png"
          height="40px"
        />
      </button>
    </div>
  );
}
