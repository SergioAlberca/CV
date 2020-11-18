import firebase from "firebase";
import { firestore } from "../config/firebaseConfig";

export function getData(): Promise<any> {
  return new Promise((resolve, reject) => {
    firestore.collection("data").onSnapshot((snapshot) => {
      let data: firebase.firestore.DocumentData[] = [];
      snapshot.forEach((doc) => data.push(doc.data()));
      resolve(data);
    });
  });
}

export function setSkills(): Promise<any> {
  return new Promise((resolve, reject) => {
    firestore
      .collection("data")
      .doc("skills")
      .set({
        data: [
          {
            languajes: [
              { label: "Html", percentage: "80%" },
              { label: "CSS", percentage: "70%" },
              { label: "JavaScript", percentage: "80%" },
              { label: "Java", percentage: "40%" },
              { label: "PHP", percentage: "50%" },
              { label: "MYSQL", percentage: "60%" },
            ],
            frameworks: [
              { label: "JQuery", percentage: "75%" },
              { label: "Node Js", percentage: "60%" },
              { label: "Angular", percentage: "90%" },
              { label: "Angular Js", percentage: "80%" },
              { label: "Ionic", percentage: "90%" },
              { label: "React", percentage: "90%" },
              { label: "React Native", percentage: "85%" },
              { label: "Vue Js", percentage: "70%" },
              { label: "Jekyll", percentage: "80%" },
              { label: "Laravel", percentage: "50%" },
              { label: "Slim", percentage: "50%" },
              { label: "Sass", percentage: "70%" },
              { label: "Less", percentage: "70%" },
              { label: "Bootstrap", percentage: "80%" },
            ],
            tools: [
              { label: "Redux" },
              { label: "Git" },
              { label: "Docker" },
              { label: "Jenkins" },
              { label: "Webpack" },
              { label: "Babel" },
              { label: "Visual Studio" },
              { label: "Sublime Text" },
              { label: "Netbeans" },
              { label: "PhpStorm" },
              { label: "Eclipse" },
              { label: "JIRA" },
              { label: "Scrum" },
              { label: "Npm" },
              { label: "Trello" },
            ],
          },
        ],
      });
  });
}
