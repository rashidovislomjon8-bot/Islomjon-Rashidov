const form = document.getElementById("contactForm");
const status = document.getElementById("status");

if (form && status) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      subject: document.getElementById("subject").value.trim(),
      message: document.getElementById("message").value.trim(),
    };

    if (!data.name || !data.email || !data.subject || !data.message) {
      status.textContent = "Iltimos, barcha maydonlarni to'ldiring.";
      status.className = "err";
      return;
    }

    console.log("Yuborilayotgan ma'lumot:", data);

    status.textContent = "Xabaringiz muvaffaqiyatli yuborildi! ✅";
    status.className = "ok";
    form.reset();
  });
}
const cards = document.querySelectorAll(".carousel-track .card");
const prevBtn = document.querySelector(".nav-arrow.left");
const nextBtn = document.querySelector(".nav-arrow.right");
const dots = document.querySelectorAll(".dot");
const memberName = document.querySelector(".member-name");
const memberRole = document.querySelector(".member-role");

const teamMembers = [
  { name: "MuhammadAmin", role: "PDP JUNIOR da o'qiydi" },
  { name: "Abdulloh", role: "PDP JUNIOR da a'lochi" },
  { name: "Abduqodir", role: "PDP JUNIOR da o'rtog'im" },
  { name: "Shoxruh", role: "Yaxshi guruhdoshim" },
  { name: "Abdurahmon", role: "PDP JUNIOR da o'qiydi" },
  { name: "Jahongir", role: "Mening guruhdoshim" },
];

let activeIndex = 0;

function updateCarousel() {
  const total = cards.length;

  cards.forEach((card, index) => {
    card.className = "card";

    let offset = (index - activeIndex + total) % total;

    if (offset === 0) {
      card.classList.add("center");
    } else if (offset === 1) {
      card.classList.add("right-1");
    } else if (offset === 2) {
      card.classList.add("right-2");
    } else if (offset === total - 1) {
      card.classList.add("left-1");
    } else if (offset === total - 2) {
      card.classList.add("left-2");
    } else {
      card.classList.add("hidden");
    }
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeIndex);
  });

  memberName.textContent = teamMembers[activeIndex].name;
  memberRole.textContent = teamMembers[activeIndex].role;
}

nextBtn.addEventListener("click", () => {
  activeIndex = (activeIndex + 1) % cards.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  activeIndex = (activeIndex - 1 + cards.length) % cards.length;
  updateCarousel();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    activeIndex = index;
    updateCarousel();
  });
});

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    activeIndex = index;
    updateCarousel();
  });
});

updateCarousel();
