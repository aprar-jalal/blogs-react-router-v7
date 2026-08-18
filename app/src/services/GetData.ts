import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import {db} from "../../firebase"
export async function getBlogs(){
   const collectionRef= collection(db,"blogs");
   const snapshot= await getDocs(collectionRef);
   return snapshot.docs.map((doc)=>({
    id:doc.id,
    ...doc.data()
   }))
}

export async function getBlogById(blogId:string){
  const blogRef = doc(db,"blogs",blogId);
  const snapshot = await getDoc(blogRef);
  if (!snapshot.exists()) {
    throw new Response("Blog Not Found", { status: 404 });
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}