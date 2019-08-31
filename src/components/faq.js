import React from "react"

import Accordion from '../components/accordion'

const faq = () => {
  const faq = [
    {
      'question' : 'Apa itu E-book ?',
      'answer': 'Ebook adalah buku cetak yang bisa dibaca dengan menggunakan media elektronik, seperti komputer dan smartphone.'
    },
    {
      'question': 'Apa saja jenis-jenis E-Book yang dijual oleh Ebookphilia ?',
      'answer': 'Kami menyediakan berbagai macam kategori E-Book. Semua eBook dapat Anda cari refrensinya langsung di Goodreads, Amazon, Google Play Books.'
    },
    {
      'question': 'berapa harga 1 buah ebook ?',
      'answer': '1 buah E-Book yang kami jual seharga Rp. 10.000, namun setiap pembelian dalam jumlah banyak akan mendapatkan harga spesial'
    }
  ]
  

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>Pertanyaan yang sering ditanyakan</h1>
      </div>
      <div className="faq-inner">
        {faq.map((value, index) => {
          return <Accordion title={value.question} answer={value.answer}></Accordion>
        })}
        
      </div>
    </div>
  )
}

export default faq
