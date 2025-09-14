import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * Home page component that renders a single Button labeled "Hello".
 *
 * @returns {JSX.Element} The homepage JSX containing a Button with the text "Hello".
 */
export default function Home() {
  return (
    <div>
      <Button>Hello</Button>
    </div>
  );
}
