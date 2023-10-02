import { useState } from "react";
import { useNavigate } from "react-router-dom";
import eror from "../assets/eror.png";
// import image from "../assets/icon-404.png";
// import { Button } from "../components/buttons/Button";

export default function ErorPage() {
  /**
   * Kelas tailwind untuk animasi
   */
  const [animationClass, setAnimationClass] = useState("");
  const navigate = useNavigate()

  return (
    <body className="fixed flex flex-row items-center justify-center w-screen h-screen ">
      <article className="container flex flex-col items-center justify-center bg-white rounded-xl w-fit h-fit px-[72px] py-[36px] shadow-sm border-4">
        <img src={eror} className="object-cover w-[260px] h-[260px]" />
        <h1 className="text-heading-2">Ups, sepertinya ada kesalahan.</h1>
        <p className="text-body">Halaman yang Anda cari tidak ditemukan!</p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-primary w-full h-fit text-neutral-100 rounded-xl mt-4 p-2 hover:scale-105"
        >
          Back
        </button>
      </article>
    </body>
  );
}
