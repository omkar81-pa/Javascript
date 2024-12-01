
document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".toggle-icon");
  
    toggles.forEach(toggle => {
      toggle.addEventListener("click", () => {
        const target = document.querySelector(toggle.dataset.bsTarget);
        const isActive = target.classList.contains("show");
  
        // Cerrar todos los demás paneles y restablecer sus SVG
        document.querySelectorAll(".accordion-collapse").forEach(panel => {
          if (panel !== target) {
            panel.classList.remove("show");
            panel.previousElementSibling.querySelector(".toggle-icon").innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
                <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
              </svg>`;
          }
        });
  
        // Alternar el estado del panel actual
        target.classList.toggle("show");
  
        // Cambiar el SVG del panel actual basado en su estado
        if (isActive) {
          toggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
              <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
            </svg>`;
        } else {
          toggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
              <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>
            </svg>`;
        }
      });
    });
  });
  
