import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
const links = [
  { to: "/", hash: "home", label: "Start" },
  { to: "/", hash: "about", label: "Atmosphäre" },
  { to: "/", hash: "menu", label: "Speisekarte" },
  { to: "/", hash: "contact", label: "Kontakt" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs("header", { className: `navbar ${scrolled ? "scrolled" : ""}`, children: [
    /* @__PURE__ */ jsxs("nav", { className: "navbar-inner", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", hash: "home", className: "brand", children: [
        "MIRAÈ",
        /* @__PURE__ */ jsx("span", { className: "brand-sub", children: "LOUNGE" })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "nav-links", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: l.to, hash: l.hash, className: "nav-link", children: l.label }) }, l.hash)) }),
      /* @__PURE__ */ jsx("a", { href: "tel:+4915775068238", className: "nav-cta", children: "Anrufen" }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          "aria-label": "Menü",
          onClick: () => setOpen((v) => !v),
          className: `nav-burger ${open ? "open" : ""}`,
          children: [
            /* @__PURE__ */ jsx("span", {}),
            /* @__PURE__ */ jsx("span", {}),
            /* @__PURE__ */ jsx("span", {})
          ]
        }
      )
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "nav-mobile", children: /* @__PURE__ */ jsxs("ul", { children: [
      links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: l.to, hash: l.hash, onClick: () => setOpen(false), children: l.label }) }, l.hash)),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tel:+4915775068238", style: { color: "var(--gold)" }, children: "+49 1577 5068238" }) })
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "footer", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer-brand", children: [
        /* @__PURE__ */ jsx("div", { className: "name", children: "MIRAÈ" }),
        /* @__PURE__ */ jsx("div", { className: "sub", children: "HOOKAH LOUNGE · MÜNCHEN" }),
        /* @__PURE__ */ jsx("p", { children: "Münchens exklusivste Adresse für Shisha-Liebhaber. Premium Tabak, kuratierte Drinks, unvergessliche Abende." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-col", children: [
        /* @__PURE__ */ jsx("h4", { children: "Kontakt" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: "Friedrichshafener Str. 17" }),
          /* @__PURE__ */ jsx("li", { children: "81243 München" }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tel:+4915775068238", children: "+49 1577 5068238" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-col", children: [
        /* @__PURE__ */ jsx("h4", { children: "Folgen Sie uns" }),
        /* @__PURE__ */ jsxs("div", { className: "socials", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.instagram.com/",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Instagram",
              children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 5.6a4.2 4.2 0 100 8.4 4.2 4.2 0 000-8.4zm5.4-.6a1 1 0 11-2 0 1 1 0 012 0zM12 14.7a2.7 2.7 0 110-5.4 2.7 2.7 0 010 5.4z" }) })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://wa.me/4915775068238",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "WhatsApp",
              children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.4.2-.6.1-.9-.4-1.7-.9-2.4-1.6-.7-.7-1.2-1.5-1.6-2.4-.1-.3-.1-.5.1-.6l.7-.7c.1-.1.2-.3.1-.5-.1-.2-.7-1.7-1-2.3-.1-.5-.4-.5-.6-.5h-.6c-.3 0-.7.1-1 .5-.7.7-1.1 1.6-1.1 2.6 0 1.5.8 2.9 1 3.1 1.4 2.1 3.3 3.7 5.6 4.5.7.3 1.4.4 2.2.4.7-.1 1.6-.7 1.9-1.4.2-.5.2-.9.1-1zM12 2a10 10 0 00-8.6 15l-1.4 5 5.1-1.3A10 10 0 1012 2z" }) })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "footer-legal", children: /* @__PURE__ */ jsxs("div", { className: "footer-legal-inner", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " MIRAÈ Hookah Lounge. Alle Rechte vorbehalten."
      ] }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/impressum", children: "Impressum" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/datenschutz", children: "Datenschutz" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/cookie-richtlinie", children: "Cookie-Richtlinie" }) })
      ] })
    ] }) })
  ] });
}
export {
  Footer as F,
  Navbar as N
};
