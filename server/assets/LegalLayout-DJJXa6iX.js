import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { N as Navbar, F as Footer } from "./Footer-W6beC5SX.js";
function LegalLayout({ title, accent, lead, children }) {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("article", { className: "legal-page", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "back", children: "← Zurück zur Startseite" }),
      /* @__PURE__ */ jsxs("h1", { children: [
        title,
        " ",
        accent && /* @__PURE__ */ jsx("span", { className: "accent", children: accent })
      ] }),
      lead && /* @__PURE__ */ jsx("p", { className: "lead", children: lead }),
      children
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  LegalLayout as L
};
