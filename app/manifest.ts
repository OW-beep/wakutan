import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "わくたん｜4〜6歳向け無料知育ドリル",
    short_name: "わくたん",
    description: "4〜6歳向けの無料知育ドリル。印刷不要・登録不要、今日は1問だけでもOK。",
    start_url: "/",
    display: "standalone",
    background_color: "#FEF9C3",
    theme_color: "#FB923C",
    lang: "ja",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
