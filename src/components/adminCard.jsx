import { auth } from "../config/firebase";
import {
  // getDoc,
  getDocs,
  collection,
  doc,
  addDoc,
  where,
  query,
  deleteDoc,
} from "firebase/firestore";
import db from "../config/firebase";



export function AdminCard(props) {

   const removePicture = async () => {
      try {
  
        const docRef = collection(db, "Ogunz");
        const CartToDeleteQuery = query(
          docRef,
          where("postId", "==", post?.id)
        );
  
        const CartToDeleteData = await getDocs(CartToDeleteQuery);
        const CartToDelete = doc(db, "Ogunz", post.id);
        await deleteDoc(CartToDelete);
        window.location.reload()
        console.log("DocumentDeleted");
        if (user) {
          setCart((prev) =>
            prev.filter((like) => like.saveId === CartToDeleteData?.docs[0].id)
          );
          console.log(Cart);
        }
      } catch (err) {
        console.log(err);
      }
    };
  
  const { post } = props;

  return (
    <div className="topcard w-[42vw] flex flex-col items-center rounded-[10px]">
    <div className="relative" onClick={() => {console.log("working")}}>
      <img
        src={post.images}
        alt="Product"
        className=""
      />

    </div>
    <button className="bg-red-500 py-[1rem] px-[2rem] text-[2rem]" onClick={() => {removePicture()}}>Delete</button>
        </div>
  );
}
