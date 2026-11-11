# 🎮 3D Multiplayer Web Game & Space

> Three.js, Node.js, Socket.io va MongoDB yordamida yaratilgan to'liq stekli (Full-Stack) 3D multiplayer veb-o'yin va virtual makon.

![Tech Stack](https://img.shields.io/badge/Tech-Three.js%20%7C%20Node.js%20%7C%20Socket.io%20%7C%20MongoDB-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🌟 Loyiha Haqida

Ushbu loyiha zamonaviy veb-texnologiyalar yordamida brauzerda hech qanday qo'shimcha o'rnatishlarsiz ishlaydigan interaktiv 3D muhitni yaratish maqsadida ishlab chiqilgan. Foydalanuvchilar sahnaga kirib, 3D qahramonni boshqarishi, boshqa o'yinchilarni real vaqtda ko'rishi va o'z pozitsiyalarini ma'lumotlar bazasida saqlab qolishi mumkin.

---

## 🚀 Asosiy Imkoniyatlar

* **3D Qahramon Boshqaruvi (WASD & Camera):** Qahramonni klaviatura orqali harakatlantirish va sichqoncha yordamida kamerani 360° erkin aylantirish (Sferik koordinatalar asosida).
* **Animatsiyalar Suxronizatsiyasi:** `THREE.AnimationMixer` yordamida yurish (*Walk*) va turish (*Idle*) holatlari o'rtasida silliq o'tishlar.
* **To'qnashuvni Aniqlash (Collision Detection):** `THREE.Box3` yordamida bir nechta devorlar va to'siqlardan o'tib ketmaslik mantiqi.
* **Real-Time Multiplayer:** Socket.io orqali bir nechta foydalanuvchilarning harakatlarini (*Player Movement*) bir-biriga kechikishlarsiz uzatish.
* **Ma'lumotlar Bazasi (Persistence):** Node.js, Express va MongoDB (Mongoose) yordamida foydalanuvchining oxirgi koordinatalarini saqlash va tiklash (REST API) imkoniyati.

---

## 🧰 Texnologiyalar Steki

* **Frontend:** HTML5, JavaScript (ES6+ Modules), Three.js (WebGL), GLTFLoader, CDN.
* **Backend:** Node.js, Express.js, Socket.io.
* **Ma'lumotlar Bazasi:** MongoDB, Mongoose.
* **Versiyalarni Boshqarish:** Git / GitHub.

---

## ⚙️ O'rnatish va Ishga Tushirish (Installation)

Loyihani o'z kompyuteringizda ishga tushirish uchun quyidagi qadamlarni bajaring:

### 1. Repozitoriyani ko'chiring
```bash
git clone [https://github.com/USERNAME/REPOSITORY_NAME.git](https://github.com/USERNAME/REPOSITORY_NAME.git)
cd REPOSITORY_NAME
