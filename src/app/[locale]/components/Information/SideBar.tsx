import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/utils/style";

export default function SideBar() {
  const activeId = useActiveSection(["link1", "link2", "link3"]);

  const handleClick = (hash: string) => () => {
    const target = document.querySelector(hash);

    if (!target) return;

    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "sticky top-[100px] inline-flex flex-col gap-[12px]",
        "h-fit min-w-[220px]",
        "max-lg:hidden",
      )}
    >
      <button
        className={cn(
          "cursor-pointer text-start text-black/50 hover:underline",
          (activeId === "link1" || activeId === "") && "font-bold text-black",
        )}
        onClick={handleClick("#link1")}
        type="button"
      >
        Better Info & Service
      </button>
      <button
        className={cn(
          "cursor-pointer text-start text-black/50 hover:underline",
          activeId === "link2" && "font-bold text-black",
        )}
        onClick={handleClick("#link2")}
        type="button"
      >
        Discover Style & Meaning
      </button>
      <button
        className={cn(
          "cursor-pointer text-start text-black/50 hover:underline",
          activeId === "link3" && "font-bold text-black",
        )}
        onClick={handleClick("#link3")}
        type="button"
      >
        Experience Seoul, Daily
      </button>
    </div>
  );
}
