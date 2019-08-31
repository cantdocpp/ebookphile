import React from "react"
import Image from "../components/image"

const whyUs = () => (
  <div className="section-3 why-us">
    <div className="section-3-container">
      <div className="section-3-header">
        <span>Kenapa memilih Ebookphilia ?</span>
      </div>
      <div className="section-3-inner">
        <div className="section-3-grid">
          <div className="item">
            <div className="image-container">
              <Image filename="gatsby-cheapest.png"></Image>
            </div>
            <div>
              <p className="section-3-title">Termurah</p>
              <p className="section-3-description">Anda bisa mendapatkan lebih dari 10 ebook dengan harga 1 buah buku fisik</p>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <Image filename="gatsby-complete.png"></Image>
            </div>
            <div>
              <p className="section-3-title">Terlengkap</p>
              <p className="section-3-description">Kami memiliki ratusan ribu koleksi E-Book dengan berbagai macam kategori</p>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <Image filename="gatsby-original.png"></Image>
            </div>
            <div>
              <p className="section-3-title">100% original</p>
              <p className="section-3-description">E-Book yang kami jual 100% original dengan cover asli dan terdapat ISBN di dalamnya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default whyUs
