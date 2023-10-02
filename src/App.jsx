import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { AiOutlineArrowLeft } from "react-icons/ai";
import logo from "./assets/logo1.png";
import gambar from "./assets/gambar1.png";
import card from "./assets/card.png";
import Card from "./components/Card";
import gambar2 from "./assets/gambar2.png"
import { useNavigate } from "react-router-dom";

// onClick={() =>{
//               navigate("/DetailArtikel")
//             }}

function App() {
  const navigate = useNavigate()

  return (
    <body>
      <nav className="bg-white-800 p-4 shadow-xl">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <img src={logo} className="ml-4" />
            <div className="hidden md:flex">
              <button className="rounded-lg border-2  border-primary text-primary p-2">Masuk</button>
              <button className="rounded-lg border bg-primary  ml-3 text-white mr-3 p-2">Daftar</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-[80px] flex flex-col mt-20">
        <section class=" border-gray-200 border-solid border-2 p-8 flex flex-row">
          <img src={gambar} className="w-[300px] h-[250px]"></img>
          <div className="flex flex-col ml-44 mt-6 ">
            <h1 className="font-semibold text-2xl">Gabung Bersama Kami untuk Merayakan Hidup Sehat!</h1>
            <p className="mt-3">Bersama Kita, Setiap Hari Adalah Kesempatan untuk Meningkatkan Kesehatan</p>
            <button 
            className=" bg-primary rounded-lg w-[120px] h-[40px]  text-white mt-4 hover:transition-all duration-75">Lihat Lainnya</button>
          </div>
        </section>
        <div className="mt-6 font-bold text-3xl">
          <h1>Rekomendasi</h1>
        </div>
        <div className="flex flex-row mt-10">
          <Card
            image={card}
            header="Tips Mudah untuk Meningkatkan Kualitas Tidur Anda"
            content="Tidur berkualitas sangat penting bagi kesehatan secara keseluruhan. Artikel ini memberikan tips sederhana yang dapat membantu Anda tidur lebih nyenyak, seperti baca selengkapnya..."
          />
          <Card
            image={card}
            header="Kesehatan Mental di Era Digital: Menjaga Keseimbangan Penggunaan Teknologi"
            content="Peningkatan penggunaan teknologi dapat berdampak pada kesehatan mental, termasuk gejala kecemasan dan depresi. Artikel ini "
          />
          <Card
            image={card}
            header="Pentingnya Kesehatan Mata: Tips Merawat Mata di Era Digital"
            content="Tidur berkualitas sangat penting bagi kesehatan secara keseluruhan. Artikel ini memberikan tips sederhana yang dapat membantu Anda tidur lebih nyenyak, seperti baca selengkapnya..."
          />
        </div>
        <div className="mt-6 font-bold text-3xl">
          <h1>Berita Terkini</h1>
        </div>
        <section class="border border-gray-200 border-solid border-2 p-8 flex flex-row mt-8">
          <img src={gambar2} className="w-[300px] h-[210px]"></img>
          <div className="flex flex-col ml-44 mt-6 ">
            <h1 className="font-semibold text-2xl">Ciri-ciri Hipertensi, Penyakit Darah Tinggi yang Bisa Menyerang Usia Muda</h1>
            <p className="mt-3">Hipertensi atau tekanan darah tinggi hanya bisa terjadi pada orang usia lanjut. Padahal, kondisi ini juga sangat rentan dialami oleh kelompok usia muda...</p>
            <p className="mt-3 font-light">Rabu 23 Agustus 2023 oleh Intan</p>
          </div>
        </section>
        <section class="border border-gray-200 border-solid border-2 p-8 flex flex-row mt-8">
          <img src={gambar2} className="w-[300px] h-[210px]"></img>
          <div className="flex flex-col ml-44 mt-6 ">
            <h1 className="font-semibold text-2xl">Ciri-ciri Hipertensi, Penyakit Darah Tinggi yang Bisa Menyerang Usia Muda</h1>
            <p className="mt-3">Hipertensi atau tekanan darah tinggi hanya bisa terjadi pada orang usia lanjut. Padahal, kondisi ini juga sangat rentan dialami oleh kelompok usia muda...</p>
            <p className="mt-3 font-light">Rabu 23 Agustus 2023 oleh Intan</p>
          </div>
        </section>
      </div>
      <footer className="bg-primary p-4 text-white mt-10 ">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Nama Perusahaan. All Rights Reserved.</p>
        </div>
      </footer>
    </body>
  );
}

export default App;
