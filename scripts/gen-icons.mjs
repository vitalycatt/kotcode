/**
 * Генерация иконок сайта из assets/icon/cat.png.
 *
 * Кладёт в src/app (Next App Router сам подхватывает эти имена и проставляет
 * <link> в <head>):
 *   - icon.png        (512×512, с прозрачностью)
 *   - apple-icon.png  (180×180, на белом фоне — для iOS)
 *   - favicon.ico     (16/32/48 — легаси, /favicon.ico)
 *
 * Запуск: npm run gen:icons
 */
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const SRC = "assets/icon/cat.png";
const OUT = "src/app";

async function run() {
  // Основная иконка — прозрачный PNG
  await sharp(SRC)
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(join(OUT, "icon.png"));

  // Apple touch — на белом фоне (iOS не любит прозрачность)
  await sharp(SRC)
    .resize(180, 180, { fit: "contain", background: "#ffffff" })
    .flatten({ background: "#ffffff" })
    .png()
    .toFile(join(OUT, "apple-icon.png"));

  // favicon.ico — набор размеров из PNG-буферов
  const sizes = [16, 32, 48];
  const buffers = await Promise.all(
    sizes.map((s) =>
      sharp(SRC)
        .resize(s, s, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer(),
    ),
  );
  const ico = await pngToIco(buffers);
  await writeFile(join(OUT, "favicon.ico"), ico);

  console.log("Иконки готовы: icon.png (512), apple-icon.png (180), favicon.ico (16/32/48)");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
