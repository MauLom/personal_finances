'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Accounts", href: "/accounts" },
    { name: "Transactions", href: "/transactions" },
    { name: "Settings", href: "/settings" },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-gray-900 text-white p-4 z-50 transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0 sm:static sm:w-64`}
    >
      {/* Header */}
      <div className="text-2xl font-bold mb-8">FINEbank.IO</div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`p-2 rounded ${
              pathname === item.href ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Close Button (Mobile Only) */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-white sm:hidden"
      >
        ✕
      </button>
    </aside>
  );
};

export default Sidebar;
