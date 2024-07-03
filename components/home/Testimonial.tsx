import ClientTweetCard from "@/components/magicui/client-tweet-card";
import Globe from "@/components/magicui/globe";
import NumberTicker from "@/components/magicui/number-ticker";
import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

export function Testimonial() {
    const reviews = [
        {
          name: "Lukas Fantin",
          username: "@lukasfantin",
          body: "I scored a 5 on AP Gov because of PrepAP.",
          img: "https://smoothcomp.com/pictures/t/3042256-vhfs/lukas-fantin.jpg"
        },
        {
          name: "Lebron James",
          username: "@kingjames",
          body: "PrepAP helped me get drafted into the NBA.",
          img: "https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png"
        },
        {
          name: "Elon Musk",
          username: "@elonmxsk",
          body: "Space exploration wouldn't be possible without PrepAP.",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/640px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
        },
        {
          name: "Drake",
          username: "@champagnepapi",
          body: "Omg yasssss I love PrepAP.",
          img: "https://thefader-res.cloudinary.com/private_images/w_1440,c_limit,f_auto,q_auto:best/F100_Drake_Cover_FINAL_tuqta0/drake-views-from-the-6-cover-story-interview.jpg"
        },
        {
          name: "Stephen Curry",
          username: "@stephencurry30",
          body: "My 3 point percentage wouldn't be so high without PrepAP.",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Steph_Curry_P20230117AS-1347_%28cropped%29.jpg/640px-Steph_Curry_P20230117AS-1347_%28cropped%29.jpg"
        },
        {
          name: "Jordan Terrell Carter",
          username: "@playboicarti",
          body: "I finally have motivation to start making an album because of PrepAP.",
          img: "https://i.scdn.co/image/ab6761610000e5eb73d4facbd619ae025b5588c7"
        }
      ]
    
      const firstRow = reviews.slice(0, reviews.length / 2);
      const secondRow = reviews.slice(reviews.length / 2);
    
      const ReviewCard = ({
        img,
        name,
        username,
        body,
      }: {
        img: string;
        name: string;
        username: string;
        body: string;
      }) => {
        return (
          <figure
            className={cn(
              "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
              // light styles
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              // dark styles
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <img className="rounded-full" width="32" height="32" alt="" src={img} />
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {name}
                </figcaption>
                <p className="text-xs font-medium dark:text-white/40">{username}</p>
              </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
          </figure>
        );
      };
       
      const Testimonials = () => {
        return (
          <div className="mt-10 relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-10 md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
          </div>
        );
      };
    return (
        
<section id="testimonials" className="mt-5 p-10 rounded-lg shadow-lg mx-auto flex flex-col items-center">
      <h1 className="font-extrabold text-center relative w-[max-content] text-5xl mb-8">
          Testimonials
        </h1>
        <div className="grid grid-flow-col gap-32">
            <div>
            <ClientTweetCard id="1668408059125702661" className="shadow-2xl" />
            </div>
            <div>
            <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
      <span className="mb-8 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      <NumberTicker value={500} /> users worldwide
      </span>
      <Globe className="top-40" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
            </div>
        </div>
        <Testimonials></Testimonials>
      </section>
    );
}