const passwordInput = document.getElementById("password");

if (passwordInput) {
  passwordInput.addEventListener("input", function () {
    formatDate(this);
  });
}

function formatDate(input) {
  let value = input.value.replace(/\D/g, "");
  value = value.substring(0, 6);

  if (value.length > 4) {
    value =
      value.substring(0, 2) + "/" +
      value.substring(2, 4) + "/" +
      value.substring(4, 6);
  } else if (value.length > 2) {
    value = value.substring(0, 2) + "/" + value.substring(2, 4);
  }

  input.value = value;
}

function checkPassword() {
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (password === "28/11/68") {
    error.style.color = "#ff4f8b";
    error.innerText = "อ้วนๆจำได้ไง เก่งมาก!! 💗";

    window.location.href = "main.html";
  } else {
    error.style.color = "red";
    error.innerText = "อ้วนๆพิมพ์ผิด 🥺";
  }
}

function updateLoveTime() {
  const startDate = new Date(2025, 10, 28, 0, 0, 0);
  const now = new Date();
  let diff = Math.max(0, now - startDate);

  const secondsTotal = Math.floor(diff / 1000);
  const days = Math.floor(secondsTotal / 86400);
  const hours = Math.floor((secondsTotal % 86400) / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = secondsTotal % 60;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (daysEl && hoursEl && minutesEl && secondsEl) {
    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
  }
}

function startLoveCounter() {
  const hasCounter = document.getElementById("days");
  if (!hasCounter) return;

  updateLoveTime();
  setInterval(updateLoveTime, 1000);
}

function initNotePage() {
  const noteTextarea = document.getElementById("noteText");
  if (!noteTextarea) return;

  const savedNote = localStorage.getItem("galleryNote") || "";
  noteTextarea.value = savedNote;

  noteTextarea.addEventListener("input", () => {
    localStorage.setItem("galleryNote", noteTextarea.value);
  });
}

const galleryStart = 50;
const gallerySlidesCount = 35;

// กำหนดคำอธิบายทีละรูปทั้ง 35 รูปที่นี่
const galleryCaptions = [
  "รูปแรกที่เราถ่ายด้วยกันเลย เค้าดีใจมากนะที่เธอมา เพราะเป็นครั้งแรกที่เราได้เจอกันจริงๆ ดอกไม้ช่อนี้เค้ายังเก็บไว้อย่างดีเลย",
  "อันนี้กินข้าวด้วยกันมื้อแรก อ้วนๆทำงานมาเหนื่อยๆ ต้องมานั่งรอเค้าขับรถมาหาอีก นานมาก แต่พอได้กินข้าวด้วยกันแล้วหายเหนื่อยเลยเนอะ",
  "รูปนี้เราไปเที่ยวด้วยกันครั้งแรก เพราะแก้มแก้มบอกว่าชอบงานนี้มาก",
  "รูปแรกที่เค้าถ่ายให้เธอ",
  "ไปเที่ยวกับครอบครัวเธอครั้งแรก ตอนแรกบอกไปสระบุรี แต่สุดท้ายไปโผล่ราชบุรีแทน แต่วันนั้นสนุกมาก ได้ไปหลายๆที่เลย แล้วเป็นครั้งแรกที่ได้ไปเที่ยวกับครอบครัวเธอด้วย",
  "ไปโรงหนังด้วยกันครั้งแรก แล้วก็เป็นอนิเมะเรื่องแรกของเค้าด้วย",
  "เค้าขับรถไปส่งเธอดูคอนเสิร์ต serious bacon แก้มยิ้มไม่หุบเลย",
  "ของขวัญชิ้นแรกที่เค้าให้เธอ ตอนนี้เธอกอดจนน้องหมาแบนไปหมดแล้ว",
  "เค้าไปหาเธอครั้งแรก ต่างคนต่างทำตัวไม่ถูก",
  "อันนี้เราไปเที่ยวระยองด้วยกันสองคน แล้วไปกินข้าวด้วยกัน แล้วก็กลายเป็นร้านโปรดเราทั้งคู่ไปเลย",
  "รรูปนี้เค้าชอบมาก เค้ารู้ว่าเธอชอบดอกไม้เลยอยากพาเธอไปที่นี่มากๆ พอไปแล้วก็ไม่ผิดหวัง มันสวยมากๆเลยเนอะ",
  "ยิ้มไม่หุบกันทั้งคู่ ถึงจะเหนื่อยแต่มีอ้วนๆ เค้าก็ไหวอยู่แล้ว",
  "ไหนๆก็มาแล้ว ก็ซื้อให้อ้วนๆไปเลย สวยมาก แถมไม่แพงด้วย",
  "อีกหนึ่งที่ ที่อ้วนชอบมากๆ เขาแหลมหญ้า วันแรกที่เราไปฝนก็ตกปรอยๆ แต่บรรยากาศดีมากๆ เค้าชอบมากมันดูสวยไปหมดทุกมุมเลย โดยเฉพาะถ้ามุมนั้นมันมีแก้มอยู่ด้วย",
  "ดูหน้าเธอสิ ไม่มีคำว่าเหนื่อยเลย ทั้งๆที่เดินมาไกลขนาดนี้แถมยังต้องปีนหินขึ้นมาบนเขาอีก",
  "พุงตอนนั้นกับพุงตอนนี้ บอกได้เลยเราพัฒนากันมาไกลเนอะ",
  "กลับมาถึงห้องก็มีเค้าคอยเป่าผมให้เธอทุกวัน เค้าอยากให้อ้วนๆไปพักผ่อนเล่น ทรศ เค้าอยากให้อ้วนๆได้นั่งพักสบายๆ",
  "เรานอนกอดกันได้ทุกคืน ถ่ายรูปด้วยกันได้ทั้งวันเลยเนอะ",
  "อ้วนๆอยากไปนั่งริมทะเล หาอะไรทำกัน เลยจบที่นั่ง paint สีน้อง kitty กัน มีความสุขเนอะ",
  "ผลงานของเรา ไม่เหมือนใคร และไม่มีใครเหมือนเลยเนอะ แก้มแก้มเก่งมาก",
  "ผมพร้อมเดินป่าแล้วครับ",
  "ขับรถมาตั้งไกล เดินแค่ไม่กี่โล คงจะไม่เท่าไหร่หรอกเนอะ แค่แผลเต็มตัว กล้ามเนื้อแทบขาด แต่วิวสวยมาก",
  "กว่าจะมาถึงจุดนี้ได้ ล้มลุกคลุกคลาน เพราะมีคนดื้อที่ไหนไม่รู้ รีบอยากเล่นน้ำ",
  "อ้วนๆต้องมาทำงานในกรุงเทพ เค้าไปรับมาจากระยอง แล้วจำได้ว่าเค้าต้องขับเลยไปเอาของมาให้อ้วนๆ ไกลแค่ไหนก็ไม่ใช่ปัญหา ถ้าแฟนเค้าต้องใช้ เค้าไปได้หมดอยู่แล้ว",
  "ถึงวันรับปริญญาจริงแล้ว เราได้มารับด้วยกัน ไม่รู้ว่ามันควรดีใจมั้ยนะ แต่มันก็ทำให้ความรู้สึกแย่ของเค้าหายไปหมดเลยที่ไม่ได้รับพร้อมเพื่อน ขอบคุณแก้มๆนะ",
  "วันจริงได้ถ่ายกับป๊ากับแม่แก้มด้วย ถ่ายกันครบเลยเนอะ",
  "รูปนี้เค้าถ่ายให้อ้วนสวยมาก ดูตะเร๊ก น่ารัก",
  "หลังจากรับปริญญาเสร็จแล้วที่บ้านเธอพาไปกินข้าว ดีใจมากที่เมฆได้ไปด้วย น้องมันเหมือนได้เปิดโลกใหม่ๆเหมือนกัน ปกติอยู่แต่เชียงใหม่ ไม่ได้กินข้าวครอบครัวใหญ่แบบนี้",
  "เค้าไปหาเธอทุกๆครั้งที่มีโอกาส ไม่ว่าจะต้องขับรถไกล หรือรอรถนั่งรถนานแค่ไหน เค้าก็อยากจะไปหาเธอ เพราะเธอคือความสุขที่เค้ามี",
  "เราได้ถ่ายรูปรับปริญาด้วยกัน ถ่ายเป็นคู่ด้วย เค้าดีใจมาก แล้วก็ชอบรูปคู่ของเรามากเลยนะ",
  "อ้วนๆอยากไปซ้ำที่เขาแหลมหญ้า เค้าก็อยากพาอ้วนไปรั่งรับลมชมวิว ใช้เวลาด้วยกันบ่อยๆ แต่ช่วงนี้อาจจะไม่ค่อยมีเวลาแล้ว",
  "ปีใหม่เราก็ได้ไปเที่ยวเชียงใหม่ด้วยกัน ขอบคุณแก้ม ขอบคุณป๊ากับแม่กับกายด้วยนะคับที่อุตส่าห์ขับรถจากพะเยามาเชียงใหม่เพื่อมารับเค้า แต่ก็ได้พาป๊ากับแม่ไปเที่ยวด้วยกันเนอะ",
  "จุ๊บของอ้วนๆ เติมกำลังใจดีที่สุดเลย",
  "กินข้าวด้วยกันทุกมื้อ ยิ้มพุงป่องกันทุกมื้อเลยเนอะ",
  "ถ่ายรูปกันไม่รู้ตั้งกี่รูปแหนะ เค้ายังอยากถ่ายรูปกับอ้วนๆเพิ่มอีกเยอะๆเลยนะ"
];

const gallerySlides = galleryCaptions.map((caption, index) => ({
  src: `image/${String(galleryStart + index).padStart(3, "0")}.jpg`,
  caption
}));

let currentSlide = 0;

function initGallery() {
  const slidesContainer = document.querySelector(".slides");
  if (!slidesContainer) return;

  gallerySlides.forEach((item, index) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `
      <img src="${item.src}" alt="รูป ${index + 1}">
      <div class="slide-caption">${item.caption}</div>
    `;
    slidesContainer.appendChild(slide);
  });

  document.getElementById("prevBtn").addEventListener("click", prevSlide);
  document.getElementById("nextBtn").addEventListener("click", nextSlide);

  updateGallery();
}

function updateGallery() {
  const slidesContainer = document.querySelector(".slides");
  const slideIndex = document.getElementById("slide-index");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const finalNext = document.getElementById("final-next");

  if (!slidesContainer || !slideIndex || !prevBtn || !nextBtn || !finalNext) return;

  slidesContainer.style.transform = `translateX(-${currentSlide * 100}% )`;
  slideIndex.innerText = `${currentSlide + 1} / ${gallerySlides.length}`;
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === gallerySlides.length - 1;

  if (currentSlide === gallerySlides.length - 1) {
    finalNext.classList.add("show");
  } else {
    finalNext.classList.remove("show");
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide -= 1;
    updateGallery();
  }
}

function nextSlide() {
  if (currentSlide < gallerySlides.length - 1) {
    currentSlide += 1;
    updateGallery();
  }
}

startLoveCounter();
initGallery();
initNotePage();