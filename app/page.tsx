"use client";

import React, { useState, useEffect } from "react";
import itcGroupPhoto from "./photo/Youth heart 05-2026-11.webp";
import classroomPhoto from "./photo/IMG_4111.jpg";
import donationPhoto from "./photo/photo_2026-05-28_10-57-46.jpg";
import schoolVisitPhoto from "./photo/Youth heart part5-06805.jpg";
import ruralStudentPhoto from "./photo/Youth heart part6-0277.jpg";
import {
  Heart,
  Sparkles,
  Camera,
  MapPin,
  BookOpen,
  Lightbulb,
  Users,
  History,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  X,
  Maximize2,
  Film,
  LayoutGrid,
  Layers,
  Award,
  Compass,
  GraduationCap,
  FolderOpen,
  Eye,
} from "lucide-react";

// ============================================================================
// 📸 [ដាក់រូបភាពរបស់អ្នកនៅទីនេះ / PUT YOUR PHOTOS HERE IN ONE PLACE!]
// ============================================================================
// Add photos to app/photo, import them above, then use their .src values below.
// ============================================================================

const USER_PHOTOS_CONFIG = {
  // Leave empty to use the built-in logo, or set a path such as "/images/logo.png".
  customLogoUrl: "",

  // ១. រូបភាពសម្រាប់ផ្នែកប្រវត្តិ និងដើមកំណើតនៅសាលាតិចណូ (ITC Origin Photos)
  originPhotos: [
    {
      id: "origin-main",
      codeVariable: "USER_PHOTOS_CONFIG.originPhotos[0].image",
      title:
        "ការរួមគ្នារបស់និស្សិតស្ម័គ្រចិត្ត វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC)",
      subtitle: "ដើមកំណើតនៃក្រុមការងារ បេះដូងយុវជន នៅសាលាតិចណូ",
      badge: "ដើមកំណើតនៅ ITC",
      // 👇 [ដាក់រូបភាពទី ១ នៅទីនេះ / PUT ORIGIN PHOTO #1 HERE] 👇
      image: itcGroupPhoto.src,
    },
    {
      id: "origin-sub",
      codeVariable: "USER_PHOTOS_CONFIG.originPhotos[1].image",
      title: "សកម្មភាពរៀបចំ និងវេចខ្ចប់សម្ភារសិក្សាមុនចេញបេសកកម្ម",
      subtitle: "កម្លាំងសាមគ្គីរបស់សមាជិកក្រុមការងារ បេះដូងយុវជន",
      badge: "ការត្រៀមបេសកកម្ម",
      // 👇 [ដាក់រូបភាពទី ២ នៅទីនេះ / PUT ORIGIN PHOTO #2 HERE] 👇
      image: donationPhoto.src,
    },
  ],

  // ២. រូបភាពសម្រាប់គោលបំណង និងសកម្មភាពចម្បងទាំង ៤ (4 Core Pillars Photos)
  pillarsPhotos: {
    pillar1: {
      id: "pillar-1",
      codeVariable: "USER_PHOTOS_CONFIG.pillarsPhotos.pillar1.image",
      // 👇 [ដាក់រូបភាពគោលបំណងទី ១៖ បេសកកម្មសប្បុរសធម៌តាមខេត្ត (Mission 25, 29)] 👇
      image: classroomPhoto.src,
    },
    pillar2: {
      id: "pillar-2",
      codeVariable: "USER_PHOTOS_CONFIG.pillarsPhotos.pillar2.image",
      // 👇 [ដាក់រូបភាពគោលបំណងទី ២៖ ការចែករំលែក និងជំនួយសម្ភារសិក្សា] 👇
      image: donationPhoto.src,
    },
    pillar3: {
      id: "pillar-3",
      codeVariable: "USER_PHOTOS_CONFIG.pillarsPhotos.pillar3.image",
      // 👇 [ដាក់រូបភាពគោលបំណងទី ៣៖ ការអប់រំ និងការបំផុសគំនិតដល់កុមារ] 👇
      image: classroomPhoto.src,
    },
    pillar4: {
      id: "pillar-4",
      codeVariable: "USER_PHOTOS_CONFIG.pillarsPhotos.pillar4.image",
      // 👇 [ដាក់រូបភាពគោលបំណងទី ៤៖ ការលើកកម្ពស់ស្មារតីសង្គមក្នុងចំណោមយុវជន ITC] 👇
      image: itcGroupPhoto.src,
    },
  },

  // ៣. កម្រងរូបភាពបេសកកម្មចាស់ៗ (Main Animated Gallery - Old Missions Showcase)
  // នេះជាផ្នែកសំខាន់បំផុតនៃ Website! អ្នកអាចដាក់រូបភាពពី Mission ទី២៥, ទី២៩ និងសកម្មភាពមុនៗនៅទីនេះ៖
  pastMissionGallery: [
    {
      id: "mission-photo-1",
      codeVariable: "USER_PHOTOS_CONFIG.pastMissionGallery[0].image",
      category: "mission29",
      missionTag: "បេសកកម្មទី២៩ • Mission 29",
      location: "តំបន់ដាច់ស្រយាល តាមបណ្តាខេត្ត",
      title: "បេសកកម្មសប្បុរសធម៌លើកទី២៩ របស់ក្រុមការងារ បេះដូងយុវជន",
      description:
        "ស្នាមញញឹមនៃការចុះជួយសហគមន៍ និងសាលារៀនដាច់ស្រយាល ដោយនាំយកនូវក្តីស្រឡាញ់ពីនិស្សិត ITC និងសប្បុរសជន។",
      // 👇 [ដាក់រូបភាពបេសកកម្មទី ១ នៅទីនេះ / PUT MISSION PHOTO #1 HERE] 👇
      image: classroomPhoto.src,
      featuredSize: "large",
    },
    {
      id: "mission-photo-2",
      codeVariable: "USER_PHOTOS_CONFIG.pastMissionGallery[1].image",
      category: "study",
      missionTag: "ចែកសម្ភារសិក្សា • Study Kits",
      location: "សាលាបឋមសិក្សាតាមជនបទ",
      title: "ការចែកជូនសៀវភៅ កាតាប និងសម្ភារសិក្សាដល់សិស្សានុសិស្សក្រីក្រ",
      description:
        "ប្រមូលការបរិច្ចាគថវិកា សម្ភារសិក្សា សៀវភៅ និងខោអាវ ដើម្បីចែកជូនដល់ដៃប្អូនៗសិស្សានុសិស្សផ្ទាល់។",
      // 👇 [ដាក់រូបភាពបេសកកម្មទី ២ នៅទីនេះ / PUT MISSION PHOTO #2 HERE] 👇
      image: donationPhoto.src,
      featuredSize: "normal",
    },
    {
      id: "mission-photo-3",
      codeVariable: "USER_PHOTOS_CONFIG.pastMissionGallery[2].image",
      category: "mission25",
      missionTag: "បេសកកម្មទី២៥ • Mission 25",
      location: "សហគមន៍ជនបទដាច់ស្រយាល",
      title: "អនុស្សាវរីយ៍បេសកកម្មមនុស្សធម៌លើកទី២៥",
      description:
        "ការចុះចែកគ្រឿងឧបភោគបរិភោគ និងសួរសុខទុក្ខគ្រួសារខ្វះខាតនៅតាមភូមិដាច់ស្រយាល។",
      // 👇 [ដាក់រូបភាពបេសកកម្មទី ៣ នៅទីនេះ / PUT MISSION PHOTO #3 HERE] 👇
      image: ruralStudentPhoto.src,
      featuredSize: "normal",
    },
    {
      id: "mission-photo-4",
      codeVariable: "USER_PHOTOS_CONFIG.pastMissionGallery[3].image",
      category: "education",
      missionTag: "ការអប់រំ & បំផុសគំនិត",
      location: "សាលារៀនតាមខេត្ត",
      title: "កម្មវិធីកម្សាន្ត ការអប់រំ និងបណ្តុះស្មារតីស្រឡាញ់ការសិក្សា",
      description:
        "បង្កើតភាពស្និទ្ធស្នាល ល្បែងសិក្សា និងផ្តល់ក្តីសង្ឃឹមដល់កុមារនៅតាមសាលារៀនដាច់ស្រយាល។",
      // 👇 [ដាក់រូបភាពបេសកកម្មទី ៤ នៅទីនេះ / PUT MISSION PHOTO #4 HERE] 👇
      image: classroomPhoto.src,
      featuredSize: "normal",
    },
    {
      id: "mission-photo-5",
      codeVariable: "USER_PHOTOS_CONFIG.pastMissionGallery[4].image",
      category: "volunteers",
      missionTag: "និស្សិតស្ម័គ្រចិត្ត ITC",
      location: "វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC)",
      title: "ការងារក្រុម (Teamwork) និងភាពជាអ្នកដឹកនាំរបស់យុវជន",
      description:
        "ឱកាសសម្រាប់និស្សិត ITC និងយុវជនទូទៅក្នុងការអនុវត្តការងារស្ម័គ្រចិត្ត និងពង្រឹងជំនាញទន់ (Soft Skills)។",
      // 👇 [ដាក់រូបភាពបេសកកម្មទី ៥ នៅទីនេះ / PUT MISSION PHOTO #5 HERE] 👇
      image: schoolVisitPhoto.src,
      featuredSize: "large",
    },
    {
      id: "mission-photo-6",
      codeVariable: "USER_PHOTOS_CONFIG.pastMissionGallery[5].image",
      category: "mission29",
      missionTag: "បេសកកម្មទី២៩ • Mission 29",
      location: "សហគមន៍តាមបណ្តាខេត្ត",
      title: "ការរួមចំណែកកែលម្អបរិស្ថានសាលា និងចែកអំណោយសប្បុរសធម៌",
      description:
        "សកម្មភាពរួមគ្នាដោយក្តីស្រឡាញ់រវាងក្រុមការងារបេះដូងយុវជន លោកគ្រូអ្នកគ្រូ និងសិស្សានុសិស្ស។",
      // 👇 [ដាក់រូបភាពបេសកកម្មទី ៦ នៅទីនេះ / PUT MISSION PHOTO #6 HERE] 👇
      image: itcGroupPhoto.src,
      featuredSize: "normal",
    },
    {
      id: "mission-photo-7",
      codeVariable: "USER_PHOTOS_CONFIG.pastMissionGallery[6].image",
      category: "study",
      missionTag: "គ្រឿងឧបភោគបរិភោគ",
      location: "ភូមិដាច់ស្រយាល",
      title: "ការចែកជូនគ្រឿងឧបភោគបរិភោគដល់គ្រួសារខ្វះខាត",
      description:
        "ជំនួយសប្បុរសធម៌រួមមានអង្ករ ស្បៀងអាហារ សម្លៀកបំពាក់ និងសម្ភារប្រើប្រាស់ប្រចាំថ្ងៃ។",
      // 👇 [ដាក់រូបភាពបេសកកម្មទី ៧ នៅទីនេះ / PUT MISSION PHOTO #7 HERE] 👇
      image: classroomPhoto.src,
      featuredSize: "normal",
    },
    {
      id: "mission-photo-8",
      codeVariable: "USER_PHOTOS_CONFIG.pastMissionGallery[7].image",
      category: "volunteers",
      missionTag: "គ្រួសារបេះដូងយុវជន",
      location: "បេសកកម្មតាមខេត្ត",
      title:
        "រូបភាពអនុស្សាវរីយ៍រួមគ្នានៃក្រុមការងារ បេះដូងយុវជន (Youth Heart Team)",
      description:
        "បេះដូងតែមួយ ដើម្បីស្នាមញញឹមកុមារ និងការអភិវឌ្ឍសហគមន៍ដាច់ស្រយាលនៅកម្ពុជា។",
      // 👇 [ដាក់រូបភាពបេសកកម្មទី ៨ នៅទីនេះ / PUT MISSION PHOTO #8 HERE] 👇
      image: schoolVisitPhoto.src,
      featuredSize: "normal",
    },
    {
      id: "mission-photo-9",
      codeVariable: "USER_PHOTOS_CONFIG.pastMissionGallery[8].image",
      category: "education",
      missionTag: "ការអប់រំ & បំផុសគំនិត",
      location: "សាលារៀនតាមខេត្ត",
      title: "ការចែករំលែកចំណេះដឹងជាមួយសិស្សានុសិស្ស",
      description:
        "សកម្មភាពសិក្សា និងការជួយគាំទ្រកុមារនៅក្នុងថ្នាក់រៀន។",
      image: classroomPhoto.src,
      featuredSize: "normal",
    },
    {
      id: "mission-photo-10",
      codeVariable: "USER_PHOTOS_CONFIG.pastMissionGallery[9].image",
      category: "volunteers",
      missionTag: "និស្សិតស្ម័គ្រចិត្ត ITC",
      location: "សាលារៀនតាមខេត្ត",
      title: "សកម្មភាពស្ម័គ្រចិត្ត និងការអប់រំកុមារ",
      description:
        "ក្រុមយុវជនស្ម័គ្រចិត្តចូលរួមបង្កើតបរិយាកាសសិក្សាដ៏រីករាយ។",
      image: schoolVisitPhoto.src,
      featuredSize: "normal",
    },
    {
      id: "mission-photo-11",
      codeVariable: "USER_PHOTOS_CONFIG.pastMissionGallery[10].image",
      category: "education",
      missionTag: "ការអប់រំ & បំផុសគំនិត",
      location: "សាលារៀនតាមខេត្ត",
      title: "ការណែនាំ និងលើកទឹកចិត្តសិស្សក្នុងថ្នាក់រៀន",
      description:
        "និស្សិតស្ម័គ្រចិត្តចូលរួមជួយណែនាំសិស្ស និងលើកទឹកចិត្តការសិក្សា។",
      image: classroomPhoto.src,
      featuredSize: "normal",
    },
    {
      id: "mission-photo-12",
      codeVariable: "USER_PHOTOS_CONFIG.pastMissionGallery[11].image",
      category: "volunteers",
      missionTag: "និស្សិតស្ម័គ្រចិត្ត ITC",
      location: "សកម្មភាពសហគមន៍",
      title: "ការចូលរួមរបស់ក្រុមការងារ បេះដូងយុវជន",
      description:
        "យុវជនស្ម័គ្រចិត្តរួមគ្នាចូលរួមក្នុងសកម្មភាពជាមួយសហគមន៍។",
      image: donationPhoto.src,
      featuredSize: "normal",
    },
    {
      id: "mission-photo-13",
      codeVariable: "USER_PHOTOS_CONFIG.pastMissionGallery[12].image",
      category: "mission29",
      missionTag: "បេសកកម្មសប្បុរសធម៌ • Charity Mission",
      location: "សហគមន៍តាមបណ្តាខេត្ត",
      title: "ដំណើរបេសកកម្មសប្បុរសធម៌របស់ក្រុមការងារ",
      description:
        "ការចុះជួបសហគមន៍ និងចែករំលែកក្តីស្រឡាញ់ជាមួយកុមារ និងគ្រួសារ។",
      image: ruralStudentPhoto.src,
      featuredSize: "normal",
    },
  ],
};

