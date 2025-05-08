document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menuToggle").addEventListener("click", function () {
        document.getElementById("mainMenu").classList.toggle("active");
    });
});
const forma4 = document.querySelector('.forma4');
const forma5 = document.querySelector('.forma5');

let currentY = 20;
let targetY = 20;
const speed = 0.9; 

function updateTarget() {
  const forma5Top = forma5.getBoundingClientRect().top + window.scrollY;
  targetY = window.scrollY - forma5Top + 20;
}

function animate() {
  updateTarget();
  currentY += (targetY - currentY) * speed;  
  forma4.style.transform = `translateY(${currentY}px)`;
  requestAnimationFrame(animate);
}

animate();

for (let i = 0; i <= 9; i++) {
  const btn = document.getElementById(`cyber-header-op${i === 0 ? '' : i}`);
  const header = document.getElementById(`cyber-header${i === 0 ? '' : i}`);
  
  if (btn && header) {
    btn.addEventListener('click', () => {
      header.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}
