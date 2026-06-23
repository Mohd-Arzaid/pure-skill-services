import { cn } from "@/lib/utils";

export const SectionHeadingTwo = ({ children, className }) => (
  <div
    className={cn(
      "text-2xl md:text-4xl font-inter font-bold text-neutral-800",
      className
    )}
  >
    {children}
  </div>
);

export const ServiceImage = ({ src, alt, title, className }) => (
  <img
    src={src}
    alt={alt}
    title={title}
    className={cn("max-w-full h-auto rounded-lg shadow-md", className)}
  />
);
