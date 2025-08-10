import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSupport from "@/app/[locale]/components/LanguageSupport";
import Divider from "@/components/ui/divider";
import { cn } from "@/utils/style";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer
      className={cn(
        "flex items-center justify-center",
        "px-5 pt-10 pb-12",
        "border-t border-t-slate-200 bg-white",
        "max-md:min-h-[200px] max-md:py-8 max-md:pb-10 max-md:text-[13px]",
      )}
    >
      <div
        className={cn(
          "flex w-full max-w-[1200px] justify-between",
          "max-md:flex-col-reverse max-md:gap-[30px]",
        )}
      >
        <div
          className={cn(
            "flex min-h-[96px] flex-col justify-between text-[14px]",
          )}
        >
          <div className="flex flex-col text-black/80 max-md:gap-[10px]">
            <div className="flex items-center max-md:flex-col max-md:items-start max-md:gap-[10px]">
              <span>{t("info1")}</span>
              <Divider className="mx-[10px] max-md:hidden" />{" "}
              <span>{t("info2")}</span>
            </div>
            <div className="flex items-center max-md:flex-col max-md:items-start max-md:gap-[10px]">
              <span>{t("info3")}</span>{" "}
              <Divider className="mx-[10px] max-md:hidden" />{" "}
              <span>{t("info4")}</span>
            </div>
            <div className="flex items-center max-md:flex-col max-md:items-start max-md:gap-[10px]">
              <span className="font-semibold">{t("info7")}</span>
              <Divider className="mx-[10px] max-md:hidden" />
              <span>{t("info5")}</span>{" "}
              <Divider className="mx-[10px] max-md:hidden" />
              <div className="flex items-center">{t("info6")}</div>
            </div>
          </div>
          <div className="text-black/60 max-md:mt-[20px]">
            © {new Date().getFullYear()} Seoul Moment. All Rights Reserved.
          </div>
        </div>
        <div
          className={cn(
            "flex flex-col gap-[10px]",
            "max-md:flex-row max-md:justify-between",
          )}
        >
          <LanguageSupport />
          <div className="flex gap-[10px]">
            <Link href="" rel="noopener noreferrer" target="_blank">
              <Image
                alt="line"
                className="max-md:h-[36px] max-md:w-[36px]"
                height={50}
                src="/line.svg"
                width={50}
              />
            </Link>
            <Link
              href="https://www.instagram.com/seoul_moment_tw"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt="instagram"
                className="max-md:h-[36px] max-md:w-[36px]"
                height={50}
                src="/insta.svg"
                width={50}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
