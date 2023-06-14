import { useState } from "react";
import db from "../config/firebase";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TopCard } from "../components/topcard";

export function Potraits() {
  //   const { product } = useParams();
  const navigate = useNavigate();

  const [clothsList, setclothsList] = useState([]);
  const [lastDocuments, setlastDocuments] = useState(null);
  const [isEmpty, setisEmpty] = useState(false);
  const [hasmore, sethasmore] = useState(true);
  const [loading, setloading] = useState(false);
  const [empty, setempty] = useState(false);

  useEffect(() => {
    setloading(true);
    setempty(false);
    db.collection("Ogunz").where("category", "==", "Portraits")
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return { ...cloths.data(), id: cloths.id };
        });
        const lastDoc = collections.docs[collections.docs.length - 1];
        setclothsList(cloths);
        setlastDocuments(lastDoc);
        setloading(false);
        if (cloths.length === 0) {
          setempty(true);
        }
      });
  }, []);
  

  return (
    <div className="text-[#000009] bg-[#C2CEDA]">
      <div className="flex flex-col items-center lg:top-[13%] pt-[70px] lg:z-[-1]">
      <h1 className="text-[3rem] font-bold">Portraits</h1>
        <div className="mb-[5rem] flex flex-wrap gap-3 w-[90vw] items-center justify-center mt-[1rem]">
          {clothsList.map((post, index) => {
            return (
              <div key={index} className="max-w-4xl">
                <TopCard post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
