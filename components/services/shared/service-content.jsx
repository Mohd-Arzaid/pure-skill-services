import { cn } from "@/lib/utils";

export const ServiceIndexHeading = ({ children, className }) => (
  <div className="flex w-full items-center gap-3 mb-3 md:mb-5">
    <div
      className={cn(
        "uppercase font-semibold font-inter text-base md:text-xl text-neutral-800",
        className
      )}
    >
      {children}
    </div>

    <div className="h-[1.5px] w-24 bg-neutral-600 rounded-full" />
  </div>
);

export const SectionHeadingTwo = ({ as: Tag = "h2", children, className }) => (
  <Tag
    className={cn(
      "text-2xl md:text-4xl font-inter font-bold text-neutral-800",
      className
    )}
  >
    {children}
  </Tag>
);

export const ServiceImage = ({ src, alt, title, className }) => (
  <img
    src={src}
    alt={alt}
    title={title}
    className={cn("max-w-full h-auto rounded-lg shadow-md", className)}
  />
);

export const SectionHeadingThree = ({ children, className }) => (
  <div
    className={cn(
      "font-semibold font-inter text-lg md:text-xl text-neutral-800",
      className
    )}
  >
    {children}
  </div>
);

export const ServiceParagraph = ({ children, className }) => (
  <div
    className={cn(
      "font-inter text-base md:text-lg text-neutral-600",
      className
    )}
  >
    {children}
  </div>
);

export const ServiceSeparator = ({ className }) => (
  <div className={cn("h-px w-full bg-neutral-200", className)} />
);
