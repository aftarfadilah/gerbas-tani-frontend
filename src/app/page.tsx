import Image from 'next/image'
import Hero from './modules/home/hero'
import About from './modules/home/about'
import OurProducts from './modules/home/our-products'
import HeroBanner from './modules/hero-banner'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <About />
      <OurProducts />
      <HeroBanner
        title='Produk Terbaru'
        description='Hadirlah Inovasi Baru Sebuah ICE CREAM  Labu Dari UMKM Sekitar'
        link={
          {
            text: 'Aku Juga Mw',
            url: '/es-krim-labu-madu'
          }
        }
        background={
          {
            url: 'https://images.unsplash.com/photo-1595871277397-08901ed2d7f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            alt: 'Ice Cream Banner'
          }
        }
      />
      <HeroBanner
        title='Pupuk Alami'
        description='Menggunakan racikan alami demi kesehatan yang maksimal'
        link={
          {
            text: 'Aku Juga Mw',
            url: '/pupuk'
          }
        }
        background={
          {
            url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            alt: 'Pupuk Banner'
          }
        }
      />
    </main>
  )
}
