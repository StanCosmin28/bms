// async function testFetchArticles() {
//   try {
//     const response = await fetch(
//       "https://raw.githubusercontent.com/StanCosmin28/bms/945b2ed905b948d814048b0268dd491ffcdb6391/src/Posts/domainsData.js?t=" +
//         Date.now()
//     );
//     if (!response.ok) {
//       throw new Error("Eroare la încărcarea fișierului");
//     }
//     const text = await response.text();

//     // Înlocuim 'export default articles;' cu '' pentru a elimina sintaxa de modul
//     const cleanedText = text.replace("export default articles;", "");

//     // Evaluăm textul pentru a obține array-ul articles
//     const articles = eval(cleanedText + "; articles;");

//     // Afișăm datele în consolă
//     console.log("Datele primite:", articles);
//     console.log("Primul articol:", articles[0]);
//   } catch (error) {
//     console.error("Eroare:", error);
//   }
// }

// testFetchArticles();
