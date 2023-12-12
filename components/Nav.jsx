// link (next js)
import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

// framer motion
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <motion.nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{
                opacity: link.path === path ? 1 : 0,
                y: link.path === path ? 0 : "-100%",
              }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
            {link.name}
          </Link>
        );
      })}
    </motion.nav>
  );
};

export default Nav;
