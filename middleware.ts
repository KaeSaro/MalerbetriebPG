import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Plain HTML served from the Edge middleware when maintenance mode is on (no Next.js render). */
const MAINTENANCE_HTML = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex,nofollow" />
  <title>Wartungsmodus | Malerbetrieb Pascal Gerdes</title>
  <link rel="icon" href="/faviconmb.svg" type="image/svg+xml" />
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ded5d0;
      color: #000;
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif;
      padding: 1.5rem;
    }
    main { max-width: 32rem; text-align: center; }
    img { max-width: min(200px, 55vw); height: auto; margin: 0 auto 2rem; display: block; }
    h1 {
      font-size: clamp(1.25rem, 4vw, 1.75rem);
      font-weight: 500;
      margin: 0 0 1rem;
    }
    p { color: #889cab; font-size: 1rem; line-height: 1.6; margin: 0; }
  </style>
</head>
<body>
  <main>
    <img src="/PGlogo2.svg" alt="Malerbetrieb Pascal Gerdes" width="140" height="90" />
    <h1>Website wird gewartet</h1>
    <p>Wir arbeiten gerade an unserer Homepage. Bitte schauen Sie in Kürze wieder vorbei.</p>
  </main>
</body>
</html>`;

function maintenanceEnabled(): boolean {
  const raw = process.env.MAINTENANCE_MODE;
  if (raw != null && raw === "true") return true;
  return false;
}


export function middleware(request: NextRequest) {
  if (!maintenanceEnabled()) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next")) {
    return NextResponse.next();
  }
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return NextResponse.next();
  }
  if (pathname.startsWith("/api")) {
    return new NextResponse(
      JSON.stringify({
        error: "Wartungsmodus",
        message: "Die Website wird derzeit gewartet.",
      }),
      {
        status: 503,
        headers: {
          "content-type": "application/json; charset=utf-8",
          "cache-control": "no-store",
        },
      }
    );
  }

  // 200 so browsers render the HTML; meta robots noindex. APIs still use 503.
  return new NextResponse(MAINTENANCE_HTML, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
