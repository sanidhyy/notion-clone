import Image from "next/image";

export const Heros = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/documents.png"
            alt="Documents"
            fill
            className="object-contain dark:hidden select-none"
            draggable={false}
          />

          <Image
            src="/documents-dark.png"
            alt="Documents"
            fill
            className="object-contain hidden dark:block select-none"
            draggable={false}
          />
        </div>

        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src="/reading.png"
            alt="Reading"
            fill
            className="object-contain dark:hidden select-none"
            draggable={false}
          />
          <Image
            src="/reading-dark.png"
            alt="Reading"
            fill
            className="object-contain hidden dark:block select-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};
