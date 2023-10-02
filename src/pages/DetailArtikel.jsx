import { useState } from "react";


import logo from "../assets/logo1.png";
import gambar from "../assets/gambar1.png";
import card from "../assets/card.png";
import Card from "../components/Card";
import gambar2 from "../assets/gambar2.png";
import detail from "../assets/detailartikel.png";

function DetailArtikel() {
  const [count, setCount] = useState(0);

  return (
    <body>
      <nav className="bg-white-800 p-4 shadow-xl">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <img src={logo} className="ml-4" />
            <div className="hidden md:flex">
              <button className="rounded-lg border-2  border-primary text-primary p-2">Masuk</button>
              <button className="rounded-lg border bg-primary p-2 ml-3 text-white mr-3 p-2">Daftar</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-[80px] flex flex-col mt-20">
        <section class=" flex flex-row">
          <img src={detail} className="w-[1900px] h-[340px]"></img>
        </section>
        <div className="mt-6 font-bold text-3xl">
          <h3 className="font-medium">Ciri-ciri Hipertensi, Penyakit Darah Tinggi yang Bisa Menyerang Usia Muda</h3>
          <p className="text-center text-base font-semibold mt-3">oleh Intan Hapsari</p>
          <p className="text-center text-sm font-thin mt-3">Rabu 23 Agustus 2023</p>

          <p className="leading-relaxed leading-8 text-justify font-normal text-xl">

            Kebanyakan orang mengira penyakit hipertensi atau tekanan darah tinggi hanya bisa terjadi pada orang usia lanjut. Padahal, kondisi ini juga sangat rentan dialami oleh kelompok usia muda.<br></br>

            Spesialis jantung dan pembuluh darah dr Faris Basalamah, SpJP(K), menjelaskan hipertensi pada usia muda kerap dipicu adanya faktor genetik atau keturunan. Namun, kondisi ini bisa diperparah dengan gaya hidup yang kurang sehat.<br></br>

            "Ya itu gaya hidup berpengaruh, walaupun
            memang hipertensi harus ada faktor genetiknya juga," kata dr Faris saat ditemui di Jakarta Selatan, Selasa (22/8/2023).<br></br>

            "Ditambah faktor-faktor yang menyokong hipertensi, seperti gaya hidup kurang gerak, konsumsi garam tinggi,
            hingga konsumsi alkohol," sambung dia. <br></br>
            
            Untuk mengantisipasinya, kebanyakan orang pasti memperhatikan gejala yang mungkin muncul. Tetapi, dr Faris mengungkapkan penyakit hipertensi ini bisa saja terjadi meski tidak ada gejala
            yang terlihat.<br></br>

             Dia menjelaskan gejala pada hipertensi bisa muncul setelah adanya komplikasi. Meski begitu, ada gejala yang paling sering terjadi pada banyak orang, yakni sakit kepala. <br></br>

             "Di awal-awal orang mengeluh sakit kepala,
            kemudian orang minum obat sakit kepala aja, nggak pernah ngecek. Lama-lama tubuhnya terbiasa," beber dr Faris. <br></br>

             "Nah sakit kepalanya mungkin sudah terbiasa, tapi efek jangka panjang yang disebabkan tekanan darah tinggi terus
            menerus bisa terjadi.<br></br>

             Dan itu sewaktu-waktu bisa menyebabkan stroke, serangan jantung, dan lain-lain," lanjutnya. Adapun gejala lain yang bisa muncul tanpa disadari sebagai tanda dari penyakit hipertensi, seperti: Sakit kepala
            yang sering muncul Tegang di leher Cepat capek atau lelah Ngos-ngosan<br></br>
          </p>
        </div>
         </div>
      <footer className="bg-primary p-4 text-white mt-10 ">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Nama Perusahaan. All Rights Reserved.</p>
        </div>
      </footer>
    </body>
  );
}

export default DetailArtikel;
