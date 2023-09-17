"use client";

import { urlFor } from "../../(hooks)/sanity";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Link from "next/link";

const ExpCards = ({ experience }) => {
  return (
    <main>
      <VerticalTimeline>
        {experience?.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "10px solid  rgb(33, 150, 243)" }}
            date={item.time}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<AcUnitIcon />}
          >
            <h1 className="text-[2rem] text-center mb-2 font-kaushan">
              {item.name}
            </h1>
            <div className="relative w-full h-[200px] rounded-md">
              <Image
                src={urlFor(item.img).url()}
                alt=""
                fill
                className="rounded-md cursor-pointer"
              />
            </div>
            <p className="font-quicksand">{item.description}</p>
            <h3 className="text-center font-bold mt-3 mb-2">Tech Stacks:</h3>
            <ul className="flex flex-wrap gap-4 items-center justify-center">
              {item.stack?.map((item) => (
                <li className="techstack-items" key={item.name}>
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-2 mt-2">
              {item.demo && (
                <Link href={item.demo} target="_blank">
                  <LanguageIcon
                    style={{ fontSize: "2.2rem" }}
                    className="cursor-pointer hover:text-purple-500"
                  />
                </Link>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </main>
  );
};

export default ExpCards;
