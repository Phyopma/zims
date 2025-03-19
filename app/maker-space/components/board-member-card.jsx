"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const BoardMemberCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="flex flex-col items-center p-4"
    >
      <div className="relative mb-3 h-40 w-40 overflow-hidden rounded-lg bg-neutral-800 shadow-lg">
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h3 className="mb-1 text-xl font-bold text-yellow">{member.name}</h3>
      <p className="text-center text-white/80">{member.title}</p>
    </motion.div>
  );
};

export default BoardMemberCard;
