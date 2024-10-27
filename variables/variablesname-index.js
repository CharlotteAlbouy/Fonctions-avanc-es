/*
  🐦 DAVID Bruno Twitter profile 🐦

  🏁 Please take this quick challenge and rename carefully all the variable, and fix this broken code by assigning the correct 
  variable keyword you have learned in the quest.
*/

// Déclaration du nom et du prénom
const firstName = "David"; // ✅ Good! 
const lastName = "Bruno"; // ✅ Correction de la déclaration manquante

// Biographie de David
const biography = "Hi, I'm David Bruno from SF, I like to cook and meet new people."; // ✅ Renommage explicite

// Image de profil
const profileImage = "http://www.go.com/davif.png"; // ✅ Renommage explicite et ajout de const

// Localisation
const location = "San Francisco"; // ✅ Renommage explicite et ajout de const

// Statistiques de suivi
let followersCount = 109; // ✅ Ajout de let pour permettre une modification éventuelle
let followingCount = 200; // ✅ Ajout de let pour permettre l'incrémentation

// 🏁 Exercise 02 - David is following one more account increment the total of following account
followingCount += 1; // ✅ Incrémentation de following

console.log(`Following count after increment: ${followingCount}`);
