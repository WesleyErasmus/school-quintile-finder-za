import BlogPost from "../../components/BlogPost"

const QuintileReportingBlog = () => {
    const sections = [
      {
        heading: "What Are School Quintiles?",
        content: [
          "Before diving in, it's worth noting that school quintiles in South Africa are primarily used in basic education. They categorize schools based on the relative poverty of the surrounding community, with Quintile 1 being the poorest and Quintile 5 the least poor. This system helps in resource allocation for primary and secondary schools.",
        ],
      },
      {
        heading: "Reporting in Higher Education",
        content: [
          "While specific reporting requirements may vary among institutions, higher education establishments are increasingly expected to collect school quintile data as part of broader transformation initiatives. This reporting typically encompasses:",
        ],
        listItems: [
          "Student Background Data: Secondary school name, quintile level, and province.",
          "Enrollment Statistics: Number of students from each quintile.",
          "Academic Performance Metrics: Pass rates, throughput, and graduation rates across quintiles.",
        ],
      },
      {
        heading: "Seeking Further Information",
        content: [
          "While this article provides a general overview, specific reporting requirements may vary by institution and can change over time. For the most accurate and up-to-date information, it's advisable to consult the Department of Higher Education and Training (DHET) for national guidelines.",
        ],
      },
    ];
  return (
    <BlogPost
      headerImage={"../assets/blog-image-quintile-reporting.jpeg"}
      altText={"Image of a school"}
      title={
        "Understanding School Quintile Reporting in South African Higher Education: A General Overview"
      }
      intro={
        "This article explores the concept of school quintiles and their significance in higher education reporting, aiming to provide clarity on this topic."
      }
      sections={sections}
    />
  );
}

export default QuintileReportingBlog