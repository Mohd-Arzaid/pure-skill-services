import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export const ServiceIndexHeading = ({ children, className }) => (
  <div className="flex w-full items-center gap-3 mb-3 md:mb-5">
    <div
      className={cn(
        "uppercase font-semibold font-inter text-base md:text-lg text-neutral-800",
        className
      )}
    >
      {children}
    </div>

    <div className="h-[1.5px] w-20 bg-neutral-600 rounded-full" />
  </div>
);

export const SectionHeadingTwo = ({ as: Tag = "h2", children, className }) => (
  <Tag
    className={cn(
      "text-2xl md:text-3xl font-inter font-bold text-neutral-800",
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

export const SectionHeadingThree = ({
  as: Tag = "h3",
  children,
  className,
}) => (
  <Tag
    className={cn(
      "font-semibold font-inter text-base md:text-lg text-neutral-800",
      className
    )}
  >
    {children}
  </Tag>
);

export const ServiceParagraph = ({ children, className }) => (
  <p
    className={cn(
      "font-inter text-sm md:text-base text-neutral-600",
      className
    )}
  >
    {children}
  </p>
);

export const ServiceSeparator = ({ className }) => (
  <div className={cn("h-px w-full bg-neutral-200", className)} />
);

export const ServiceList = ({ as: Tag = "p", points, className }) => (
  <ul className={cn("flex flex-col gap-5", className)}>
    {points.map((point, index) => (
      <li key={index} className="flex items-start gap-3">
        <div className="bg-neutral-100  p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-6 min-h-6 mt-0.5">
          <Check size={12} className="text-neutral-800" />
        </div>
        <Tag className="font-inter text-sm md:text-base text-neutral-600  text-left max-w-full flex-1">
          {point}
        </Tag>
      </li>
    ))}
  </ul>
);
