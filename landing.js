/* =============================================================
   Nebula — Landing page interactions
   - Random slogan on every load
   - Smooth scroll for in-page anchors
   ============================================================= */

// Slogans that change on every refresh
const SLOGANS = [
  "Think clearer. Create faster.",
  "A quieter place to talk to AI.",
  "Reasoning, research, and code — one surface.",
  "Calm by design. Powerful by default.",
  "From a thought to a thread — instantly.",
  "Your glassy gateway to Gemini.",
  "Five modes. One workspace. Zero clutter.",
  "Less interface. More conversation.",
  "Where ideas and answers meet.",
  "Stream your thinking. Stream your answers.",
];

function pickSlogan() {
  const sloganEl = document.getElementById("slogan");
  if (!sloganEl) return;
  // Different index each load (changes every refresh)
  const idx = Math.floor(Math.random() * SLOGANS.length);
  sloganEl.textContent = SLOGANS[idx];
}

// Smooth-scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id && id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});

pickSlogan();
