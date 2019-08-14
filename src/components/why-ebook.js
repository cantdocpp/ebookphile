import React from "react"
import Image from "../components/image"

const whyEbook = () => (
  <div id="section-2">
    <div className="section-2-container">
      <div className="section-2-header">
        <span>Mengapa harus E-Book ?</span>
      </div>
      <div className="section-2-inner">
        <div className="section-2-grid">
          <div className="item">
            <div className="image-container">
              <Image filename="gatsby-broken.png"></Image>
              <p className="grid-image-title">Tidak bisa rusak</p>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <Image filename="gatsby-accessible.png"></Image>
              <p className="grid-image-title">Mudah diakses dimanapun</p>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <Image filename="gatsby-tree.png"></Image>
              <p className="grid-image-title">Ramah lingkungan</p>
            </div>
          </div>
          <div className="item item-bottom">
            <div className="image-container">
              <Image filename="gatsby-cheap.png"></Image>
              <p className="grid-image-title">Harga yang terjangkau</p>
            </div>
          </div>
          <div className="item item-bottom">
            <div className="image-container">
              <Image filename="gatsby-shelf.png"></Image>
              <p className="grid-image-title">Tidak membuang tempat</p>
            </div>
          </div>
          <div className="item item-bottom">
            <div className="image-container">
              <Image filename="gatsby-time.png"></Image>  
              <p className="grid-image-title">Menghemat waktu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default whyEbook
