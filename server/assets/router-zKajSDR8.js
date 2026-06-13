import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "./assets/styles-D5E5Gz1o.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "fallback", children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "404" }),
    /* @__PURE__ */ jsx("h2", { children: "Seite nicht gefunden" }),
    /* @__PURE__ */ jsx("p", { children: "Die angeforderte Seite existiert nicht." }),
    /* @__PURE__ */ jsx("div", { className: "actions", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "btn btn-primary", children: "Zur Startseite" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "fallback", children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { children: "Diese Seite konnte nicht geladen werden" }),
    /* @__PURE__ */ jsx("p", { children: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." }),
    /* @__PURE__ */ jsxs("div", { className: "actions", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "btn btn-primary",
          children: "Erneut versuchen"
        }
      ),
      /* @__PURE__ */ jsx("a", { href: "/", className: "btn btn-outline", children: "Startseite" })
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$3 = () => import("./impressum-BZQ0WYPq.js");
const Route$3 = createFileRoute("/impressum")({
  head: () => ({
    meta: [{
      title: "Impressum · MIRAÈ Hookah Lounge München"
    }, {
      name: "description",
      content: "Impressum und rechtliche Angaben der MIRAÈ Hookah Lounge in München gemäß § 5 TMG."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./datenschutz-lOzfJRln.js");
const Route$2 = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [{
      title: "Datenschutzerklärung · MIRAÈ Hookah Lounge"
    }, {
      name: "description",
      content: "Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./cookie-richtlinie-VIw6ou6J.js");
const Route$1 = createFileRoute("/cookie-richtlinie")({
  head: () => ({
    meta: [{
      title: "Cookie-Richtlinie · MIRAÈ Hookah Lounge"
    }, {
      name: "description",
      content: "Informationen zu den auf dieser Website verwendeten Cookies."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Cysxpmd6.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "MIRAÈ Hookah Lounge München · Premium Shisha Bar"
    }, {
      name: "description",
      content: "Münchens exklusivste Shisha-Erfahrung. Premium Tabak, kuratierte Drinks, samtige Lounge-Atmosphäre. Friedrichshafener Str. 17, 81243 München."
    }, {
      property: "og:title",
      content: "MIRAÈ Hookah Lounge · München"
    }, {
      property: "og:description",
      content: "Münchens exklusivste Shisha-Erfahrung."
    }, {
      property: "og:type",
      content: "website"
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ImpressumRoute = Route$3.update({
  id: "/impressum",
  path: "/impressum",
  getParentRoute: () => Route$4
});
const DatenschutzRoute = Route$2.update({
  id: "/datenschutz",
  path: "/datenschutz",
  getParentRoute: () => Route$4
});
const CookieRichtlinieRoute = Route$1.update({
  id: "/cookie-richtlinie",
  path: "/cookie-richtlinie",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  CookieRichtlinieRoute,
  DatenschutzRoute,
  ImpressumRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
