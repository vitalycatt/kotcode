/**
 * Оптимизатор изображений для сборки.
 *
 * Берёт исходники из assets/<dir> и кладёт лёгкие WebP в public/<dir>.
 * В сборку (public) попадают только сжатые версии — исходники остаются
 * в assets и в бандл не идут.
 *
 * Запуск: npm run optimize:images
 */
import { readdir, mkdir, stat } from "node:fs/promises";
import { extname, join, basename } from "node:path";
import sharp from "sharp";

// Пары «источник → назначение». Добавляй сюда новые папки при необходимости.
const JOBS = [
  { src: "assets/cases", out: "public/cases" },
  { src: "assets/about", out: "public/about" },
];

const MAX_WIDTH = 1600; // ретина-2x для слота ~640px — больше не нужно
const QUALITY = 78;
const SRC_EXT = new Set([".png", ".jpg", ".jpeg", ".webp"]);

function kb(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

async function run() {
  let totalIn = 0;
  let totalOut = 0;

  for (const { src, out } of JOBS) {
    await mkdir(out, { recursive: true });
    const files = (await readdir(src)).filter((f) =>
      SRC_EXT.has(extname(f).toLowerCase()),
    );

    for (const file of files) {
      const srcPath = join(src, file);
      const outPath = join(out, `${basename(file, extname(file))}.webp`);

      const inSize = (await stat(srcPath)).size;
      await sharp(srcPath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outPath);
      const outSize = (await stat(outPath)).size;

      totalIn += inSize;
      totalOut += outSize;
      const saved = (100 * (1 - outSize / inSize)).toFixed(0);
      console.log(
        `${file}  ${kb(inSize)} → ${kb(outSize)}  (-${saved}%)  →  ${outPath}`,
      );
    }
  }

  console.log(
    `\nИтого: ${kb(totalIn)} → ${kb(totalOut)}  (-${(
      100 *
      (1 - totalOut / totalIn)
    ).toFixed(0)}%)`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
