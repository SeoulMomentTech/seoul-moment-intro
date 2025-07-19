"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { cn } from "@/utils/style";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

type LanguageCode = keyof typeof locales;

const locales = {
  ko: "한국어",
  en: "English",
  "zh-TW": "繁體中文",
};

export default function LanguageSupport() {
  const currentLocale = useLocale() as LanguageCode;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex min-w-[110px] items-center justify-between px-[8px] py-[4px] text-start",
            "rounded-[8px] border border-black text-[14px]",
            "max-md:min-w-[120px]",
          )}
          type="button"
        >
          {locales[currentLocale]}
          <ChevronDown height={16} width={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-[110px] text-[14px] max-md:min-w-[120px]"
        side="top"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link className="w-full" href="/ko">
              한국어
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="w-full" href="/en">
              English
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="w-full" href="/zh-TW">
              繁體中文
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
