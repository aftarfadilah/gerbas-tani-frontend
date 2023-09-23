"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "./modules/home/hero";
import About from "./modules/home/about";
import OurProducts from "./modules/home/our-products";
import HeroBanner from "./modules/hero-banner";
import { gql, useQuery } from "@apollo/client";
import clientConfig from "../../client-config";

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

  console.log(">> dq", dataQuery)

  if (error) {
    return <></>;
  }

  // Hero Const
  const homeContent = dataQuery?.home?.data?.attributes;
  const heroBanner = homeContent?.banner.data[0].attributes

  // About Const
  const aboutMedias = homeContent?.gallery.data.map((media) => {
    return {url: `${clientConfig.strapiUrl}${media.attributes.url}`, alt: media.attributes.alternativeText}
  })
  const aboutCards = homeContent?.small_card.map((card) => {
    return card.isi
  })

  // Feat. Products
  const products = homeContent?.kotak_produk.map((produk) => {
    return {
      title: produk.nama_produk,
      image: {
        url: `${clientConfig.strapiUrl}${produk.foto_produk.data.attributes.url}`,
        alt: produk.foto_produk.data.attributes.alternativeText,
      }
    }
  })

  return (
    <main className="flex flex-col items-center justify-between">
      <Hero
        banner={{ url: heroBanner?.url, alt: heroBanner?.alternativeText }}
        dateTimeCountdown={homeContent?.countdown}
        deskripsi={homeContent?.deskripsi_hitung_mundur}
      />
      <About
        title={homeContent?.judul}
        toptext={homeContent?.text_atas}
        deskripsi={homeContent?.deskripsi}
        medias={aboutMedias}
        cards={aboutCards}
      />
      <OurProducts products={products} />
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
