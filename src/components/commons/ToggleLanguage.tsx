"use client"

// Next
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Images
import brazil from "@/public/img/flags/brazil.png";
import eua from "@/public/img/flags/eua.png";


// Styles
import style from "./ToggleLanguage.module.css";

export default function ToggleLanguage() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const newLocale = isEnglish ? "pt" : "en";
  const newPath = pathname.replace(/^\/(pt|en)/, "");

  const [rotate, setRotate] = useState(false);

  function handleClick() {
    setRotate(true);
    setTimeout(() => setRotate(false), 400); // Duração do efeito
  }

  return (
    <Link href={`/${newLocale}${newPath}`} scroll={false}>
      <div
        onClick={handleClick}
        className={`${style.tooglelang} ${rotate ? style.rotate : ""}`}
      >
        <Image
          src={isEnglish ? eua : brazil}
          alt={isEnglish ? "Bandeira do Brasil" : "USA Flag"}
          width={32}
        />
      </div>
    </Link>
  );
}
