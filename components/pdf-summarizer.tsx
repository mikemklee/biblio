import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Document } from "langchain/document";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { cn } from "@/lib/cn";
import { Textarea } from "./ui/textarea";
import { DUMMY_MESSAGES } from "@/data/dummyChatHistory";

export type Message = {
  type: "apiMessage" | "userMessage";
  message: string;
  isStreaming?: boolean;
  sourceDocs?: Document[];
};

const PDFSummarizer = () => {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [messageState, setMessageState] = useState<{
    messages: Message[];
    pending?: string;
    history: [string, string][];
    pendingSourceDocs?: Document[];
  }>({
    messages: DUMMY_MESSAGES,
    history: [],
  });

  const { messages, history } = messageState;

  const messageListRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  //handle form submission
  async function handleSubmit(e: any) {
    e.preventDefault();

    setError(null);

    if (!query) {
      alert("Please input a question");
      return;
    }

    const question = query.trim();

    setMessageState((state) => ({
      ...state,
      messages: [
        ...state.messages,
        {
          type: "userMessage",
          message: question,
        },
      ],
    }));

    setLoading(true);
    setQuery("");

    try {
      const response = await fetch("/api/summary/pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          history,
        }),
      });
      const data = await response.json();
      console.log("data", data);

      if (data.error) {
        setError(data.error);
      } else {
        setMessageState((state) => ({
          ...state,
          messages: [
            ...state.messages,
            {
              type: "apiMessage",
              message: data.text,
              sourceDocs: data.sourceDocuments,
            },
          ],
          history: [...state.history, [question, data.text]],
        }));
      }

      setLoading(false);

      //scroll to bottom
      messageListRef.current?.scrollTo(0, messageListRef.current.scrollHeight);
    } catch (error) {
      setLoading(false);
      setError("An error occurred while fetching the data. Please try again.");
      console.error("error", error);
    }
  }

  //prevent empty submissions
  const handleEnter = (e: any) => {
    if (e.key === "Enter" && query) {
      handleSubmit(e);
    } else if (e.key == "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="mx-auto flex flex-col gap-4">
      <main className="">
        <div ref={messageListRef} className="flex flex-col justify-stretch">
          {messages.map((message, index) => {
            return (
              <div
                key={`chatMessage-${index}`}
                className={cn(
                  "p-5 mb-4 rounded-lg text-sm w-full max-w-[32rem]",
                  message.type === "apiMessage"
                    ? "bg-muted self-start"
                    : "bg-primary self-end"
                )}
              >
                <div className="text-sm">
                  <ReactMarkdown className="prose text-sm text-white">
                    {message.message}
                  </ReactMarkdown>
                </div>
                {/* {message.sourceDocs && (
                    <div className="py-4" key={`sourceDocsAccordion-${index}`}>
                      <Accordion type="single" collapsible className="flex-col">
                        {message.sourceDocs.map((doc, index) => (
                          <div
                            key={`messageSourceDocs-${index}`}
                            className="border border-t-foreground last:border-b-foreground"
                          >
                            <AccordionItem value={`item-${index}`}>
                              <AccordionTrigger>
                                <h3>Source {index + 1}</h3>
                              </AccordionTrigger>
                              <AccordionContent>
                                <ReactMarkdown className="prose text-sm text-white">
                                  {doc.pageContent}
                                </ReactMarkdown>
                                <p className="mt-2">
                                  <b>Source:</b> {doc.metadata.source}
                                </p>
                                <p>
                                  <b>Location:</b> Page{" "}
                                  {doc.metadata["loc.pageNumber"]}, Lines{" "}
                                  {doc.metadata["loc.lines.from"]} -{" "}
                                  {doc.metadata["loc.lines.to"]}
                                </p>
                              </AccordionContent>
                            </AccordionItem>
                          </div>
                        ))}
                        {}
                      </Accordion>
                    </div>
                  )} */}
              </div>
            );
          })}
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <Textarea
              disabled={loading}
              onKeyDown={handleEnter}
              ref={textAreaRef}
              autoFocus={false}
              rows={1}
              maxLength={512}
              id="userInput"
              name="userInput"
              placeholder={
                loading ? "Waiting for response..." : "Chat with Biblio"
              }
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" disabled={loading}>
              {loading ? (
                <div>loading...</div>
              ) : (
                // Send icon SVG in input field
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              )}
            </button>
          </form>
        </div>
      </main>
      {error && (
        <div className="border border-red-400 rounded-md p-2 bg-red-50 text-sm">
          <p className="text-red-500">{error}</p>
        </div>
      )}
    </div>
  );
};

export default PDFSummarizer;
