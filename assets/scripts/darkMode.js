


 // Sélectionnez l'élément de liste déroulante et le corps de la page
 let toggleDarkMode = document.getElementById("toggle-darkmode");
 let body = document.body[0];

 // Écoutez les changements de sélection
 toggleDarkMode.addEventListener("change", () => {

   // Si "Dark Mode" est sélectionné, ajoutez la classe "dark-mode" au corps, sinon, supprimez-la
   if (toggleDarkMode.value === "dark") {
     body.classList.add("dark-mode");
   } else {
     body.classList.remove("dark-mode");
   }
 });