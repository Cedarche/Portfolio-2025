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
      'Applied technical expertise and project management capabilities to develop mobile and web applications using React and React Native to meet client requirements. Managed deployments using AWS and GCP, ensuring scalable and secure solutions. Coordinated with cross-functional teams and project timelines to deliver on time and within budget.',
      'Created a custom QR code asset-tracking mobile application using React Native and Firebase, which enabled a client to accurately record the location and installation conditions of all components within a compressor station. This solution streamlined asset management and decommissioning processes, saving the client tens of thousands of dollars.',
      'Developed Snap Park, a parking management system using React/React Native and GCP, to notify employees when the office parking lot becomes full. Further developed the application to a viable SaaS product that&apos;s still in use today (snappark.co).',
      'Developed and deployed a leak detection and water level monitoring system using a custom ESP32 sensor unit, C++, Node.js and AWS IoT Core, and the SWARM satellite network. The system provided real-time data visualization and alerts through a web dashboard built with React, and generated daily PDF reports to ensure compliance with regulatory conditions.',
      'Engineered a predictive flood modeling tool using Python to synthesize 130 years of hourly rainfall data for a prospective exploration well location, integrating the results into QGIS for civil construction planning. The tool&apos;s visualization capabilities supported strategic decision-making in remote areas prone to flooding.'
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
      'Assisting contractors and the project manager with the installation of new machinery.'
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
      'General workplace tidying.'
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
  
