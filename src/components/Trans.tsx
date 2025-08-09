import { useTranslations } from "next-intl";

interface TransProps {
  ns?: string; // namespace (옵션)
  id: string; // 번역 키
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values?: Record<string, any>; // 치환 값
  className?: string;
}

export default function Trans({ ns, id, values, className }: TransProps) {
  const t = useTranslations(ns); // ns가 undefined면 전역 번역

  return <span className={className}>{t(id, values)}</span>;
}
