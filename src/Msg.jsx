export default function Msg({ userName, Textcolor }) {
  return (
    <div>
      <h1 style={{ color: Textcolor }}> {userName}</h1>
    </div>
  );
}
