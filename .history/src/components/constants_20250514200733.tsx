import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

export const experience = [
  {
    id: 'article-1',
    date: '2024-06-04',
    company: 'inGauge Energy',
    title: 'Mechanical Project Engineer',
    location: 'Brisbane, QLD',
    dates: 'June 2019 - October 2024',
    content: [
      'Applied technical expertise and project management capabilities to develop mobile and web applications using React and React Native to meet client requirements. Managed deployments using AWS and GCP, ensuring scalable and secure solutions.',
      'Created a custom QR code asset-tracking mobile application using React Native and Firebase, which enabled a client to accurately record the location and installation conditions of all components within a compressor station. This solution streamlined asset management and decommissioning processes, saving the client tens of thousands of dollars.',
      'Developed Snap Park, a parking management system using React/React Native and GCP, to notify employees when the office parking lot becomes full. Further developed the application to a viable SaaS product that&apos;s still in use today (snappark.co).',
      'Developed and deployed a leak detection and water level monitoring system using a custom ESP32 sensor unit, C++, Node.js and AWS IoT Core, and the SWARM satellite network. The system provided real-time data visualization and alerts through a web dashboard built with React, and generated daily PDF reports to ensure compliance with regulatory conditions.',
      'Engineered a predictive flood modeling tool using Python to synthesize 130 years of hourly rainfall data for a prospective exploration well location, integrating the results into QGIS for civil construction planning. The tool&apos;s visualization capabilities supported strategic decision-making in remote areas prone to flooding.',
    ],
  },
  {
    id: 'article-2',
    date: '2019-05-01',
    company: 'JPC Engineering',
    title: 'Mechanical Engineer Intern',
    location: 'Toowoomba, QLD',
    dates: 'January 2018 - May 2019',
    content: [
      'While studying I completed two internships with a mechanical design firm that specialized in industrial machinery installations. My key responsibilities included:',
      'On-site walkthroughs to record locations and dimensions of existing equipment.',
      'Solidworks design of simple parts (brackets, hangers, plates, etc.), and drafting of more complex parts for fabrication to Australian standards.',
      'Working with fabricators to have parts manufactured within specified tolerances (laser cutting, CNC machining etc.)',
      'Assisting contractors and the project manager with the installation of new machinery.',
    ],
  },
  {
    id: 'article-3',
    date: '2018-12-01',
    company: 'Queensland Industrial Cladding',
    title: 'Roofer/Laborer',
    location: 'Toowoomba, QLD',
    dates: 'Dec 2013 - Dec 2018',
    content: [
      'During university, I worked part-time within a team of roofers, cladding commercial buildings across Queensland. Including a wide variety of job sites: military barracks, mine sites, grain silos, apartment blocks, etc.',
      'Working safely within a team in dangerous conditions.',
      'Unloading, carrying, and installing heavy tin roofsheets across perlons while wearing a safety harness.',
      'Working out of elevated work platforms such as Boom lifts and Scissor lifts.',
      'General workplace tidying.',
    ],
  },
]

export const projects = [
  {
    name: 'Planetaria',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: logoPlanetaria,
  },
  {
    name: 'Animaginary',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
  },
]

import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { SiTypescript, SiGooglecloud } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { CgCPlusPlus } from "react-icons/cg";

export const technologies = [
  {
    name: "Typescript",
    description:
      "Like most people I started off learning the basics of Javascript, before diving into React/React Native, then switched to Typescript for most projects.",
    icon: SiTypescript,
    experience: "4+",
  },
  {
    name: "Python",
    description:
      "Python was the first language I learnt during university, and I have used it extensively at my previous workplace for manipulating large datasets with pandas and numpy. It's my go to when I need to manipulate files/images within my OS. However, it has been a few years since I have used it for any major projects.",
    icon: FaPython,
    experience: "2",
  },
  {
    name: "C++",
    description:
      "I have a basic understanding of C++ programming structures, and primarily use it for IoT programming using STM32, ESP32, and Arduino microcrontrollers.",
    icon: CgCPlusPlus,
    experience: "1",
  },
  {
    name: "React",
    description:
      "I first started learning React in 2019, right before Covid and the 16.8.0 Hooks update. Then I built my first React Native application in early 2021. I've also gained a solid knowledge of HTML/CSS at the same time.",
    icon: FaReact,
    experience: "4+",
  },
  {
    name: "Node.js",
    description: "Node.js, and specifically Express.js, was the first backend framework I learnt along side React. I have experience with MongoDB, node-postgres (PostgreSQL). I have recently been teaching myself how to use GraphQL to interact with APIs more efficiently.  ",
    icon: FaNodeJs,
    experience: "4+",
  },



  {
    name: "Firebase",
    description:
      "Firebase is my go-to BaaS for small or personal projects. I've got extensive experience with it's use cases, specifically with Authentication, Firestore, and Hosting.",
    icon: IoLogoFirebase,
    experience: "4+",
  },
  {
    name: "AWS",
    description:
      "For larger projects, I tend to use serverless containerized functions as the backend with Docker and AWS Lambda. I have experience using EC2, S3, Elastic Beanstalk, CloudWatch, IoT Core, and CodePipeline.",
    icon: FaAws,
    experience: "4+",
  },
  {
    name: "GCP",
    description:
      "I have some experience using the Google Cloud Platform directly outside of the Firebase framework, including Cloud Run, Cloud Functions, Compute Engine, and Cloud Storage.",
    icon: SiGooglecloud,
    experience: "1",
  },
];


// function Photos() {
//   let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

//   return (
//     <div className="mt-16 sm:mt-20">
//       <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
//         {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
//           <div
//             key={image.src}
//             className={clsx(
//               'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
//               rotations[imageIndex % rotations.length],
//             )}
//           >
//             <Image
//               src={image}
//               alt=""
//               sizes="(min-width: 640px) 18rem, 11rem"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
