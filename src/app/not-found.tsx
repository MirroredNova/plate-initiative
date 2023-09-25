import BigHeader from "@/components/shared/BigHeader";
import BodySection from "@/components/shared/BodySection";
import Link from "next/link";

export default function NotFound() {
  return (
    <BodySection>
      <div className="h-fit my-auto flex px-3 sm:px-12 py-20 max-w-3xl flex-col font-alice text-lg">
        <BigHeader>Not Found</BigHeader>
        <p>Could not find requested resource</p>
        <Link
          href="/"
          className="bg-accent_primary text-accent_secondary rounded-full 
          font-sofia py-2 px-4 w-fit font-extrabold text-base sm:text-lg 
          hover:opacity-70 transition-all duration-300 ease-in-out mt-6"
        >
          Return Home
        </Link>
      </div>
    </BodySection>
  );
}
