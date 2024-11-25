import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  onSnapshotsInSync,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { database, storage } from "./firebaseApp.js";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

// create document
export const create = async (collectionName, data, customID) => {
  if (customID) {
    // if we set manually the custom id then we can use setDoc();
    await setDoc(doc(database, collectionName, customID), data);
  } else {
    await addDoc(collection(database, collectionName), data);
  }
};

// get all documents
export const find = async (collectionName) => {
  const data = await getDocs(collection(database, "category"));
  console.log(data);
  let db = [];
  data.forEach((item) => {
    console.log(item);
    db.push({ ...item.data(), id: item.id });
  });

  return db;
};

//get all documents by Real time data
export const findRT = async (collectionName, setData) => {
  onSnapshot(
    query(collection(database, collectionName), orderBy("created_at", "asc")),
    (snapShot) => {
      let data = [];
      console.log(snapShot.docs);
      snapShot.docs.forEach((cat) => {
        data.push({ ...cat.data(), id: cat.id });
      });
      setData(data);
    }
  );
};

// find by doc by id
export const findByID = async (collectionName, id) => {
  const db = await getDoc(doc(database, collectionName, id));
  return db.data();
};

// find by id and delete from collection
export const findByIDAndDelete = async (collectionName, id) => {
  const db = await deleteDoc(doc(database, collectionName, id));
  return db.data();
};

//find by id and update from collection
export const findByIDAndUpdate = async (collectionName, id, data) => {
  const db = await updateDoc(doc(database, collectionName, id), data);
  return db.data();
};

// upload file to database
export const uploadFile = async (name, file) => {
  const uploadFile = await uploadBytesResumable(ref(storage, name), file);
  const fileURL = await getDownloadURL(uploadFile.ref);
  return fileURL;
};
