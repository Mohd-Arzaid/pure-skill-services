import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const ServiceFaq = ({ faqs }) => (
  <section
    id="faqs"
    className="my-2 scroll-mt-28"
    aria-label="Frequently Asked Questions"
  >
    <div className="max-w-5xl mx-auto px-4 py-8 md:p-12">
      <h2 className="text-xl md:text-3xl text-center font-inter font-semibold text-neutral-900">
        Frequently Asked Questions
      </h2>
      <p className="text-neutral-500 text-center text-sm md:text-base font-inter">
        Can't find the answer you are looking for?{" "}
        <a
          href="/contact"
          className="text-neutral-800 font-inter text-base font-medium underline underline-offset-4 hover:text-teal-700 transition-colors"
        >
          Reach out to us!
        </a>
      </p>

      <div className="w-full max-w-4xl mt-4 md:mt-6 mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="font-inter text-sm md:text-base text-neutral-700 font-medium">
                <div className="flex-1 text-left">
                  <span className="mr-2 font-semibold">{index + 1}.</span>
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-inter text-sm md:text-base text-neutral-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default ServiceFaq;
