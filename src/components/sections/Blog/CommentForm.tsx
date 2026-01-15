"use client";

import { useState, FormEvent } from "react";

interface CommentFormProps {
  onSubmit: (name: string, email: string, content: string) => void;
  onCancel?: () => void;
  placeholder?: string;
  isReply?: boolean;
}

export default function CommentForm({
  onSubmit,
  onCancel,
  placeholder = "Write a comment...",
  isReply = false,
}: CommentFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && content.trim()) {
      onSubmit(name.trim(), email.trim(), content.trim());
      setName("");
      setEmail("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-colors"
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-colors"
        />
      </div>
      <textarea
        placeholder={placeholder}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        rows={4}
        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-colors resize-none"
      />
      <div className="flex gap-3">
        <button
          type="submit"
          className="px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
        >
          {isReply ? "Reply" : "Post Comment"}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-white/10 text-white/70 font-medium rounded-lg hover:bg-white/5 hover:border-white/20 transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
