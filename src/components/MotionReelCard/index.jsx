"use client";

import Image from "next/image";

import { useState } from "react";

import { motion } from "framer-motion";

import FullScreenVideoModal from "./FullScreenVideoModal";

import { Maximize2 } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const MotionReelCard = ({ reel }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail Card */}
      <motion.div
        className="group bg-secondary relative aspect-video cursor-pointer overflow-hidden rounded-xl"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Thumbnail image */}
        <div className="from-muted to-secondary absolute inset-0 bg-linear-to-br">
          <Image
            src={reel.thumbnail}
            alt={reel.title}
            className="h-full w-full object-cover"
            width={300}
            height={200}
            loading="eager"
          />
        </div>

        {/* Hover overlay */}
        <div className="bg-foreground/0 group-hover:bg-foreground/60 absolute inset-0 transition-all duration-300" />

        {/* Maximize icon - center */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <motion.div
            className="bg-background/90 text-foreground flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-sm"
            initial={false}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Maximize2 className="h-5 w-5" />
          </motion.div>
        </div>

        {/* Info overlay - bottom */}
        <div className="absolute right-0 bottom-0 left-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-background/70 mb-1 text-xs tracking-wider uppercase">
            {reel.category}
          </p>
          <h3 className="text-background text-sm font-medium">{reel.title}</h3>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <FullScreenVideoModal reel={reel} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default MotionReelCard;
