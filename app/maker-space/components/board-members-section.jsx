"use client";
import { motion } from "framer-motion";
import BoardMemberCard from "./board-member-card";

const BoardMembersSection = () => {
  // Sample board members data - this would typically come from a database or API
  const boardMembers = [
    {
      name: "Jane Doe",
      title: "President",
      avatar: "/images/makerspace/avatar-placeholder.jpg",
    },
    {
      name: "John Smith",
      title: "Vice President",
      avatar: "/images/makerspace/avatar-placeholder.jpg",
    },
    {
      name: "Emily Johnson",
      title: "Treasurer",
      avatar: "/images/makerspace/avatar-placeholder.jpg",
    },
    {
      name: "Michael Brown",
      title: "Secretary",
      avatar: "/images/makerspace/avatar-placeholder.jpg",
    },
    {
      name: "Sarah Wilson",
      title: "Events Coordinator",
      avatar: "/images/makerspace/avatar-placeholder.jpg",
    },
    {
      name: "David Lee",
      title: "Technical Lead",
      avatar: "/images/makerspace/avatar-placeholder.jpg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-900 py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-yellow">
          Our Board Members
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-white/80">
          Meet the dedicated team behind our makerspace who work tirelessly to
          create an innovative environment for all members.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {boardMembers.map((member, index) => (
            <BoardMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BoardMembersSection;
