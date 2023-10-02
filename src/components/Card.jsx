import { useNavigate } from "react-router-dom";

export default function Card({ image, header, content }) {
  const navigate = useNavigate()
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ml-4 w-[400px]">
      <img src={image}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{header}</div>
        <p className="text-gray-700 text-base">{content}</p>
        <a href="DetailArtikel" class="no-underline hover:underline text-blue-600">
          Baca Selengkapnya
        </a>
      </div>
    </div>
  );
}
