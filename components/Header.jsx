import React, { useContext } from "react";
import { motion } from "framer-motion";

import Link from "next/link";

const categories = [
  { name: "React", slug: "react" },
  { name: "GraphQL", slug: "graphql" },
  { name: "TypeScript", slug: "ts" },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="w-full inline-block py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Blog title
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {categories.map((category, _) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
