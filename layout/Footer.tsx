import Image from "next/image";
import React from "react";
import nextjslogo from "@/public/icons/next.svg";
import githublogo from "@/public/icons/GitHub.svg";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-zinc-700 mt-44 lg:min-h-30 min-h-full relative">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16">
        <div className="flex flex-col items-center ">
          <div className="flex">
            <h3 className="font-incognito mr-1">Built with:</h3>
            <a
              href="https://nextjs.org"
              className="flex items-center  hover:underline"
            >
              <Image
                src={nextjslogo}
                width={20}
                height={20}
                alt="nextjs logo"
                className="mr-1"
              />
              Next.js
            </a>
          </div>
          <div className="flex mt-1">
            <h3 className="font-inter  mr-1">Host with:</h3>
            <a
              href="https://nextjs.org"
              className="flex items-center  hover:underline"
            >
              <Image
                src={githublogo}
                width={20}
                height={20}
                alt="github logo"
                className="mr-1"
              />
              GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:items-end items-center lg:text-start text-center">
          <small className="text-zinc-500">
            Copyright &copy; MIR {new Date().getFullYear()} All
            rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
