"use client"
import { Button } from "@/components/ui/button";

import { useTheme } from "next-themes";

/**
 * Client React component that renders a "Toggle" button which switches the app to dark theme.
 *
 * Clicking the button logs the current `theme` value to the console and then calls `setTheme('dark')`.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <Button onClick={() => { console.log(theme); setTheme('dark') }}>Toggle</Button>
    </div>
  );
}
