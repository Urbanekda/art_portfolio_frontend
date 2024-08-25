import React from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownDisplay({ markdownText }) {
    return(
        <div className="text-floral-white prose prose-p:font-lato prose-headings:font-lato prose-headings:font-medium prose-heading-2:text-2xl prose-headings:text-floral-white prose-headings:underline prose-strong:text-floral-white">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
    );
};