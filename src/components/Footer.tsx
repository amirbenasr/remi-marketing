"use client";

import Link from "next/link";
import { FacebookIcon, LinkedInIcon, InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-white py-12  ">
      <div className="flex flex-col mt-8   max-w-7xl mx-auto px-6 ">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <Link
            href="https://www.facebook.com/remyagency"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <FacebookIcon className="w-5 h-5 text-white" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/cedremy/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <LinkedInIcon className="w-5 h-5 text-white" />
          </Link>

          <Link
            href="https://www.instagram.com/ced.remy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <InstagramIcon className="w-5 h-5 text-white" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-black text-[12px] font-medium">
          <p>
            &copy; 2026 REMY.MARKETING |{" "}
            <Link
              href="/politique"
              className="hover:text-black transition-colors"
            >
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
