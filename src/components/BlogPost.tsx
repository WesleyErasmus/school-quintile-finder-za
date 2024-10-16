// React router dom
import { useNavigate } from "react-router-dom";

// Route imports
import { homePage } from "../App";

// HeroIcons
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

interface BlogPostProps {
  headerImage: string;
  altText: string;
  title: string;
  intro: string;
  sections: Section[];
}

interface Section {
  heading?: string;
  content: string[];
  listItems?: string[];
}

const BlogPost = (props: BlogPostProps) => {
  const navigate = useNavigate();
  return (
    <div className="py-6 px-4 mx-auto max-w-[800px] active:text-primary-900">
      <button
        onClick={() => navigate(homePage)}
        className="flex items-center gap-2 text-primary-600 hover:text-primary-500 font-medium active:text-gray-900"
      >
        <ArrowLeftIcon className="w-4 h-4 text-gray-700" />
        Back to homepage
      </button>
      <img
        className="mt-4 w-full"
        src={props.headerImage}
        alt={props.altText}
      />
      <div className="mx-2 mb-20">
        <h1 className="text-3xl md:text-4xl my-6 font-extrabold">
          {props.title}
        </h1>
        <p className="">{props.intro}</p>

        {props.sections.map((section, index) => (
          <div key={index}>
            {section.heading && (
              <h2 className="text-xl md:text-2xl font-extrabold my-4">
                {section.heading}
              </h2>
            )}
            {section.content.map((paragraph, index) => (
              <p key={index} className="">
                {paragraph}
              </p>
            ))}

            {section.listItems && (
              <ul className="list-disc mx-8 my-6">
                {section.listItems.map((item, index) => (
                  <li className="my-2" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
