"use client";

import { useEffect } from "react";

import { motion } from "framer-motion";

import { X } from "lucide-react";

const FullScreenVideoModal = ({ reel, onClose }) => {
  //   handle escape key
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  //   prevent scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <motion.div
        className="bg-foreground/80 absolute inset-0 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-5xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Close button */}
        <motion.button
          className="bg-background/10 text-background hover:bg-background/20 absolute -top-12 right-0 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm transition-colors"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="h-5 w-5" />
        </motion.button>

        {/* Video */}
        <div className="bg-foreground/20 aspect-video overflow-hidden rounded-xl">
          {reel.videoYoutube ? (
            <iframe
              src={reel.videoUrl}
              className="h-full w-full object-cover"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <video
              src={reel.videoUrl}
              className="h-full w-full object-contain"
              controls
              autoPlay
              playsInline
            />
          )}
        </div>

        {/* Info below video */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-background/50 text-xs tracking-wider uppercase">
            {reel.category}
          </span>
          <span className="text-background/30">-</span>
          <h3 className="text-background/80 text-sm font-medium">
            {reel.title}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FullScreenVideoModal;
