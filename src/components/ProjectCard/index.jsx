import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-xl"
    >
      {/* Image */}
      <div className="relative h-full w-full">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={500}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="eager"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

      {/* Content */}
      <motion.div
        className="absolute right-0 -bottom-24 left-0 p-6 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100"
        // initial={{ opacity: 0, y: 30 }}
        // whileHover={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs tracking-[0.15em] text-white/70 uppercase">
              {project.type}
            </p>
            <h3 className="text-2xl font-medium text-white md:text-3xl">
              {project.title}
            </h3>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border bg-white text-black transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 hover:border-white hover:bg-transparent hover:text-white">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
