import React, { useState } from "react";
import Nav from "../components/Nav";
import CardContainer from "../components/CardContainer";
// import { v4 } from "uuid";
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { auth, db, storage } from "../utils/firebase";
import { useSelector } from "react-redux";
import { updateProfile } from "firebase/auth";

const Details = () => {
  const [track, setTrack] = useState(null);
  const userData = useSelector((store)=>store.user)
  const handleTracker = async () => {
    //to upload image to storage
    // const val = v4();
    // const imgRef = ref(storage, `files/${val}`);
    // uploadBytes(imgRef, img);

    try {
      const docRef = await addDoc(collection(db, `tracker`), {
        // TitleOfBook: title,
        // Author: author,
        // Discription: desc,
        // Rating: rate,
        // ImgVal: val,
        // instaId: ig,
        track:track,
        time:Date.now(),
        userId: userData.userId,
        // profileImg: userData.profilePic,
        userName: userData.userName
      });

      await updateDoc(docRef, {
        uId: docRef.id,
      });
    } catch (e) {
      prompt("Error adding document: ", e);
    }
  };

  return (
    <>
      <Nav />
      <div className="m-24 items-center justify-center flex">
        <div className="w-full md:w-2/3 ">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="name"
          >
            Enter Your Blood Sugar Level
          </label>
          <input
            onChange={(e) => setTrack(e.target.value)}
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Enter"
            id="name"
          ></input>
        </div>
        <button onClick={handleTracker}>Add</button>
      </div>
      <CardContainer />
    </>
  );
};
export default Details;
