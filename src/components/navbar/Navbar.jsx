import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = async () => {
  //   const session = await auth();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Echo
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
