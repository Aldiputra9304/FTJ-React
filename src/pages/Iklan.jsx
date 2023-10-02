import { useState } from "react";

import logo from "../assets/logo1.png";
import gambar from "../assets/gambar1.png";
import card from "../assets/card.png";
import Card from "../components/Card";
import gambar2 from "../assets/gambar2.png";
import detail from "../assets/detailartikel.png";

function Iklan() {
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
        
      <footer className="bg-primary p-4 text-white mt-10 ">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Nama Perusahaan. All Rights Reserved.</p>
        </div>
      </footer>
    </body>
  );
}



export default Iklan;
