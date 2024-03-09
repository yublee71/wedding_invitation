import { Coverphoto } from "./coverphoto";

export function Photomask() {
  return (
    <div
      style={{
        width: "200",
        height: "470",
        borderBottomLeftRadius: "100",
        borderBottomRightRadius: "100",
        overflow: "hidden",
        transform: "[{ scaleX: 2 }]",
      }}
    >
      <Coverphoto coverPhoto={"/cover_photo.jpg"} />
    </div>
  );
}
