import type { Metadata } from "next";
import PageClient from "./PageClient";
import Script from "next/script";


export const metadata: Metadata = {
  title:"5歳向け無料知育ドリル",
  description:
    "5歳向け無料知育ドリル。算数・論理・パターン認識・ひらがな・仲間分けなど毎日10問。無料・印刷OK。",
  alternates:{
    canonical:"/5",
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
    "name":"5さいドリル",
    "item":"https://wakutan.vercel.app/5"
   }
  ]
 };


 return(
  <>
   <Script
    id="breadcrumb-5"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html:JSON.stringify(breadcrumb)
    }}
   />

   <PageClient/>
  </>
 )

}