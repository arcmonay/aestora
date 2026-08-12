import { createWriteStream, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "media");
mkdirSync(outDir, { recursive: true });

const files = {
  "hall.jpg": "1519494026892-80bbd2d6fd0d",
  "device.jpg": "1576091160399-112ba8d25d1d",
  "consult.jpg": "1629909613654-28e377c37b09",
  "hands.jpg": "1551076805-e1869033e561",
  "body.jpg": "1540555700478-4be289fbecef",
  "face.jpg": "1487412720507-e7ab37603c6f",
  "lymph.jpg": "1552693673-1bf958298935",
  "room.jpg": "1643684391140-c5056cfd3436",
};

async function download(id, dest) {
  const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;
  const res = await fetch(url, {
    headers: { Accept: "image/*" },
    redirect: "follow",
  });
  if (!res.ok || !res.body) throw new Error(`${res.status} ${id}`);
  await pipeline(res.body, createWriteStream(dest));
}

for (const [name, id] of Object.entries(files)) {
  const dest = join(outDir, name);
  try {
    await download(id, dest);
    console.log("ok", dest);
  } catch (err) {
    console.warn("skip", name, err.message);
  }
}
