import type { Metadata } from "next";
import PageClient from "./PageClient";
import Script from "next/script";


export const metadata: Metadata = {
 title:"6歳向け無料知育ドリル",
 description:
 "6歳向け無料知育ドリル。小学校入学準備におすすめ。毎日10問・無料・印刷OK。",
 alternates:{
  canonical:"/6",
 },
};


export default function Page(){

const breadcrumb={
 "@context":"https://schema.org",
 "@type":"BreadcrumbList",
 "itemListElement":[
  {
   "@type":"ListItem",
   "position":1,
   "name":"ホーム",
   "item":"https://wakutan.vercel.app"
  },
  {
   "@type":"ListItem",
   "position":2,
   "name":"6さいドリル",
   "item":"https://wakutan.vercel.app/6"
  }
 ]
};


return(
 <>
  <Script
   id="breadcrumb-6"
   type="application/ld+json"
   dangerouslySetInnerHTML={{
    __html:JSON.stringify(breadcrumb)
   }}
  />

  <PageClient/>
 </>
)

}