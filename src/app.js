/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
//};
function DomainGenerator() {
  let pronoun = ["the", "our", "his"];
  let adj = ["great", "big", "amazing"];
  let noun = ["jogger", "racoon", "cat", "hedgegog", "chihuahua"];
  let extensions = [".com", ".net", ".us", ".mx", ".ca", ".io"];

  let generator = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let ext = 0; ext < extensions.length; ext++) {
          generator.push(pronoun[i] + adj[j] + noun[k] + extensions[ext]);
        }
      }
    }
  }
  return generator;
}
console.log(DomainGenerator());
