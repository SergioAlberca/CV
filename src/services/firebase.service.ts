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

export function getCvFile(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    storage
      .ref(url)
      .getDownloadURL()
      .then((url) => {
        resolve(url);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getImagePorfile(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    storage
      .ref(url)
      .getDownloadURL()
      .then((url) => {
        resolve(url);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function setNotification(data: any): Promise<any> {
  return new Promise((resolve, reject) => {
    firestore
      .collection("data")
      .doc("notifications")
      .update({
        notifications: firebase.firestore.FieldValue.arrayUnion({
          message: data.message,
          subject: data.subject,
          nameSender: data.nameSender,
          emailSender: data.emailSender,
          date: data.date,
        }),
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
