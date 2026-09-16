import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#77bdbb",
  background: "#fdf3da",
  ink: "#0a1f3c",
  muted: "#8ba3b8",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "A perfectly maintained pool is always ready — so you never have to think about it.",
    clip: "/assets/world/scene-01.mp4",
    id: "scene-01",
    kicker: "LPCB · Bermuda",
    label: "Surface",
    mobileClip: "/assets/world/scene-01.mp4",
    mobilePoster: "/assets/world/scene-01-poster.png",
    poster: "/assets/world/scene-01-poster.png",
    tags: ["Crystal Clear"],
    title: "Crystal Clear, Every Day.",
  },
  {
    body: "Weekly visits from our certified technicians keep your water balanced and your equipment running perfectly.",
    clip: "/assets/world/scene-02.mp4",
    id: "scene-02",
    kicker: "The Ready Pool",
    label: "Ready",
    mobileClip: "/assets/world/scene-02.mp4",
    mobilePoster: "/assets/world/scene-02-poster.png",
    poster: "/assets/world/scene-02-poster.png",
    tags: ["Professional Care"],
    title: "Professional maintenance, worry-free.",
  },
  {
    body: "We handle everything — chemicals, filters, pumps — so you can just enjoy your pool.",
    clip: "/assets/world/scene-03.mp4",
    id: "scene-03",
    kicker: "The Care in Action",
    label: "Care",
    mobileClip: "/assets/world/scene-03.mp4",
    mobilePoster: "/assets/world/scene-03-poster.png",
    poster: "/assets/world/scene-03-poster.png",
    tags: ["Full Service"],
    title: "Every detail, handled.",
  },
  {
    body: "From Warwick to St. George's, we serve pools across all of Bermuda.",
    clip: "/assets/world/scene-04.mp4",
    id: "scene-04",
    kicker: "Bermuda-First",
    label: "Bermuda",
    mobileClip: "/assets/world/scene-04.mp4",
    mobilePoster: "/assets/world/scene-04-poster.png",
    poster: "/assets/world/scene-04-poster.png",
    tags: ["All Bermuda"],
    title: "Your pool. Your family. Pure joy.",
  },
];