type LightboxPhoto = {
  image: string;
  title: string;
  codeVariable?: string;
  description?: string;
  location?: string;
  missionTag?: string;
  subtitle?: string;
  badge?: string;
};

// ============================================================================
// 🎨 YOUTH HEART TEAM LOGO COMPONENT (Matches Uploaded Blue/Red Heart Emblem)
// ============================================================================
const YouthHeartLogo = ({ className = "w-12 h-12", customUrl = "" }) => {
  if (customUrl) {
    return (
      <img
        src={customUrl}
        alt="Youth Heart Team Logo"
        className={`${className} rounded-full object-cover shadow-lg`}
      />
    );
  }

  return (
    <div
      className={`${className} rounded-full overflow-hidden shadow-lg shadow-[#4263A5]/30 shrink-0 select-none`}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Youth Heart Team Logo"
      >
        {/* Royal Blue Circle */}
        <circle cx="100" cy="100" r="98" fill="#46629E" />
        {/* White Inner Arch */}
        <path
          d="M 27 115 A 75 75 0 1 1 173 115"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="5"
        />
        {/* Left Male Silhouette */}
        <path
          d="M 55 62 C 45 62 42 74 44 85 C 45 94 49 99 49 104 C 49 108 35 112 24 118 L 22 138 L 54 138 L 58 118 C 63 112 72 108 77 106 L 68 103 C 68 98 71 92 72 84 C 73 72 68 62 55 62 Z"
          fill="#FFFFFF"
        />
        {/* Right Female Silhouette */}
        <path
          d="M 143 63 C 130 63 125 76 123 93 L 120 100 L 126 99 C 129 104 132 106 132 109 C 125 112 138 116 141 122 L 143 140 L 178 140 L 176 118 C 169 113 158 109 156 105 L 162 100 C 160 85 156 63 143 63 Z"
          fill="#FFFFFF"
        />
        {/* Center Youth Silhouette */}
        <path
          d="M 100 50 C 84 50 79 63 80 79 C 81 90 85 97 87 102 L 84 105 C 72 110 61 116 58 128 L 54 152 L 146 152 L 142 128 C 139 116 128 110 116 105 L 113 102 C 115 97 119 90 120 79 C 121 63 116 50 100 50 Z"
          fill="#FFFFFF"
        />
        {/* Double Red Heart in Center */}
        <path
          d="M 95 121 C 91 114 82 113 77 118 C 71 124 73 134 81 141 L 95 151 L 109 141 C 117 134 119 124 113 118 C 108 113 99 114 95 121 Z"
          fill="#C92A2A"
        />
        <path
          d="M 111 131 C 109 127 104 127 101 130 C 98 133 99 139 103 143 L 111 149 L 119 143 C 123 139 124 133 121 130 C 118 127 113 127 111 131 Z"
          fill="#FFFFFF"
          stroke="#C92A2A"
          strokeWidth="3.5"
        />
        {/* Youth Heart Team Text */}
        <text
          x="100"
          y="172"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="sans-serif"
          fontWeight="800"
          fontSize="18.5"
          letterSpacing="0.3"
        >
          Youth Heart Team
        </text>
      </svg>
    </div>
  );
};

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================
export default function App() {
  const originPhotos = USER_PHOTOS_CONFIG.originPhotos;
  const pillarsPhotos = USER_PHOTOS_CONFIG.pillarsPhotos;
  const galleryPhotos = USER_PHOTOS_CONFIG.pastMissionGallery;

  // Hero 3D Photo Stack active card index & auto-play
  const [heroActiveIndex, setHeroActiveIndex] = useState(0);
  const [isHeroPlaying, setIsHeroPlaying] = useState(true);

  // Gallery Filter & View Mode ('bento' | 'spotlight' | 'filmstrip')
  const [activeCategory, setActiveCategory] = useState("all");
  const [galleryViewMode, setGalleryViewMode] = useState("bento");
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [isFilmstripPaused, setIsFilmstripPaused] = useState(false);

  // Lightbox Modal state
  const [lightboxPhoto, setLightboxPhoto] = useState<LightboxPhoto | null>(
    null,
  );

  // Code Helper Modal state
  const [showCodeModal, setShowCodeModal] = useState(false);

  // Load Google Fonts (Kantumruy Pro & Koulen for authentic Khmer UI)
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Koulen&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  // Auto-advance Hero 3D Photo Stack
  useEffect(() => {
    if (!isHeroPlaying) return;
    const timer = setInterval(() => {
      setHeroActiveIndex((prev) => (prev + 1) % galleryPhotos.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isHeroPlaying, galleryPhotos.length]);

  // Filtered gallery photos
  const filteredGallery =
    activeCategory === "all"
      ? galleryPhotos
      : galleryPhotos.filter((item) => item.category === activeCategory);

  // Core 4 Pillars Data (Exact Khmer text provided by user)
  const corePillars = [
    {
      key: "pillar1" as const,
      number: "០១",
      titleKh: "១. បេសកកម្មសប្បុរសធម៌តាមខេត្ត (Charity Missions)",
      badge: "Mission ទី២៥, ទី២៩ ជាដើម",
      descriptionKh:
        "ក្រុមការងារតែងតែរៀបចំបេសកកម្មចុះជួយសហគមន៍នៅតាមតំបន់ដាច់ស្រយាលជាទៀងទាត់ (ដូចជា Mission ទី២៥, ទី២៩ ជាដើម)។",
      icon: MapPin,
      accentColor: "from-[#46629E] to-blue-500",
      borderGlow: "hover:border-[#46629E]",
      photoObj: pillarsPhotos.pillar1,
    },
    {
      key: "pillar2" as const,
      number: "០២",
      titleKh: "២. ការចែករំលែក និងជំនួយសម្ភារសិក្សា",
      badge: "សម្ភារសិក្សា & គ្រឿងឧបភោគបរិភោគ",
      descriptionKh:
        "ប្រមូលការបរិច្ចាគ (ថវិកា សម្ភារសិក្សា សៀវភៅ ខោអាវ និងគ្រឿងឧបភោគបរិភោគ) ដើម្បីយកទៅចែកជូនដល់សិស្សានុសិស្សក្រីក្រ និងគ្រួសារខ្វះខាតនៅតាមជនបទ។",
      icon: BookOpen,
      accentColor: "from-emerald-500 to-teal-500",
      borderGlow: "hover:border-emerald-500",
      photoObj: pillarsPhotos.pillar2,
    },
    {
      key: "pillar3" as const,
      number: "០៣",
      titleKh: "៣. ការអប់រំ និងការបំផុសគំនិត",
      badge: "បណ្តុះស្មារតី និងក្តីសង្ឃឹមកុមារ",
      descriptionKh:
        "ចុះបង្កើតកម្មវិធីកម្សាន្ត ការអប់រំ និងបណ្តុះស្មារតីដល់កុមារនៅតាមសាលារៀនដាច់ស្រយាល ឲ្យស្រឡាញ់ការសិក្សា និងមានក្តីសង្ឃឹមក្នុងជីវិត។",
      icon: Lightbulb,
      accentColor: "from-amber-500 to-orange-500",
      borderGlow: "hover:border-amber-500",
      photoObj: pillarsPhotos.pillar3,
    },
    {
      key: "pillar4" as const,
      number: "០៤",
      titleKh: "៤. ការលើកកម្ពស់ស្មារតីសង្គមក្នុងចំណោមយុវជន",
      badge: "Soft Skills, Teamwork & Leadership",
      descriptionKh:
        "បង្កើតឱកាសឲ្យនិស្សិត ITC និងយុវជនទូទៅបានអនុវត្តការងារស្ម័គ្រចិត្ត ពង្រឹងជំនាញទន់ (Soft skills) ការងារក្រុម (Teamwork) និងភាពជាអ្នកដឹកនាំ។",
      icon: Users,
      accentColor: "from-[#C92A2A] to-rose-500",
      borderGlow: "hover:border-[#C92A2A]",
      photoObj: pillarsPhotos.pillar4,
    },
  ];

  return (
    <>
      {/* Custom Styles for Khmer UI Typography & Smooth Marquee Animations */}
      <style>{`
        .font-khmer {
          font-family: 'Kantumruy Pro', 'Plus Jakarta Sans', sans-serif;
          line-height: 1.85;
        }
        .font-khmer-title {
          font-family: 'Koulen', 'Kantumruy Pro', sans-serif;
          letter-spacing: 0.02em;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marqueeScroll 38s linear infinite;
        }
        .animate-marquee.paused {
          animation-play-state: paused;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-slow {
          animation: floatSlow 5s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen bg-white text-slate-900 font-khmer overflow-x-hidden">
        {/* ====================================================================
            1. KHMER GLASSMORPHIC NAVBAR
            ==================================================================== */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-white/85 dark:bg-[#070B14]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
            {/* Brand Identity */}
            <a href="#top" className="flex items-center gap-3.5 group">
              <YouthHeartLogo
                className="w-12 h-12 group-hover:scale-105 transition-transform"
                customUrl={USER_PHOTOS_CONFIG.customLogoUrl}
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-khmer-title text-lg sm:text-xl tracking-wide text-slate-900 dark:text-white">
                    ក្រុមការងារ បេះដូងយុវជន
                  </span>
                  <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#46629E]/15 text-[#46629E] dark:bg-[#46629E]/30 dark:text-blue-300 border border-[#46629E]/30">
                    ITC • សាលាតិចណូ
                  </span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">
                  Youth Heart Team • Together for Change Showcase
                </span>
              </div>
            </a>

            {/* Navigation Links (Purely Informational & Gallery Focused) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <a
                href="#origin"
                className="hover:text-[#46629E] dark:hover:text-blue-400 transition-colors"
              >
                ប្រវត្តិ និងដើមកំណើត
              </a>
              <a
                href="#pillars"
                className="hover:text-[#46629E] dark:hover:text-blue-400 transition-colors"
              >
                គោលបំណងទាំង ៤
              </a>
              <a
                href="#mission-gallery"
                className="px-3.5 py-1.5 rounded-full bg-[#C92A2A]/10 text-[#C92A2A] dark:bg-[#C92A2A]/20 dark:text-red-300 border border-[#C92A2A]/30 hover:bg-[#C92A2A] hover:text-white transition-all flex items-center gap-1.5"
              >
                <Camera className="w-4 h-4" />
                <span>កម្រងរូបភាពបេសកកម្ម</span>
              </a>
              <a
                href="#journey"
                className="hover:text-[#46629E] dark:hover:text-blue-400 transition-colors"
              >
                ដំណើរបេសកកម្ម
              </a>
            </nav>
            {/* Right Controls: Code Guide Helper & Dark/Light Mode */}
          </div>
        </header>

        {/* ====================================================================
            2. HERO SECTION (KHMER UI + ANIMATED 3D STACK OF PAST MISSION PHOTOS)
            (No Donate / Register buttons or Fundraising stats!)
            ==================================================================== */}
        <section
          id="top"
          className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Khmer Identity & Story Introduction (6 cols) */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                {/* ITC Badge */}
                <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5 px-4 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 border border-[#46629E]/30 shadow-md animate-float-slow">
                  <GraduationCap className="w-4 h-4 text-[#46629E] dark:text-blue-400" />
                  <span className="text-xs sm:text-sm font-bold text-[#46629E] dark:text-blue-300">
                    វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC - សាលាតិចណូ)
                  </span>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span className="text-xs font-semibold text-[#C92A2A] dark:text-red-400 flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    Youth Heart Team
                  </span>
                </div>

                {/* Khmer Main Title */}
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                    Together for Change • កម្រងអនុស្សាវរីយ៍ និងបេសកកម្មមនុស្សធម៌
                  </p>
                  <h1 className="font-khmer-title text-4xl sm:text-6xl leading-[1.25] text-slate-900 dark:text-white">
                    ក្រុមការងារ{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46629E] via-blue-400 to-[#C92A2A]">
                      បេះដូងយុវជន
                    </span>
                  </h1>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-700 dark:text-slate-200">
                    Youth Heart Team (ITC)
                  </h2>
                </div>

                {/* Exact Khmer Origin Description */}
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  <strong>ក្រុមការងារ បេះដូងយុវជន (Youth Heart Team)</strong>{" "}
                  គឺជាក្រុមការងារស្ម័គ្រចិត្ត និងសប្បុរសធម៌របស់និស្សិត
                  ដែលបង្កើតឡើង និងទទួលបានការគាំទ្រយ៉ាងសកម្មនៅ{" "}
                  <span className="text-[#46629E] dark:text-blue-400 font-bold underline decoration-[#46629E]/40 underline-offset-4">
                    វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC)
                  </span>
                  ។
                </p>

                {/* Highlight Tags of What We Do */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
                  <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#46629E]/10 dark:bg-[#46629E]/20 text-[#46629E] dark:text-blue-300 border border-[#46629E]/25">
                    📍 បេសកកម្មតាមខេត្ត (Mission ទី២៥, ទី២៩...)
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">
                    📚 ចែករំលែកសម្ភារសិក្សា
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/25">
                    💡 ការអប់រំ និងបំផុសគំនិត
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#C92A2A]/10 dark:bg-[#C92A2A]/20 text-[#C92A2A] dark:text-red-300 border border-[#C92A2A]/25">
                    🤝 ស្មារតីយុវជនស្ម័គ្រចិត្ត ITC
                  </span>
                </div>

                {/* Exploration Navigation Buttons (Replaced old Donate/Register buttons) */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                  <a
                    href="#mission-gallery"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-sm sm:text-base font-bold bg-gradient-to-r from-[#46629E] via-[#3b5998] to-[#C92A2A] text-white shadow-xl shadow-[#46629E]/30 hover:scale-[1.02] transition-all"
                  >
                    <Camera className="w-5 h-5" />
                    <span>ទស្សនាកម្រងរូបភាពបេសកកម្មចាស់ៗ</span>
                  </a>

                  <a
                    href="#pillars"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-sm sm:text-base font-bold bg-white/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 hover:border-[#46629E] transition-all"
                  >
                    <Compass className="w-5 h-5 text-[#46629E] dark:text-blue-400" />
                    <span>គោលបំណង និងសកម្មភាពទាំង ៤</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive 3D Animated Photo Deck of Past Missions (6 cols) */}
              <div className="lg:col-span-6">
                <div className="relative mx-auto max-w-xl">
                  {/* Top Control Bar Above Animated Stack */}
                  <div className="flex items-center justify-between mb-3 px-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C92A2A] animate-ping" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        កម្រងរូបភាពបេសកកម្ម (Interactive Photo Reel)
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setIsHeroPlaying(!isHeroPlaying)}
                        className="p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center gap-1 hover:border-[#46629E]"
                        title={
                          isHeroPlaying ? "Pause Slideshow" : "Play Slideshow"
                        }
                      >
                        {isHeroPlaying ? (
                          <Pause className="w-3.5 h-3.5" />
                        ) : (
                          <Play className="w-3.5 h-3.5" />
                        )}
                        <span>{isHeroPlaying ? "Auto" : "Paused"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Single-photo mission slider */}
                  {galleryPhotos[heroActiveIndex] && (
                    <div className="group relative h-[360px] sm:h-[430px] w-full overflow-hidden rounded-[2rem] border border-white/70 dark:border-slate-700 bg-slate-950 shadow-[0_24px_70px_-24px_rgba(15,23,42,0.65)]">
                      <img
                        key={galleryPhotos[heroActiveIndex].id}
                        src={galleryPhotos[heroActiveIndex].image}
                        alt={galleryPhotos[heroActiveIndex].title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-slate-950/10" />
                      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-5">
                        <span className="max-w-[75%] truncate rounded-full border border-white/25 bg-slate-950/45 px-3.5 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md">
                          {galleryPhotos[heroActiveIndex].missionTag}
                        </span>
                        <span className="rounded-full border border-white/20 bg-slate-950/45 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                          {String(heroActiveIndex + 1).padStart(2, "0")} /{" "}
                          {String(galleryPhotos.length).padStart(2, "0")}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setHeroActiveIndex(
                            (prev) =>
                              (prev - 1 + galleryPhotos.length) %
                              galleryPhotos.length,
                          )
                        }
                        aria-label="Previous mission photo"
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-slate-950/45 p-2.5 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-slate-950/75 sm:left-5 sm:p-3"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setHeroActiveIndex(
                            (prev) => (prev + 1) % galleryPhotos.length,
                          )
                        }
                        aria-label="Next mission photo"
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-slate-950/45 p-2.5 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-slate-950/75 sm:right-5 sm:p-3"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>

                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-7">
                        <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-amber-300">
                          <MapPin className="h-3.5 w-3.5 shrink-0" />
                          <span>{galleryPhotos[heroActiveIndex].location}</span>
                        </div>
                        <h3 className="mb-2 max-w-lg text-xl font-extrabold leading-snug sm:text-2xl">
                          {galleryPhotos[heroActiveIndex].title}
                        </h3>
                        <p className="max-w-lg text-xs leading-relaxed text-slate-200 sm:text-sm">
                          {galleryPhotos[heroActiveIndex].description}
                        </p>
                        <button
                          type="button"
                          onClick={() =>
                            setLightboxPhoto(galleryPhotos[heroActiveIndex])
                          }
                          className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3.5 py-2 text-xs font-bold text-white backdrop-blur transition hover:bg-white/20"
                        >
                          <Maximize2 className="h-4 w-4" />
                          មើលរូបភាពធំ
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Slider progress */}
                  <div className="flex items-center justify-center gap-2.5 mt-5">
                    {galleryPhotos.map((item, idx) => (
                      <button
                        key={item.id}
                        onClick={() => setHeroActiveIndex(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          idx === heroActiveIndex
                            ? "w-9 bg-gradient-to-r from-[#46629E] to-[#C92A2A]"
                            : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                        }`}
                        aria-label={`Select mission slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. INFINITE ANIMATED FILMSTRIP MARQUEE (PAST MISSION MEMORIES REEL)
            ==================================================================== */}
        <section className="py-6 border-y border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/50 backdrop-blur-md overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#46629E] dark:text-blue-400">
              <Film className="w-4 h-4" />
              <span>
                ខ្សែអាត់រូបភាពសកម្មភាពបេសកកម្មចាស់ៗ (Hover លើរូបភាពដើម្បីផ្អាក
                ឬចុចមើលរូបធំ)
              </span>
            </div>
            <button
              onClick={() => setIsFilmstripPaused(!isFilmstripPaused)}
              className="text-xs font-bold px-3 py-1 rounded-lg bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
            >
              {isFilmstripPaused ? (
                <Play className="w-3.5 h-3.5" />
              ) : (
                <Pause className="w-3.5 h-3.5" />
              )}
              <span>
                {isFilmstripPaused ? "បន្តរំកិល (Play)" : "ផ្អាក (Pause)"}
              </span>
            </button>
          </div>

          {/* Infinite Scrolling Filmstrip */}
          <div
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setIsFilmstripPaused(true)}
            onMouseLeave={() => setIsFilmstripPaused(false)}
          >
            <div
              className={`animate-marquee gap-4 px-4 ${isFilmstripPaused ? "paused" : ""}`}
            >
              {[...galleryPhotos, ...galleryPhotos].map((photo, index) => (
                <div
                  key={`${photo.id}-marquee-${index}`}
                  onClick={() => setLightboxPhoto(photo)}
                  className="relative w-64 sm:w-80 h-44 sm:h-48 rounded-2xl overflow-hidden shrink-0 cursor-pointer group border border-slate-200 dark:border-slate-800 shadow-md"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#46629E]/90 text-white">
                    {photo.missionTag}
                  </span>
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <p className="text-xs font-bold line-clamp-1">
                      {photo.title}
                    </p>
                    <p className="text-[10px] text-slate-300">
                      {photo.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. ប្រវត្តិ និងដើមកំណើត (HISTORY & ORIGIN AT ITC)
            ==================================================================== */}
        <section id="origin" className="py-16 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left: Origin Story in Khmer UI (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#46629E]/15 text-[#46629E] dark:text-blue-300 border border-[#46629E]/30 text-xs font-bold">
                  <History className="w-4 h-4" />
                  <span>ប្រវត្តិនៃការកកើត • Our Origin Story</span>
                </div>

                <h2 className="font-khmer-title text-3xl sm:text-4xl text-slate-900 dark:text-white leading-snug">
                  ដើមកំណើតនៃក្រុមការងារ{" "}
                  <span className="text-[#46629E] dark:text-blue-400">
                    បេះដូងយុវជន
                  </span>{" "}
                  នៅសាលាតិចណូ (ITC)
                </h2>

                <div className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/90 border-l-4 border-l-[#46629E] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4">
                  <div className="flex items-center gap-3.5">
                    <YouthHeartLogo
                      className="w-14 h-14"
                      customUrl={USER_PHOTOS_CONFIG.customLogoUrl}
                    />
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        ក្រុមការងារ បេះដូងយុវជន
                      </h3>
                      <p className="text-xs font-semibold text-[#C92A2A] dark:text-red-400">
                        Youth Heart Team • Institute of Technology of Cambodia
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>ក្រុមការងារ បេះដូងយុវជន (Youth Heart Team)</strong>{" "}
                    គឺជាក្រុមការងារស្ម័គ្រចិត្ត និងសប្បុរសធម៌របស់និស្សិត
                    ដែលបង្កើតឡើង និងទទួលបានការគាំទ្រយ៉ាងសកម្មនៅ{" "}
                    <strong>វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC)</strong>។
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    ផ្តើមចេញពីទឹកចិត្តស្រឡាញ់ និងចង់ជួយសង្គមរបស់និស្សិតវិស្វកម្ម
                    និងបច្ចេកវិទ្យា
                    ក្រុមការងារបានរួមគ្នាបង្កើតជាបេសកកម្មមនុស្សធម៌ជាបន្តបន្ទាប់
                    ដើម្បីនាំយកសម្ភារសិក្សា ការអប់រំ
                    និងក្តីសង្ឃឹមទៅកាន់សាលារៀននៅតាមតំបន់ដាច់ស្រយាលទូទាំងប្រទេស។
                  </p>
                </div>
              </div>

              {/* Right: Dual Interactive Origin Photo Frames (7 cols) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {originPhotos.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col group ${
                      idx === 0 ? "sm:col-span-2" : "sm:col-span-2"
                    }`}
                  >
                    <div className="relative aspect-[16/9] bg-slate-950 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                      <div className="absolute top-3.5 left-3.5 right-3.5 flex flex-wrap items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#46629E] text-white shadow">
                          {item.badge}
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setLightboxPhoto(item)}
                            className="p-1.5 rounded-xl bg-slate-950/75 text-white hover:bg-slate-800"
                          >
                            <Maximize2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="absolute bottom-3.5 left-4 right-4 text-white">
                        <span className="text-[11px] font-mono text-emerald-300 block mb-0.5">
                          Code Variable: {item.codeVariable}
                        </span>
                        <h4 className="font-bold text-base sm:text-lg leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-300">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            5. គោលបំណង និងសកម្មភាពចម្បងទាំង ៤ (4 CORE OBJECTIVES & ACTIVITIES)
            ==================================================================== */}
        <section
          id="pillars"
          className="py-16 md:py-24 bg-white/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C92A2A]/15 text-[#C92A2A] dark:text-red-300 border border-[#C92A2A]/30 text-xs font-bold mb-3">
                <Award className="w-4 h-4" />
                <span>គោលបំណង និងសកម្មភាពចម្បង • Core Mission Pillars</span>
              </div>
              <h2 className="font-khmer-title text-3xl sm:text-5xl text-slate-900 dark:text-white mb-4">
                គោលបំណង និងសកម្មភាពចម្បងទាំង ៤
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                បេសកកម្មស្នូលរបស់{" "}
                <strong>
                  ក្រុមការងារ បេះដូងយុវជន (Youth Heart Team - ITC)
                </strong>{" "}
                ក្នុងការចូលរួមអភិវឌ្ឍសហគមន៍ ការអប់រំ និងបណ្តុះស្មារតីយុវជន។
              </p>
            </div>

            {/* 4 Pillars Animated Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {corePillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.key}
                    className={`rounded-3xl overflow-hidden bg-white dark:bg-slate-900/90 border-2 border-slate-200/90 dark:border-slate-800 ${pillar.borderGlow} transition-all duration-300 shadow-xl flex flex-col group hover:-translate-y-1`}
                  >
                    {/* Photo Frame for Each Pillar */}
                    <div className="relative aspect-[16/9] bg-slate-950 overflow-hidden">
                      <img
                        src={pillar.photoObj.image}
                        alt={pillar.titleKh}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                      {/* Number Badge */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                        <span
                          className={`px-3.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${pillar.accentColor} shadow-md`}
                        >
                          {pillar.badge}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() =>
                              setLightboxPhoto({
                                title: pillar.titleKh,
                                description: pillar.descriptionKh,
                                location: pillar.badge,
                                missionTag: `គោលបំណងទី ${pillar.number}`,
                                image: pillar.photoObj.image,
                                codeVariable: pillar.photoObj.codeVariable,
                              })
                            }
                            className="p-1.5 rounded-xl bg-slate-950/75 text-white hover:bg-slate-800"
                          >
                            <Maximize2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Code Variable Indicator */}
                      <span className="absolute bottom-2.5 left-4 text-[11px] font-mono text-emerald-300">
                        Code: {pillar.photoObj.codeVariable}
                      </span>
                    </div>

                    {/* Khmer Content Body */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3.5 mb-3">
                          <div
                            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.accentColor} text-white flex items-center justify-center shadow-lg shrink-0`}
                          >
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
                            {pillar.titleKh}
                          </h3>
                        </div>

                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                          {pillar.descriptionKh}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            6. MAIN HIGHLIGHT: កម្រងរូបភាពបេសកកម្មចាស់ៗ (INTERACTIVE ANIMATED MISSION GALLERY)
            ==================================================================== */}
        <section id="mission-gallery" className="py-16 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title & View Mode Switcher */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 text-xs font-bold mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>
                    ចំណុចសំខាន់នៃគេហទំព័រ • Past Charity Missions Showcase
                  </span>
                </div>
                <h2 className="font-khmer-title text-3xl sm:text-5xl text-slate-900 dark:text-white">
                  កម្រងរូបភាពសកម្មភាពបេសកកម្មមុនៗ
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
                  បង្ហាញពីសកម្មភាពពិតៗដែលក្រុមការងារ{" "}
                  <strong>បេះដូងយុវជន (Youth Heart Team)</strong> បានធ្វើកន្លងមក
                  (ដូចជា Mission ទី២៥, ទី២៩ ការចែកសម្ភារសិក្សា
                  និងការអប់រំកុមារ)។
                </p>
              </div>

              {/* View Mode Toggle: Bento Grid vs Spotlight Carousel */}
              <div className="flex items-center gap-2 self-start lg:self-auto bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <button
                  onClick={() => setGalleryViewMode("bento")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                    galleryViewMode === "bento"
                      ? "bg-[#46629E] text-white shadow"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span>បង្ហាញជាបណ្ដុំរូបភាព (Bento Grid)</span>
                </button>
                <button
                  onClick={() => setGalleryViewMode("spotlight")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                    galleryViewMode === "spotlight"
                      ? "bg-[#C92A2A] text-white shadow"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>បង្ហាញរូបធំ (3D Spotlight Slide)</span>
                </button>
              </div>
            </div>

            {/* Category Filter Pills in Khmer */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8">
              {[
                { id: "all", label: "រូបភាពទាំងអស់ (All Missions)" },
                { id: "mission29", label: "បេសកកម្មទី២៩ (Mission 29)" },
                { id: "mission25", label: "បេសកកម្មទី២៥ (Mission 25)" },
                { id: "study", label: "ចែកសម្ភារសិក្សា & ជំនួយ" },
                { id: "education", label: "ការអប់រំ & បំផុសគំនិត" },
                { id: "volunteers", label: "សកម្មភាពនិស្សិត ITC" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveCategory(tab.id);
                    setSpotlightIndex(0);
                  }}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    activeCategory === tab.id
                      ? "bg-gradient-to-r from-[#46629E] to-[#C92A2A] text-white shadow-lg shadow-[#46629E]/25 scale-[1.02]"
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-[#46629E]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* VIEW MODE A: ANIMATED BENTO / MASONRY PHOTO GRID */}
            {galleryViewMode === "bento" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGallery.map((photo) => (
                  <div
                    key={photo.id}
                    className={`group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${
                      photo.featuredSize === "large" && activeCategory === "all"
                        ? "md:col-span-2 aspect-[16/10]"
                        : "aspect-[4/3]"
                    }`}
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent" />

                    {/* Top Controls on Each Gallery Card */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#46629E]/90 backdrop-blur-md text-white border border-white/15">
                        {photo.missionTag}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setLightboxPhoto(photo)}
                          className="p-2 rounded-xl bg-slate-950/75 hover:bg-white text-white hover:text-slate-950 transition-colors"
                          title="មើលរូបភាពពេញ"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Bottom Story Details */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-amber-300 font-semibold mb-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {photo.location}
                        </span>
                        <span className="text-white/40">•</span>
                        <span className="font-mono text-[10px] text-emerald-300 bg-slate-950/70 px-2 py-0.5 rounded">
                          {photo.codeVariable}
                        </span>
                      </div>
                      <h3 className="font-bold text-base sm:text-lg leading-snug mb-1 group-hover:text-blue-300 transition-colors">
                        {photo.title}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-2">
                        {photo.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* VIEW MODE B: LARGE CINEMATIC SPOTLIGHT SLIDESHOW */}
            {galleryViewMode === "spotlight" && filteredGallery.length > 0 && (
              <div className="rounded-3xl overflow-hidden bg-slate-900 border-2 border-[#46629E]/40 shadow-2xl">
                <div className="relative aspect-[16/9] max-h-[560px] w-full bg-slate-950">
                  <img
                    src={
                      filteredGallery[spotlightIndex % filteredGallery.length]
                        .image
                    }
                    alt={
                      filteredGallery[spotlightIndex % filteredGallery.length]
                        .title
                    }
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#C92A2A] text-white shadow-lg">
                      {
                        filteredGallery[spotlightIndex % filteredGallery.length]
                          .missionTag
                      }
                    </span>
                  </div>

                  {/* Next / Prev Arrows */}
                  <button
                    onClick={() =>
                      setSpotlightIndex(
                        (prev) =>
                          (prev - 1 + filteredGallery.length) %
                          filteredGallery.length,
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/75 hover:bg-[#46629E] text-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() =>
                      setSpotlightIndex(
                        (prev) => (prev + 1) % filteredGallery.length,
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/75 hover:bg-[#46629E] text-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 text-white max-w-3xl">
                    <span className="text-xs font-mono text-emerald-400 block mb-1">
                      Code Variable:{" "}
                      {
                        filteredGallery[spotlightIndex % filteredGallery.length]
                          .codeVariable
                      }
                    </span>
                    <h3 className="text-xl sm:text-3xl font-extrabold mb-2">
                      {
                        filteredGallery[spotlightIndex % filteredGallery.length]
                          .title
                      }
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300">
                      {
                        filteredGallery[spotlightIndex % filteredGallery.length]
                          .description
                      }
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ====================================================================
            7. ដំណើរនៃបេសកកម្ម (PAST MISSIONS TIMELINE SHOWCASE)
            ==================================================================== */}
        <section
          id="journey"
          className="py-16 md:py-24 bg-white/70 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#46629E] dark:text-blue-400 block mb-2">
                Our Humanitarian Footprints
              </span>
              <h2 className="font-khmer-title text-3xl sm:text-4xl text-slate-900 dark:text-white mb-3">
                ដំណើរបេសកកម្មរបស់ក្រុមការងារ បេះដូងយុវជន
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                ពីការចាប់ផ្តើមនៅវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC)
                រហូតដល់បេសកកម្មសប្បុរសធម៌តាមបណ្តាខេត្តដាច់ស្រយាលជាច្រើនលើក។
              </p>
            </div>

            <div className="relative border-l-2 border-[#46629E]/50 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
              {/* Milestone 1 */}
              <div className="relative group">
                <span className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-[#46629E] ring-4 ring-[#46629E]/25" />
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg">
                  <span className="text-xs font-bold text-[#46629E] dark:text-blue-400 uppercase tracking-wider">
                    ការចាប់ផ្តើមនៅវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC)
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mt-1 mb-2">
                    ការបង្កើតក្រុមការងារ បេះដូងយុវជន (Youth Heart Team)
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    ប្រមូលផ្តុំនិស្សិតស្ម័គ្រចិត្តនៅសាលាតិចណូ
                    ដែលមានបេះដូងស្រឡាញ់ការងារមនុស្សធម៌ ចែករំលែកចំណេះដឹង
                    និងជួយសិស្សានុសិស្សខ្វះខាត។
                  </p>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="relative group">
                <span className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-500/25" />
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg">
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">
                    បេសកកម្មសប្បុរសធម៌តាមខេត្ត • Mission ទី២៥
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mt-1 mb-2">
                    ពង្រីកវិសាលភាពជំនួយសម្ភារសិក្សា និងកម្មវិធីអប់រំកុមារ
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    នាំយកសៀវភៅ សម្ភារសិក្សា ខោអាវ និងគ្រឿងឧបភោគបរិភោគ
                    ទៅចែកជូនដល់សាលារៀន
                    និងគ្រួសារខ្វះខាតនៅតាមតំបន់ជនបទដាច់ស្រយាល។
                  </p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="relative group">
                <span className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-[#C92A2A] ring-4 ring-[#C92A2A]/25" />
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg">
                  <span className="text-xs font-bold text-[#C92A2A] dark:text-red-400 uppercase tracking-wider">
                    បេសកកម្មសប្បុរសធម៌តាមខេត្ត • Mission ទី២៩ និងបន្តបន្ទាប់
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mt-1 mb-2">
                    បន្តបេសកកម្មបំផុសគំនិតកុមារ និងពង្រឹងភាពជាអ្នកដឹកនាំយុវជន
                    ITC
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    បន្តរៀបចំបេសកកម្មចុះជួយសហគមន៍ដាច់ស្រយាលជាទៀងទាត់
                    និងផ្តល់ឱកាសឲ្យនិស្សិតជំនាន់ក្រោយៗបានអនុវត្តការងារស្ម័គ្រចិត្ត
                    ពង្រឹង Soft Skills និង Teamwork។
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            8. KHMER FOOTER (YOUTH HEART TEAM - ITC)
            ==================================================================== */}
        <footer className="bg-slate-950 text-slate-300 py-14 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <YouthHeartLogo
                  className="w-16 h-16"
                  customUrl={USER_PHOTOS_CONFIG.customLogoUrl}
                />
                <div>
                  <h3 className="font-khmer-title text-2xl text-white">
                    ក្រុមការងារ បេះដូងយុវជន (Youth Heart Team)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (Institute of Technology of
                    Cambodia - ITC)
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowCodeModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 transition-all"
                >
                  <FolderOpen className="w-4 h-4" />
                  <span>
                    របៀបដាក់រូបភាពផ្ទាល់ខ្លួនក្នុងកូដ (Code Photo Guide)
                  </span>
                </button>

                <a
                  href="https://www.facebook.com/search/top?q=%E1%9E%94%E1%9F%81%E1%9F%87%E1%9E%8A%E1%9E%BC%E1%9E%84%E1%9E%99%E1%9E%BB%E1%9E%9C%E1%9E%87%E1%9E%93%20Youth%20Heart%20Team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#46629E] hover:bg-[#385185] text-white transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>បេះដូងយុវជន Youth Heart Team</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
              <p>
                © 2026 ក្រុមការងារ បេះដូងយុវជន (Youth Heart Team - ITC).
                រក្សាសិទ្ធិគ្រប់យ៉ាង។
              </p>
              <p>
                បង្កើតឡើងសម្រាប់បង្ហាញពីប្រវត្តិ គោលបំណង
                និងកម្រងរូបភាពបេសកកម្មសប្បុរសធម៌
              </p>
            </div>
          </div>
        </footer>

        {/* ====================================================================
            LIGHTBOX MODAL FOR FULL-SCREEN MISSION PHOTO VIEW
            ==================================================================== */}
        {lightboxPhoto && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxPhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-red-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] bg-black">
                <img
                  src={lightboxPhoto.image}
                  alt={lightboxPhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-emerald-400 block mb-1">
                    កន្លែងដាក់រូបក្នុងកូដ៖ {lightboxPhoto.codeVariable}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold">
                    {lightboxPhoto.title}
                  </h3>
                  {lightboxPhoto.description && (
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      {lightboxPhoto.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ====================================================================
            CODE PHOTO HELPER MODAL (SHOWS USER EXACTLY WHERE TO PUT PHOTOS)
            ==================================================================== */}
        {showCodeModal && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowCodeModal(false)}
          >
            <div
              className="max-w-2xl w-full rounded-3xl bg-white dark:bg-slate-900 border-2 border-amber-500/50 p-6 sm:p-8 shadow-2xl space-y-5 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                      របៀបដាក់រូបភាពរបស់អ្នកនៅក្នុងកូដ (Photo Guide)
                    </h3>
                    <p className="text-xs text-slate-500">
                      ដាក់រូបភាពក្នុង app/photo ហើយកែរូបភាពនៅ
                      USER_PHOTOS_CONFIG ខាងលើនៃ page.tsx
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowCodeModal(false)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  ១. បើកមើលកូដនៅផ្នែកខាងលើបង្អស់ ត្រង់កន្លែង{" "}
                  <code className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 font-mono">
                    const USER_PHOTOS_CONFIG = &#123; ... &#125;
                  </code>
                </p>
                <p>
                  ២. ដាក់រូបភាពរបស់អ្នកក្នុងថត{" "}
                  <code className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-amber-600 dark:text-amber-300 font-mono">
                    app/photo
                  </code>{" "}
                  រួច import នៅផ្នែកខាងលើនៃ page.tsx ហើយប្រើ{" "}
                  <code className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-amber-600 dark:text-amber-300 font-mono">
                    image: missionPhoto.src
                  </code>{" "}
                  នៅក្នុង object រូបភាពដែលអ្នកចង់ប្តូរ។
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto space-y-1">
                <p className="text-emerald-400">
                  {'import missionPhoto from "./photo/mission-1.jpg";'}
                </p>
                <p>
                  {"// app/page.tsx → USER_PHOTOS_CONFIG.pastMissionGallery[0]"}
                </p>
                <p className="text-amber-300">
                  image: missionPhoto.src,
                </p>
                <p className="text-slate-400">
                  {"// Repeat for originPhotos, pillarsPhotos, and gallery photos."}
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setShowCodeModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#46629E] text-white font-bold text-xs sm:text-sm"
                >
                  យល់ព្រម (Got It)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
