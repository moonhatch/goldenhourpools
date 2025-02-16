import { PortableText, toPlainText } from "@portabletext/react";
import PropTypes from "prop-types";

import { cleanObject, cn } from "@/lib/utils";

import { components } from "../../sanity/portable-text";
import Container from "../container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const generateFaqData = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs?.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: toPlainText(faq.answer),
    },
  })),
});

const FAQ = ({ ...rest }) => {
  let { container, faqs } = rest;

  const faqData = generateFaqData(faqs);

  return (
    <Container {...cleanObject(container)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <Accordion
        className="overflow-hidden border-b border-ghp-250 lg:rounded-2xl lg:border"
        collapsible
        type="single"
      >
        {faqs.map((faq, i) => (
          <AccordionItem className={cn(!i && "border-0")} layer={1} key={faq._key} value={faq._key}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent className="ghp-prose -mt-5">
              <PortableText value={faq.answer} components={components} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
  faqs: PropTypes.array,
};

export default FAQ;
