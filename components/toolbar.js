import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Življenje</div>
      <div onClick={() => router.push("/tehnologija")}>Tehnologija</div>
      <div onClick={() => router.push("/politika")}>Politika</div>
      <div onClick={() => router.push("/svet")}>Svet</div>

      <div
        onClick={() =>
          (window.location.href = "https://insane-blog.vercel.app/")
        }
      >
        Blog via Vercel
      </div>
    </div>
  );
};
