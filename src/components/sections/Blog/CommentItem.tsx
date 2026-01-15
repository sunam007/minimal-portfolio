"use client";

import { useState } from "react";
import CommentForm from "./CommentForm";

export interface Comment {
  id: string;
  postSlug: string;
  authorName: string;
  authorEmail: string;
  content: string;
  date: string;
  parentId?: string;
  replies?: Comment[];
}

interface CommentItemProps {
  comment: Comment;
  onReply: (parentId: string, name: string, email: string, content: string) => void;
}

export default function CommentItem({ comment, onReply }: CommentItemProps) {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleReply = (name: string, email: string, content: string) => {
    onReply(comment.id, name, email, content);
    setShowReplyForm(false);
  };

  return (
    <div className="border-l-2 border-white/10 pl-4 sm:pl-6">
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="font-semibold text-white">{comment.authorName}</h4>
            <time className="text-sm text-white/50">{formatDate(comment.date)}</time>
          </div>
        </div>
        <p className="text-white/80 leading-relaxed">{comment.content}</p>
        <button
          onClick={() => setShowReplyForm(!showReplyForm)}
          className="text-sm text-white/60 hover:text-white transition-colors"
        >
          {showReplyForm ? "Cancel" : "Reply"}
        </button>
      </div>

      {showReplyForm && (
        <div className="mt-4 ml-4">
          <CommentForm
            onSubmit={handleReply}
            onCancel={() => setShowReplyForm(false)}
            placeholder="Write a reply..."
            isReply={true}
          />
        </div>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-6 space-y-6">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              onReply={onReply}
            />
          ))}
        </div>
      )}
    </div>
  );
}
