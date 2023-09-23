"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "./modules/home/hero";
import About from "./modules/home/about";
import OurProducts from "./modules/home/our-products";
import HeroBanner from "./modules/hero-banner";
import { gql, useQuery } from "@apollo/client";

export default function Home() {
  const [data, setData] = useState<any>(null);

  const {
    loading,
    error,
    data: dataQuery,
  } = useQuery(gql`
    query QueryHome {
      home {
        data {
          attributes {
            countdown
            deskripsi_hitung_mundur
            banner {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            gallery {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            text_atas
            judul
            deskripsi
            small_card {
              id
              isi
            }
            kotak_produk {
              id
              nama_produk
              foto_produk {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
            konten {
              ... on ComponentTampilanBanner {
                id
                judul
                deskripsi
                link_teks
                link_url
              }
            }
            createdAt
            updatedAt
            publishedAt
          }
        }
      }
    }
  `);

  console.log(">> dataQ", dataQuery)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://127.0.0.1:1337/api/home");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const homePageAttr = data?.data?.attributes;

  return (
    <main className="flex flex-col items-center justify-between">
      {/* <Hero
        banner={""}
        dateTimeCountdown={homePageAttr?.countdown}
        deskripsi={homePageAttr?.deskripsi_hitung_mundur}
      />
      <About
        title={homePageAttr.judul}
        toptext={homePageAttr?.text_atas}
        deskripsi={homePageAttr?.deskripsi}
      /> */}
      <OurProducts />
      <HeroBanner
        title="Produk Terbaru"
        description="Hadirlah Inovasi Baru Sebuah ICE CREAM  Labu Dari UMKM Sekitar"
        link={{
          text: "Aku Juga Mw",
          url: "/es-krim-labu-madu",
        }}
        background={{
          url: "https://images.unsplash.com/photo-1595871277397-08901ed2d7f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          alt: "Ice Cream Banner",
        }}
      />
      <HeroBanner
        title="Pupuk Alami"
        description="Menggunakan racikan alami demi kesehatan yang maksimal"
        link={{
          text: "Aku Juga Mw",
          url: "/pupuk",
        }}
        background={{
          url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          alt: "Pupuk Banner",
        }}
      />
    </main>
  );
}
