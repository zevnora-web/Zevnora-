const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("orderForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());

  const message = [
    "🌐 ZEVNORA — NEW WEBSITE REQUEST",
    "",
    `👤 Name: ${data.name}`,
    `🏢 Business / Website Name: ${data.business}`,
    `📱 Customer WhatsApp: ${data.whatsapp}`,
    `💻 Website Type: ${data.type}`,
    `💰 Preferred Package: ${data.package}`,
    "",
    "📝 Requirements:",
    data.requirements || "Not specified"
  ].join("\n");

  // Your WhatsApp number in international format (India).
  const ownerNumber = "918439788538";
  const whatsappUrl = "https://api.whatsapp.com/send?phone=" +
    ownerNumber + "&text=" + encodeURIComponent(message);

  // Open WhatsApp directly. Do not show the old demo-mode toast.
  window.open(whatsappUrl, "_blank");
});
