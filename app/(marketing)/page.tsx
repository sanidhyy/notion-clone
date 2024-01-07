import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      <p className="text-red-500 text-2xl">Hello, World!</p>
      <Button variant="destructive" size="lg">
        Click me
      </Button>
    </div>
  );
}
