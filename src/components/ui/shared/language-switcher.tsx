// src/components/LanguageSwitcher.tsx
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/shared/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/shared/dropdown-menu";

const languages = [
  { code: "id", label: "Indonesia" },
];

interface Props {
  currentLang?: string;
}

export default function LanguageSwitcher({ currentLang = "id" }: Props) {
  const current = languages.find(
    (l) => l.code === currentLang.toLowerCase()
  );

  const handleSelect = (code: string) => {
    const path = window.location.pathname.replace(/^\/(id|en)(?=\/|$)/, "");
    window.location.href = code === "id" ? path || "/" : `/${code}${path}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            className="group gap-1 px-2 text-base font-semibold text-white hover:bg-hover hover:text-white sm:gap-2 sm:px-3 sm:text-lg"
          />
        }
      >
        <span className="sm:hidden">{current?.code.toUpperCase() ?? "ID"}</span>
        <span className="hidden sm:inline">{current?.label ?? "Bahasa"}</span>
        <ChevronDown className="size-4 transition-transform group-aria-expanded:rotate-180 sm:size-5" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-40 bg-white text-black">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            className="cursor-pointer"
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}