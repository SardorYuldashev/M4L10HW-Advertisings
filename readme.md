# ADVERTISINGS API

Turli xil internet do'konlarda amal qilayotgan chegirmalarni ko'rsatib boruvchi API.

Bunda sotuvchilar o'z maxsulotlarini qaysi do'konda qancha chegirma bilan sotayotganini e'lon qilishadi va promo-kodlarni ko'rsatadi.

Xaridorlar esa o'ziga kerak maxsulotni qaysi do'kondan arzonroqqa olishi mumkinligini bilib oladi.

## Kategoriyalar uchun

|Method|url|description|
|---|---|---|
| POST | /category | Yangi kategoriy yaratish |
| GET | /category | Kategoriyalar ro'yxatini olish |
| GET | /category/:id | Bitta kategoriya ma'lumotini olish |
| PATCH | /category/:id | Kategoriyani tahrirlash |
| DELETE | /category/:id | Kategoriyani o'chirish |

## Reklamalar uchun

|Method|url|description|
|---|---|---|
| POST | /advertising | Yangi reklama yaratish |
| GET | /advertising | Reklamar ro'yxatini olish |
| GET | /advertising/:id | Bitta reklama ma'lumotini olish |
| PATCH | /advertising/:id | Reklamani tahrirlash |
| DELETE | /advertising/:id | Reklamani o'chirish |