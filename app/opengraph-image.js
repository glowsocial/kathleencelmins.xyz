import { ImageResponse } from "next/og";
import { OG_SIZE, SiteCard, ogFonts, portraitDataUrl } from "@/lib/og";

export const alt = "Kathleen Celmins. Everything, in writing.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(<SiteCard photo={await portraitDataUrl()} />, {
    ...size,
    fonts: await ogFonts(),
  });
}
