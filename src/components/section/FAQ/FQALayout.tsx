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
      <Accordion className="mt-1" type="single" collapsible>
        <AccordionItem className="rounded-xl bg-secondary shadow-sm" value="item-1">
          <AccordionTrigger className="text-start bg-primary rounded-xl p-4 min-h-20">
            <p className=" font-normal text-[15px]  max-w-prose">{title}</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="p-4 bg-secondary rounded-xl">{desc}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FQALayout;
