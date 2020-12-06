import firebase from "firebase";
import { firestore, storage } from "../config/firebaseConfig";

export function getData(): Promise<any> {
  return new Promise((resolve, reject) => {
    firestore.collection("data").onSnapshot((snapshot) => {
      let data: firebase.firestore.DocumentData[] = [];
      snapshot.forEach((doc) => data.push(doc.data()));
      resolve(data);
    });
  });
}

export function getCvFile(): Promise<any> {
  return new Promise((resolve, reject) => {
    storage
      .ref("sergio-alberca-cv.pdf")
      .getDownloadURL()
      .then((url) => {
        resolve(url);
      }).catch(err => {
        console.log(err)
      });
  });
}

export function getImagePorfile(): Promise<any> {
  return new Promise((resolve, reject) => {
    storage
      .ref("Profile (1).jpg")
      .getDownloadURL()
      .then((url) => {
        resolve(url);
      }).catch(err => {
        console.log(err)
      });
  });
}

