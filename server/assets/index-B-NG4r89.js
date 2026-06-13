import { jsxs, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-Rqio-N63.js";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
const heroImg = "./assets/hero-lounge-_OrzjOkh.jpg";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "home", className: "hero", children: [
    /* @__PURE__ */ jsx("div", { className: "hero-bg", children: /* @__PURE__ */ jsx("img", { src: heroImg, alt: "MIRAÈ Hookah Lounge Interior", width: 1920, height: 1080 }) }),
    /* @__PURE__ */ jsx("div", { className: "hero-smoke", "aria-hidden": "true", children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsx(
      "span",
      {
        style: {
          left: `${15 + i * 18}%`,
          animation: `smoke-drift ${8 + i}s ease-out ${i * 1.5}s infinite`
        }
      },
      i
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "hero-content float-up", children: [
      /* @__PURE__ */ jsxs("div", { className: "hero-eyebrow", children: [
        /* @__PURE__ */ jsx("span", { className: "line" }),
        "München · Est. Premium",
        /* @__PURE__ */ jsx("span", { className: "line" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "hero-title", children: [
        "Willkommen in der",
        /* @__PURE__ */ jsx("span", { className: "accent text-gradient-gold", children: "MIRAÈ Hookah Lounge" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "hero-sub", children: "Münchens exklusivste Shisha-Erfahrung. Wo Samt, Feuer und Aroma zu einem unvergesslichen Abend verschmelzen." }),
      /* @__PURE__ */ jsx("div", { className: "hero-actions", children: /* @__PURE__ */ jsx(Link, { to: "/", hash: "menu", className: "btn btn-primary", children: "Speisekarte entdecken" }) }),
      /* @__PURE__ */ jsxs("div", { className: "hero-rating", children: [
        /* @__PURE__ */ jsx("span", { children: "★★★★★" }),
        /* @__PURE__ */ jsx("em", { children: "4,5 · Google Bewertungen" })
      ] })
    ] })
  ] });
}
const interiorImg = "./assets/interior-lounge-omw6N0I-.png";
const shishaImg = "./assets/interior-shisha-BgEnH7oT.png";
const features = [
  { title: "Samt & Gold", text: "Handgewählte Samtsessel und Chesterfield-Bänke für maximalen Komfort." },
  { title: "Echter Kamin", text: "Knisterndes Feuer am großen Screen verleiht jedem Abend Wärme und Tiefe." },
  { title: "Premium Tabak", text: "Sorgfältig kuratierte Sorten — gepflegte Köpfe, perfekte Rauchentwicklung." },
  { title: "Sport & Events", text: "Großbildwand für Champions League, WM-Nächte und private Events." }
];
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "section", children: /* @__PURE__ */ jsxs("div", { className: "about-grid", children: [
    /* @__PURE__ */ jsxs("div", { className: "about-media", children: [
      /* @__PURE__ */ jsx("div", { className: "about-media-frame", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx("div", { className: "about-media-main", children: /* @__PURE__ */ jsx("img", { src: interiorImg, alt: "Lounge Interior", loading: "lazy" }) }),
      /* @__PURE__ */ jsx("div", { className: "about-media-overlay", children: /* @__PURE__ */ jsx("img", { src: shishaImg, alt: "Shisha", loading: "lazy" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "about-body", children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Über uns" }),
      /* @__PURE__ */ jsxs("h2", { children: [
        "Eine Oase aus Rauch,",
        /* @__PURE__ */ jsx("span", { style: { display: "block" }, className: "italic text-gradient-gold", children: "Samt & Goldglanz." })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Die MIRAÈ Hookah Lounge ist Münchens Adresse für anspruchsvolle Genießer. Hinter unserer Tür erwartet Sie eine Welt jenseits des Alltags — gedämpftes Bernsteinlicht, tiefe Samtpolster, der sanfte Duft erlesener Tabake und die feine Geräuschkulisse eines knisternden Feuers." }),
      /* @__PURE__ */ jsx("div", { className: "about-features", children: features.map((f) => /* @__PURE__ */ jsxs("div", { className: "feature glass", children: [
        /* @__PURE__ */ jsx("h3", { children: f.title }),
        /* @__PURE__ */ jsx("p", { children: f.text })
      ] }, f.title)) })
    ] })
  ] }) });
}
const categories = [
  {
    id: "softdrinks",
    label: "Softdrinks",
    tagline: "Erfrischend & klassisch",
    groups: [{ items: [
      { name: "Coca Cola", size: "0,33l", price: "3,90" },
      { name: "Fanta", size: "0,33l", price: "3,90" },
      { name: "Sprite", size: "0,33l", price: "3,90" },
      { name: "Paulaner Spezi", size: "0,50l", price: "3,90" },
      { name: "Schwarze Dose", size: "0,33l", price: "4,50" },
      { name: "Moloko", size: "0,33l", price: "4,50" },
      { name: "Red Bull", size: "0,25l", price: "3,90" },
      { name: "Wasser Still / Sprudel", size: "0,33l", price: "3,90" },
      { name: "Wasser Still / Sprudel", size: "0,75l", price: "6,90" },
      { name: "Schweppes", size: "0,20l", price: "3,50" },
      { name: "Saft Pur", size: "0,40l", price: "4,50" },
      { name: "Saftschorlen", size: "0,40l", price: "3,90" },
      { name: "Fresh Juice Orange", size: "0,20l", price: "2,90" }
    ] }]
  },
  {
    id: "teekaffee",
    label: "Tee & Kaffee",
    tagline: "Wärmend & aromatisch",
    groups: [
      { title: "Kaffee", items: [
        { name: "Espresso", price: "2,20" },
        { name: "Espresso Macchiato", price: "2,50" },
        { name: "Doppio Espresso", price: "3,50" },
        { name: "Doppio Macchiato", price: "3,70" },
        { name: "Kaffee Crema", price: "3,00" },
        { name: "Cappuccino", price: "3,20" },
        { name: "Milchkaffee", price: "3,80" },
        { name: "Latte Macchiato", price: "3,90" },
        { name: "Ice Kaffee", price: "4,90" },
        { name: "Ice Latte", price: "4,90" },
        { name: "Chai Latte", price: "3,60" },
        { name: "Matcha Latte", price: "4,20" },
        { name: "Ice Matcha Latte", price: "4,90" },
        { name: "Heisse Schokolade", price: "3,90" },
        { name: "Heisse Weiße Schokolade", price: "3,90" }
      ], note: "optional auch mit Hafermilch +0,50€" },
      { title: "Tee", items: [
        { name: "Hausgemachter EisTee", price: "3,90" },
        { name: "Kamillen Tee", price: "3,40" },
        { name: "Früchte Tee", price: "3,40" },
        { name: "Schwarz Tee", price: "3,40" },
        { name: "Zitrone – Ingwer Tee", price: "3,40" },
        { name: "MIRAÈ Tee", price: "3,90" }
      ] }
    ]
  },
  {
    id: "cocktails",
    label: "Cocktails",
    tagline: "Alkoholfreie Signature Drinks",
    groups: [{ items: [
      { name: "Lillet Berry", price: "6,90" },
      { name: "Hugo", price: "6,90" },
      { name: "Limetten Spritz", price: "6,90" },
      { name: "Peach Lady", price: "6,90" },
      { name: "Coconut Kiss", price: "7,90" },
      { name: "Virgin Caipi", price: "7,90" },
      { name: "FloBi", price: "7,90" },
      { name: "Virgin Mojito", price: "7,90" },
      { name: "Virgin Sunrise", price: "7,90" },
      { name: "Spring Paradis", price: "7,90" }
    ], note: "Weitere Aperitifs / Cocktails auf Anfrage" }]
  },
  {
    id: "snacks",
    label: "Snacks",
    tagline: "Herzhaft & süß",
    groups: [
      { title: "Snacks", items: [
        { name: "Obstteller", price: "8,90" },
        { name: "Nachos mit Dip", price: "4,90" },
        { name: "Nachos mit Käse überbacken", price: "5,90" },
        { name: "Sucuk-Käse Toast", price: "5,90" },
        { name: "Popcorn Homemade XL", price: "4,90" },
        { name: "Dips extra je", price: "0,80" }
      ] },
      { title: "Desserts", items: [
        { name: "Schokoladensouffle", price: "4,90" },
        { name: "Pistaziensouffle", price: "5,90" }
      ] }
    ]
  },
  {
    id: "shisha",
    label: "Shisha",
    tagline: "Premium Smoke Selection",
    groups: [{ items: [
      { name: "Black Nana", price: "14" },
      { name: "Love 66", price: "14" },
      { name: "Lemon Chill", price: "14" },
      { name: "Ice Kaktus", price: "14" },
      { name: "Löwenherz", price: "14" },
      { name: "Eisbonbon", price: "14" },
      { name: "Traube Minze", price: "14" },
      { name: "African Queen", price: "14" },
      { name: "Cold Peach", price: "14" },
      { name: "MIRAÈ Spezial", price: "18" }
    ], note: "Weitere Sorten auf Anfrage" }]
  }
];
function Menu() {
  const [active, setActive] = useState(categories[0].id);
  const cat = categories.find((c) => c.id === active);
  return /* @__PURE__ */ jsxs("section", { id: "menu", className: "section", children: [
    /* @__PURE__ */ jsx("div", { className: "menu-bg", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxs("div", { className: "menu-inner", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-head", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Speisekarte" }),
        /* @__PURE__ */ jsxs("h2", { children: [
          "Die ",
          /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "Karte" })
        ] }),
        /* @__PURE__ */ jsx("p", { style: { color: "var(--muted)", maxWidth: "36rem", margin: "1rem auto 0" }, children: "Eine kuratierte Auswahl an Getränken, Speisen und Premium-Shisha-Sorten." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "menu-tabs", children: categories.map((c) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setActive(c.id),
          className: `menu-tab ${active === c.id ? "active" : ""}`,
          children: c.label
        },
        c.id
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "float-up", children: [
        /* @__PURE__ */ jsx("p", { className: "menu-tagline", children: cat.tagline }),
        /* @__PURE__ */ jsx("div", { className: "glass-gold menu-card", children: cat.groups.map((group, gi) => /* @__PURE__ */ jsxs("div", { className: "menu-group", children: [
          group.title && /* @__PURE__ */ jsxs("h3", { className: "menu-group-title", children: [
            group.title,
            /* @__PURE__ */ jsx("span", { className: "rule" })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "menu-list", children: group.items.map((item) => /* @__PURE__ */ jsxs("li", { className: "menu-item", children: [
            /* @__PURE__ */ jsx("span", { className: "name", children: item.name }),
            item.size && /* @__PURE__ */ jsx("span", { className: "size", children: item.size }),
            /* @__PURE__ */ jsx("span", { className: "dots" }),
            /* @__PURE__ */ jsxs("span", { className: "price", children: [
              item.price,
              "€"
            ] })
          ] }, item.name + (item.size ?? ""))) }),
          group.note && /* @__PURE__ */ jsx("p", { className: "menu-note", children: group.note })
        ] }, gi)) })
      ] }, cat.id)
    ] })
  ] });
}
const MAP_SRC = "https://www.google.com/maps?q=Friedrichshafener+Str.+17,+81243+München&output=embed";
function GdprMap() {
  const [accepted, setAccepted] = useState(false);
  useEffect(() => {
    const check = () => {
      const v = typeof window !== "undefined" && localStorage.getItem("mirae-cookies");
      setAccepted(v === "all");
    };
    check();
    window.addEventListener("mirae-cookies-changed", check);
    window.addEventListener("storage", check);
    return () => {
      window.removeEventListener("mirae-cookies-changed", check);
      window.removeEventListener("storage", check);
    };
  }, []);
  const accept = () => {
    localStorage.setItem("mirae-cookies", "all");
    window.dispatchEvent(new Event("mirae-cookies-changed"));
    setAccepted(true);
  };
  if (accepted) {
    return /* @__PURE__ */ jsx(
      "iframe",
      {
        title: "MIRAÈ Hookah Lounge — Standort auf Google Maps",
        src: MAP_SRC,
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade",
        allowFullScreen: true
      }
    );
  }
  return /* @__PURE__ */ jsxs("div", { className: "map-placeholder", children: [
    /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsxs("svg", { width: "44", height: "44", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.2", children: [
      /* @__PURE__ */ jsx("path", { d: "M12 22s-8-7-8-13a8 8 0 1116 0c0 6-8 13-8 13z" }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "9", r: "3" })
    ] }) }),
    /* @__PURE__ */ jsx("h4", { className: "display", style: { color: "var(--gold)", fontSize: "1.5rem" }, children: "Google Maps" }),
    /* @__PURE__ */ jsx("p", { children: "Bitte akzeptieren Sie die Cookies, um die Google Maps Karte zu laden." }),
    /* @__PURE__ */ jsx("button", { className: "btn btn-primary", onClick: accept, children: "Cookies akzeptieren" })
  ] });
}
const hours = [
  { day: "Montag", time: "17:00 – 01:00" },
  { day: "Dienstag", time: "17:00 – 01:00" },
  { day: "Mittwoch", time: "17:00 – 01:00" },
  { day: "Donnerstag", time: "17:00 – 01:00" },
  { day: "Freitag", time: "15:00 – 03:00", highlight: true },
  { day: "Samstag", time: "15:00 – 03:00", highlight: true },
  { day: "Sonntag", time: "17:00 – 01:00" }
];
function Contact() {
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "section", children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
    /* @__PURE__ */ jsxs("div", { className: "section-head", children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Besuchen Sie uns" }),
      /* @__PURE__ */ jsxs("h2", { children: [
        "Kontakt & ",
        /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "Öffnungszeiten" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "contact-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "contact-hours glass-gold", children: [
        /* @__PURE__ */ jsxs("h3", { children: [
          /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9" }),
            /* @__PURE__ */ jsx("path", { d: "M12 7v5l3 2" })
          ] }),
          "Öffnungszeiten"
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "hours-list", children: hours.map((h) => /* @__PURE__ */ jsxs("li", { className: h.highlight ? "weekend" : "", children: [
          /* @__PURE__ */ jsx("span", { className: "day", children: h.day }),
          /* @__PURE__ */ jsx("span", { className: "time", children: h.time })
        ] }, h.day)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "contact-cards", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://maps.google.com/?q=Friedrichshafener+Str.+17,+81243+München",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "contact-card glass",
            children: [
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
                /* @__PURE__ */ jsx("path", { d: "M12 22s-8-7-8-13a8 8 0 1116 0c0 6-8 13-8 13z" }),
                /* @__PURE__ */ jsx("circle", { cx: "12", cy: "9", r: "3" })
              ] }) }),
              /* @__PURE__ */ jsx("h4", { children: "Adresse" }),
              /* @__PURE__ */ jsxs("p", { children: [
                "Friedrichshafener Str. 17",
                /* @__PURE__ */ jsx("br", {}),
                "81243 München",
                /* @__PURE__ */ jsx("br", {}),
                "Deutschland"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("a", { href: "tel:+4915775068238", className: "contact-card glass", children: [
          /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" }) }) }),
          /* @__PURE__ */ jsx("h4", { children: "Telefon" }),
          /* @__PURE__ */ jsx("p", { children: "+49 1577 5068238" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "map-wrap", children: /* @__PURE__ */ jsx(GdprMap, {}) })
    ] })
  ] }) });
}
function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const ok = typeof window !== "undefined" && localStorage.getItem("mirae-cookies");
    if (!ok) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);
  const decide = (v) => {
    localStorage.setItem("mirae-cookies", v);
    window.dispatchEvent(new Event("mirae-cookies-changed"));
    setVisible(false);
  };
  if (!visible) return null;
  return /* @__PURE__ */ jsx("div", { className: "cookie-banner", children: /* @__PURE__ */ jsxs("div", { className: "cookie-banner-inner glass-gold", children: [
    /* @__PURE__ */ jsx("h4", { children: "Cookies" }),
    /* @__PURE__ */ jsx("p", { children: "Wir verwenden Cookies, um Ihr Erlebnis zu verbessern und externe Dienste wie Google Maps einzubinden." }),
    /* @__PURE__ */ jsxs("div", { className: "actions", children: [
      /* @__PURE__ */ jsx("button", { className: "cookie-accept", onClick: () => decide("all"), children: "Alle Akzeptieren" }),
      /* @__PURE__ */ jsx("button", { className: "cookie-decline", onClick: () => decide("essential"), children: "Nur Essentielle" })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Hr, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Hr, {}),
    /* @__PURE__ */ jsx(Menu, {}),
    /* @__PURE__ */ jsx(Hr, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(CookieBanner, {})
  ] });
}
function Hr() {
  return /* @__PURE__ */ jsx("div", { style: {
    padding: "0 1.5rem"
  }, children: /* @__PURE__ */ jsx("div", { className: "divider-ember" }) });
}
export {
  Index as component
};
