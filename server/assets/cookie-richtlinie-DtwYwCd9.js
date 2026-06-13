import { jsxs, jsx } from "react/jsx-runtime";
import { L as LegalLayout } from "./LegalLayout-BbdgZpoM.js";
import "@tanstack/react-router";
import "./Footer-Rqio-N63.js";
import "react";
function CookiePage() {
  const reset = () => {
    localStorage.removeItem("mirae-cookies");
    window.dispatchEvent(new Event("mirae-cookies-changed"));
    location.reload();
  };
  return /* @__PURE__ */ jsxs(LegalLayout, { title: "Cookie", accent: "Richtlinie", lead: "So gehen wir mit Cookies und vergleichbaren Technologien um.", children: [
    /* @__PURE__ */ jsx("h2", { children: "Was sind Cookies?" }),
    /* @__PURE__ */ jsx("p", { children: "Cookies sind kleine Textdateien, die beim Besuch unserer Website auf Ihrem Endgerät gespeichert werden. Sie helfen uns, die Website nutzerfreundlich zu gestalten und bestimmte Funktionen bereitzustellen." }),
    /* @__PURE__ */ jsx("h2", { children: "Welche Cookies verwenden wir?" }),
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Essentielle Cookies:" }),
        " Diese sind technisch notwendig, etwa um Ihre Cookie-Auswahl zu speichern."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Externe Dienste (Google Maps):" }),
        " Wir laden die Google-Maps-Karte erst nach Ihrer ausdrücklichen Zustimmung. Erst dann werden Daten an Google übertragen."
      ] })
    ] }),
    /* @__PURE__ */ jsx("h2", { children: "Einwilligung verwalten" }),
    /* @__PURE__ */ jsx("p", { children: "Sie können Ihre Cookie-Einstellungen jederzeit zurücksetzen und beim nächsten Aufruf erneut entscheiden." }),
    /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-outline", onClick: reset, children: "Cookie-Einstellungen zurücksetzen" }) }),
    /* @__PURE__ */ jsx("h2", { children: "Rechtsgrundlage" }),
    /* @__PURE__ */ jsx("p", { children: "Rechtsgrundlage für den Einsatz technisch notwendiger Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Für nicht notwendige Cookies und das Laden externer Inhalte ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO sowie § 25 Abs. 1 TTDSG erforderlich." })
  ] });
}
export {
  CookiePage as component
};
