import { GraduationCap, NotebookIcon, MessageCircleQuestion } from "lucide-react"
import { FAQ } from "./FAQ"
import { CalendarCheck, Clock, AudioLines, BotMessageSquare, DollarSign, NotebookPen } from "lucide-react";
   
  import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
  import Globe from "@/components/magicui/globe";
  import NumberTicker from "@/components/magicui/number-ticker";
import ClientTweetCard from "../magicui/client-tweet-card";


const features = [
  {
    name: 'Learn through different methods',
    description:
      'We provide students with the best quality resources. This includes textbook and web materials, as well as videos for more interactive learning.',
    icon: GraduationCap,
  },
  {
    name: 'Multiple Practice Methods',
    description: 'The most effective way to ace AP exams is through practice. This includes smaller practice quizzes and full practice tests so you can ace the exam.',
    icon: NotebookIcon,
  },
  {
    name: 'Question Answering',
    description: 'Through AI, we provide a platform in which all your questions are suitably answered, so that you can learn and improve on topics you are weak at.',
    icon: MessageCircleQuestion,
  },
]

const bento_features = [
    {
      Icon: BotMessageSquare,
      name: "Get questions answered",
      description: "Students are bound to get stuck and need specific answers to their questions. Through ChatGPT AI, we are able to provide a platform in which students can get all their questions answered instantly and with a full explanation.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: Clock,
      name: "Practice timers",
      description: "The time limits on the AP exam are an issue many students face. To combat this, we provide built-in timers for all practice materials so students not only learn the material, but also get used to answering questions quickly. This is crucial to cracking the AP exam.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: CalendarCheck,
      name: "Study Streaks",
      description: "Similar to Duolingo, we use study streaks so you can stay motivated.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: DollarSign,
      name: "100% Free",
      description: "We want to make learning accessible to all students, therefore the site is 100% free.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: AudioLines,
      name: "Focus with Music",
      description:
        "Students love music and countless studies have proven that specific audio signals and music increase attention and focus. Therefore, we made an AI Music recommendation system catered to you so you can stay focused when studying for the AP exam.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: NotebookPen,
        name: "Past Exams",
        description: "All our exam material comes straight from CollegeBoard so you can maximize your study time.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
      },
  ];

export default function FeaturesGrid() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-25">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">Study Smarter</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better prep system</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We understand that you have limited time and limited focus, thus to maximize your efforts, we made a platform catered to AP students, so you can actually learn.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 text-lg">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            {/* obviously change this tweet */}
            <div className="mt-16"><FAQ></FAQ></div>
          </div>
          <div className="ml-10 mt-5">
          <BentoGrid className="lg:grid-rows-3">
      {bento_features.map((bento_feature) => (
        <BentoCard key={bento_feature.name} {...bento_feature} />
      ))}
    </BentoGrid>
          </div>
        </div>
      </div>
    </div>
  )
}