import BlogPost from "../../components/BlogPost";

// import image from '../../../'

const QuintileSystemBlog = () => {
  const sections = [
    {
      heading: "Understanding the Quintile Levels",
      content: [
        "The quintile system categorizes all public schools into five groups based on the relative poverty of their surrounding communities.",
        `Quintile 1 represents the "poorest" schools, while Quintile 5 includes the "least poor. Private schools are not included in the quintile catagories."`,
      ],
    },
    {
      heading: "Funding Allocations",
      content: [""],
      listItems: [
        `Schools in Quintiles 1, 2, and 3 are designated as "no-fee" schools.`,
        "These schools receive higher government allocations to compensate for the lack of income from school fees.",
        "Approximately 60% of South African schools fall into these three quintiles.",
        "Quintile 1, 2, and 3 schools receive higher per-learner allocations compared to Quintile 4 and 5 schools.",
      ],
    },
    {
      heading: "Purpose of the System",
      content: [
        "It ensures equitable distribution of resources among schools and provides more financial support to schools in disadvantaged areas. The system is designed to allocate funds for essentials such as textbooks, learning materials, and facility maintenance.",
      ],
    },
    {
      heading: "Impact",
      content: [
        "The quintile system aims to address historical inequalities in the South African education system by channelling more resources to schools in poorer communities, thereby promoting equal educational opportunities for all students.",
      ],
    },
  ];

  return (
    <BlogPost
      headerImage={"../assets/blog-image-quintile-system.jpeg"}
      altText={"Image of school"}
      title={"South African School Quintile System Explained"}
      intro={
        "South Africa introduced the school quintile system in 1996 as part of its efforts to distribute educational resources more equitably across the nation's diverse communities. This system categorizes public schools into five groups based on the relative poverty of their surrounding areas, with the aim of providing more support to disadvantaged communities."
      }
      sections={sections}
    />
  );
};

export default QuintileSystemBlog;
