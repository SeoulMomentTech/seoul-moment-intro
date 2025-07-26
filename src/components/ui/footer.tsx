import Image from "next/image";
import Link from "next/link";
import LanguageSupport from "@/app/[locale]/components/LanguageSupport";
import { cn } from "@/utils/style";

export default function Footer() {
  return (
    <footer
      className={cn(
        "flex items-center justify-center",
        "px-5 pt-10 pb-12",
        "border-t border-t-slate-200 bg-white",
        "max-md:min-h-[200px] max-md:py-8 max-md:text-[13px]",
      )}
    >
      <div
        className={cn(
          "flex w-full max-w-[1200px] justify-between",
          "max-md:flex-col-reverse max-md:gap-[30px]",
        )}
      >
        <div
          className={cn("flex h-[96px] flex-col justify-between text-[14px]")}
        >
          <div className="text-black/80">
            <div>首爾映像有限公司 （Seoul Moment）｜統一編號: 00148871</div>
            <div>
              負責人: 朴佑濬 ｜ 地址: 台北市大安區忠孝東路四段231號10樓之2
            </div>
          </div>
          <div className="text-black/60">
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
            <Link href="" rel="noopener noreferrer" target="_blank">
              <Image
                alt="line"
                className="max-md:h-[36px] max-md:w-[36px]"
                height={50}
                src="/line.svg"
                width={50}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
