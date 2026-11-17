const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const projectDetails = {
  furniture: {
    type: "EXCEL • SALES DASHBOARD",
    title: "Furniture Sales Analytics",
    description: "A practice dashboard designed to explore furniture sales performance across products and localities.",
    bullets: ["Organize and clean customer, product and transaction records.", "Summarize sales by product, locality, payment mode and month.", "Use Pivot Tables, charts and KPI cards to make trends easier to understand."]
  },
  insurance: {
    type: "EXCEL • INSURANCE MIS",
    title: "Insurance Policy Analytics",
    description: "A practice MIS report for reviewing policy activity, premium information, declined records and associate-level quality.",
    bullets: ["Track policy counts and premium trends across reporting periods.", "Review declined policies and categorize decline reasons.", "Compare associate-level volumes, errors and quality indicators."]
  },
  attendance: {
    type: "EXCEL • WORKFORCE REPORTING",
    title: "Employee Attendance Dashboard",
    description: "A workforce reporting project that turns attendance records into a simple monthly overview.",
    bullets: ["Calculate attendance and absence indicators.", "Summarize leave patterns and week-off information.", "Present monthly trends with Pivot Tables and charts."]
  }
};
const modal = document.getElementById("projectModal");
document.querySelectorAll(".project-open").forEach(button => {
  button.addEventListener("click", () => {
    const item = projectDetails[button.dataset.project];
    document.getElementById("modalType").textContent = item.type;
    document.getElementById("modalTitle").textContent = item.title;
    document.getElementById("modalDescription").textContent = item.description;
    document.getElementById("modalBullets").innerHTML = item.bullets.map(text => `<li>${text}</li>`).join("");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
document.querySelector(".modal-close").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });
