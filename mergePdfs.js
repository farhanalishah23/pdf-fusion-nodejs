// mergePdfs.js
import PDFMerger from 'pdf-merger-js';

export const mergePdfs = async (p1, p2) => {
  const merger = new PDFMerger();
  let d = new Date().getTime();
  await merger.add(p1);
  await merger.add(p2);
  await merger.save(`public/${d}.pdf`);
  console.log("🛠 Generating file with name:", d); // 🔍 DEBUG LOG
  return d;
};
