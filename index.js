const harmbuger = document.getElementById("harmbuger");
const sidebar = document.querySelector(".sidebar");

harmbuger.addEventListener("click", function(){
    sidebar.classList.toggle("sidebar-visible")
})

