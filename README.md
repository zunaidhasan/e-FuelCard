# 🇧🇩 e-FuelCard — ডিজিটাল জ্বালানী কার্ড সিস্টেম

> **বাংলাদেশ সরকারের ডিজিটাল ফুয়েল বরাদ্দ প্ল্যাটফর্ম — লাইন নেই, কাগজ নেই, ভোগান্তি নেই।**

[![Next.js](https://img.shields.io/badge/Next.js-16.x-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📋 সংক্ষিপ্ত পরিচয় (Overview)

**e-FuelCard** হলো বাংলাদেশের জ্বালানী তেল বরাদ্দ ব্যবস্থার সম্পূর্ণ ডিজিটাল সমাধান। এই প্ল্যাটফর্মের মাধ্যমে নাগরিকরা ঘরে বসেই ফুয়েল কার্ডের জন্য আবেদন করতে পারবেন, আবেদনের অবস্থা ট্র্যাক করতে পারবেন এবং একটি QR-কোড ভিত্তিক ডিজিটাল কার্ড ব্যবহার করে অনুমোদিত পাম্প থেকে সরাসরি তেল নিতে পারবেন। 

**DC অফিসে লাইনে দাঁড়ানোর দিন শেষ।**

---

## ✨ প্রধান ফিচারসমূহ (Features)

| ফিচার | বিবরণ |
|---|---|
| 🔐 **স্মার্ট লগইন** | মোবাইল নম্বর / এনআইডি দিয়ে OTP ভেরিফিকেশন |
| 🪪 **এনআইডি অটো-ভেরিফিকেশন** | ইলেকশন কমিশন ডাটাবেস সিমুলেশনের মাধ্যমে স্বয়ংক্রিয় তথ্য সংগ্রহ |
| 📝 **গাইডেড আবেদন ফর্ম** | ধাপে ধাপে আবেদন — মাত্র ৫-৭ মিনিটে সম্পন্ন |
| 📊 **রিয়েল-টাইম ট্র্যাকিং** | জমা → যাচাই → অনুমোদন → ইস্যু — প্রতিটি ধাপের লাইভ স্ট্যাটাস |
| 📲 **ডিজিটাল ফুয়েল কার্ড** | QR কোড সহ ই-কার্ড; PDF ডাউনলোড ও ওয়ালেটে সেভ করার সুবিধা |
| 🗺️ **ফুয়েল স্টেশন ম্যাপ** | নিকটবর্তী অনুমোদিত পাম্প স্টেশন খুঁজে বের করুন |
| 🌐 **দ্বিভাষিক সাপোর্ট** | বাংলা ও ইংরেজি উভয় ভাষায় সম্পূর্ণ ইন্টারফেস |

---

## 🖥️ স্ক্রিনসমূহ (Screens)

```text
/            → Landing & Login (NID/Phone + OTP)
/dashboard   → ব্যক্তিগত ড্যাশবোর্ড (ব্যালেন্স, স্ট্যাটাস, ম্যাপ)
/apply       → আবেদন উইজার্ড (৩ ধাপ)
/card        → ডিজিটাল ফুয়েল কার্ড (QR Code)
````

-----

## 🚀 ডেভেলপমেন্ট শুরু করুন (Getting Started)

### পূর্বশর্ত (Prerequisites)

  - [Node.js](https://nodejs.org) v18 বা তার উপরে
  - npm / yarn / pnpm

### ইনস্টলেশন (Installation)

```bash
# প্রজেক্ট ক্লোন করুন
git clone [https://github.com/your-username/e-fuelcard.git](https://github.com/your-username/e-fuelcard.git)
cd e-fuelcard

# ডিপেন্ডেন্সি ইনস্টল করুন
npm install

# ডেভেলপমেন্ট সার্ভার চালু করুন
npm run dev
```

ব্রাউজারে খুলুন → [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)

### Mock Credentials (প্রোটোটাইপ)

| Field | Value |
|---|---|
| NID / Mobile | যেকোনো ১০+ সংখ্যার নম্বর |
| OTP | `1234` |

-----

## 🗂️ প্রজেক্ট স্ট্রাকচার (Project Structure)

```text
src/
├── app/
│   ├── page.tsx          # লগইন পেজ
│   ├── dashboard/        # ড্যাশবোর্ড
│   ├── apply/            # আবেদন ফর্ম
│   └── card/             # ডিজিটাল কার্ড
├── components/
│   ├── auth/             # LoginView
│   ├── apply/            # ApplyWizard (multi-step)
│   ├── card/             # DigitalCard + QR Code
│   ├── dashboard/        # DashboardOverview, FuelStationMap
│   └── layout/           # Header, MobileLayout
└── lib/
    └── constants.ts      # Mock data & app constants
```

-----

## 🛠️ প্রযুক্তি স্ট্যাক (Tech Stack)

| প্রযুক্তি | ব্যবহার |
|---|---|
| **Next.js 16** (App Router) | Core framework |
| **TypeScript** | Type safety |
| **Vanilla CSS** | Custom design system |
| **qrcode.react** | QR Code generation |
| **lucide-react** | Icons |
| **react-leaflet** | Interactive map |
| **Google Fonts** | Inter + Hind Siliguri (Bangla) |

-----

## 🎨 ডিজাইন সিস্টেম (Design System)

| টোকেন | মান |
|---|---|
| Primary (Green) | `#006A4E` |
| Secondary (Gold) | `#F4B400` |
| Background | `#f8fafc` |
| Radius | `sm: 6px` / `md: 8px` / `lg: 12px` / `xl: 16px` |
| Font | Inter (EN) · Hind Siliguri (BN) |

-----

## 🗺️ ভবিষ্যৎ পরিকল্পনা (Roadmap)

  - [ ] বাস্তব এনআইডি API সংযোগ (BD Election Commission)
  - [ ] SMS নোটিফিকেশন (Twilio / BD সেবা)
  - [ ] Admin Panel (DC অফিসের জন্য)
  - [ ] পাম্প অপারেটর QR স্ক্যানার
  - [ ] ফুয়েল কোটা ট্রান্সফার
  - [ ] PWA সাপোর্ট (অফলাইন কার্ড)

-----

## 🤝 অবদান রাখুন (Contributing)

Pull Request সবসময় স্বাগতযোগ্য। বড় পরিবর্তনের আগে একটি Issue খুলুন এবং আলোচনা করুন।

-----

## 📄 লাইসেন্স (License)

[MIT](https://www.google.com/search?q=LICENSE) © 2026 e-FuelCard Contributors

-----

<div align="center"\>
<b\>ডিজিটাল বাংলাদেশ গড়ার লক্ষ্যে — Smart Government, Smart Citizens. Ⓒ Zunaid Hasan</b\>
</div\>

```
```
