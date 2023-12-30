"use client";

import PDFChat from "@/components/pdf-chat";

export default function Home() {
  return (
    <div>
      <div className="bg-background max-w-xl mx-auto sticky top-0 py-6 z-10">
        <span className="text-5xl tracking-tight logo">Biblio</span>
      </div>
      <PDFChat />
    </div>
  );
}
