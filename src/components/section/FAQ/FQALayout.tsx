import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FQALayoutProps {
  title: string;
  desc: string;
}
function FQALayout({ title, desc }: FQALayoutProps) {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{desc}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FQALayout;
