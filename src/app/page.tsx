"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "./modules/home/hero";
import About from "./modules/home/about";
import OurProducts from "./modules/home/our-products";
import HeroBanner from "./modules/hero-banner";
import { gql, useQuery } from "@apollo/client";
import clientConfig from "../../client-config";
import ContentRenderer from "./modules/content-renderer";

export default function Home() {
  const [data, setData] = useState<any>(null);

  const {
    loading,
    error,
    data: dataQuery,
  } = useQuery(gql`
    query HomeQuery {
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
                  provider
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
                latar_belakang {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
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

  if (error) {
    return <></>;
  }

  // Hero Const
  const homeContent = dataQuery?.home?.data?.attributes;
  const heroBanner = homeContent?.banner.data[0].attributes;

  // About Const
  const aboutMedias = homeContent?.gallery.data.map((media) => {
    return {
      url: `${clientConfig.strapiUrl}${media.attributes.url}`,
      alt: media.attributes.alternativeText,
    };
  });
  const aboutCards = homeContent?.small_card.map((card) => {
    return card.isi;
  });

  // Feat. Products
  const products = homeContent?.kotak_produk.map((produk) => {
    return {
      title: produk.nama_produk,
      image: {
        url: `${clientConfig.strapiUrl}${produk.foto_produk.data.attributes.url}`,
        alt: produk.foto_produk.data.attributes.alternativeText,
      },
    };
  });

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
      {homeContent?.konten.map((content: any, index: number) => (
        <ContentRenderer data={content} type={content.__typename} key={index} />
      ))}
    </main>
  );
}
