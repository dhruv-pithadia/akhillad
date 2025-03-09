// src/data/articlesData.js
import { FaGraduationCap, FaBrain, FaDna } from "react-icons/fa";

export const articlesData = [
    {
        slug: "college-acceptance",
        title: "College Acceptance",
        createdDate: "2023-03-01",
        excerpt:
            "Minimally Verbal Individuals now can go to a College. College experience is important for all. I always thought I could not go to college.",
        content:
            "In 'College Acceptance', I share my personal journey as a minimally verbal individual who defied expectations and pursued higher education. Despite the common assumption that my communication challenges would hold me back, I discovered that a college experience is not only possible but life-changing. I detail the obstacles I faced, the support I received from educators and peers, and the empowerment that comes with overcoming societal barriers. My story is a testament to the fact that education is accessible to everyone, and I hope it inspires others to challenge stereotypes and pursue their dreams.",
        icon: FaGraduationCap,
        updates: [
            {
                date: "2023-03-01",
                content: "Initial article published.",
            },
            {
                date: "2023-03-08",
                content:
                    "Added new insights on the college experience and personal reflections on overcoming barriers.",
            },
        ],
    },
    {
        slug: "mental-health",
        title: "Mental Health Stress in College Life",
        createdDate: "2023-04-15",
        excerpt:
            "Depression can lead to anxiety issues, abuse, poor academic performance, suicides, risks, and violent behaviors, and other mental disorders in future life. Therefore, mental health campaigns are needed for international, female, and diverse students in colleges and universities.",
        content:
            "In 'Mental Health Stress in College Life', I examine the multifaceted challenges faced by college students as they confront depression, anxiety, and other mental health issues. The article discusses how mental health struggles can affect academic performance and personal relationships, and emphasizes the urgent need for comprehensive mental health support and proactive campaigns on campus. I include insights from my own experiences and offer suggestions for institutions to better support their diverse student bodies.",
        icon: FaBrain,
        updates: [
            {
                date: "2023-04-15",
                content: "Initial article on mental health stress published.",
            },
            {
                date: "2023-04-22",
                content:
                    "Updated with additional research, statistics, and recommendations for mental health support on campus.",
            },
        ],
    },
    {
        slug: "evolution",
        title: "Evolution",
        createdDate: "2023-05-01",
        excerpt:
            "An exploration of how species evolve over time with differences in traits.",
        content:
            "The 'Evolution' article delves into the natural progression of life on earth, exploring how species evolve and diversify over time. It discusses the biological mechanisms behind evolution, the role of environmental pressures, and the gradual changes in physical and behavioral traits that lead to the emergence of new species. Detailed examples illustrate how even slight modifications can have significant impacts on an organism’s survival and adaptation. (The full text on the website is extensive; please ensure that this 'content' property exactly matches the text displayed on https://akhillad.me/evolution/.)",
        icon: FaDna,
        updates: [
            {
                date: "2023-05-01",
                content: "Initial publication on evolution.",
            },
        ],
    },
];