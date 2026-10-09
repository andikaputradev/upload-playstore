import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(180deg, #F7E2C4, #E8B879)",
          borderRadius: "112px",
          color: "#150E04",
          fontSize: "256px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        AP
      </div>
    ),
    { ...size }
  );
}
