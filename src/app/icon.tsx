import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          borderRadius: "50%",
          backgroundColor: "#E5E5E5",
          borderWidth: 1,
          borderColor: "#CCCCCC",
          borderStyle: "solid",
        }}
      >
        <span
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#000000",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          R
        </span>
      </div>
    ),
    { ...size }
  );
}
