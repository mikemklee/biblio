"use client";

import PDFSummarizer from "@/components/pdf-summarizer";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto flex flex-col min-h-full gap-4 pt-10 pb-10">
      <div>
        <div className="space-y-1">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Chat with Biblio
          </h1>
        </div>
      </div>
      <section>
        <PDFSummarizer />
      </section>
      <section className="mt-auto text-sm text-center">
        by{" "}
        <a
          href="https://github.com/mikemklee"
          className="font-semibold hover:underline"
          target="_blank"
        >
          @mikemklee
        </a>
      </section>
    </div>
  );
}
