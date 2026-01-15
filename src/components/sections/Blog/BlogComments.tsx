"use client";

import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import CommentItem, { Comment } from "./CommentItem";

interface BlogCommentsProps {
  postSlug: string;
}

export default function BlogComments({ postSlug }: BlogCommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    // Load comments from localStorage
    const stored = localStorage.getItem(`blogComments_${postSlug}`);
    if (stored) {
      setComments(JSON.parse(stored));
    }
  }, [postSlug]);

  const saveComments = (newComments: Comment[]) => {
    localStorage.setItem(`blogComments_${postSlug}`, JSON.stringify(newComments));
    setComments(newComments);
  };

  const handleNewComment = (name: string, email: string, content: string) => {
    const newComment: Comment = {
      id: `comment-${Date.now()}-${Math.random()}`,
      postSlug,
      authorName: name,
      authorEmail: email,
      content,
      date: new Date().toISOString(),
      replies: [],
    };

    const updatedComments = [...comments, newComment];
    saveComments(updatedComments);
  };

  const handleReply = (parentId: string, name: string, email: string, content: string) => {
    const newReply: Comment = {
      id: `reply-${Date.now()}-${Math.random()}`,
      postSlug,
      authorName: name,
      authorEmail: email,
      content,
      date: new Date().toISOString(),
      parentId,
      replies: [],
    };

    const addReply = (comments: Comment[]): Comment[] => {
      return comments.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply],
          };
        }
        if (comment.replies && comment.replies.length > 0) {
          return {
            ...comment,
            replies: addReply(comment.replies),
          };
        }
        return comment;
      });
    };

    const updatedComments = addReply(comments);
    saveComments(updatedComments);
  };

  const topLevelComments = comments.filter((c) => !c.parentId);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
          Comments
        </h2>
        <p className="text-white/60">
          {topLevelComments.length === 0
            ? "No comments yet. Be the first to comment!"
            : `${topLevelComments.length} ${topLevelComments.length === 1 ? "comment" : "comments"}`}
        </p>
      </div>

      <CommentForm onSubmit={handleNewComment} />

      {topLevelComments.length > 0 && (
        <div className="space-y-8 mt-8">
          {topLevelComments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              onReply={handleReply}
            />
          ))}
        </div>
      )}
    </div>
  );
}
