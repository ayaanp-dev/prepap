import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function FAQ() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do you keep students motivated?</AccordionTrigger>
          <AccordionContent>
            We have a streak system, similar to that of duolingo & we send email notifications.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do you prepare students for the time limits on the exam?</AccordionTrigger>
          <AccordionContent>
            On both our quizzes and practice tests, we have timers on the screen available.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How do you keep students focused?</AccordionTrigger>
          <AccordionContent>
            Through an AI music recommendation System, students can listen to focus music.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is the Q&A system effective?</AccordionTrigger>
          <AccordionContent>
            We use ChatGPT so students can immediately get an answer to their questions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Is it free?</AccordionTrigger>
          <AccordionContent>
            Yes, the site is 100% free.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>How can I support?</AccordionTrigger>
          <AccordionContent>
            Follw us on social media or send a donation.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  