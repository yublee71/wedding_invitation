export function Coverphoto(props: { coverPhoto: string }) {
  let { coverPhoto } = props;

  return (
    <div style={{ padding: "20px 0px 10px" }}>
      <img src={coverPhoto} style={{ width: "400px" }}></img>
    </div>
  );
}
