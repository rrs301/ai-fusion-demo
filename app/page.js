"use client"
import { Button } from "@/components/ui/button";

import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <Button onClick={() => { console.log(theme); setTheme('dark') }}>Toggle</Button>
    </div>
  );
}
