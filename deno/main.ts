import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { extname, fromFileUrl } from "https://deno.land/std@0.224.0/path/mod.ts";

const distPath = fromFileUrl(new URL("../dist/", import.meta.url));

serve(async (req) => {
  const url = new URL(req.url);
  let filePath = `${distPath}${url.pathname}`;

  try {
    const file = await Deno.readFile(filePath);

    // Set content-type by extension
    const ext = extname(filePath);
    const contentType = {
      ".js": "application/javascript",
      ".css": "text/css",
      ".html": "text/html",
      ".json": "application/json",
      ".svg": "image/svg+xml",
      ".ico": "image/x-icon",
    }[ext] || "application/octet-stream";

    return new Response(file, {
      headers: { "content-type": contentType },
    });
  } catch {
    // 🔁 Jika file tidak ditemukan, fallback ke index.html (SPA)
    const indexHtml = await Deno.readFile(`${distPath}/index.html`);
    return new Response(indexHtml, {
      headers: { "content-type": "text/html" },
    });
  }
}, { port: 8000 });
