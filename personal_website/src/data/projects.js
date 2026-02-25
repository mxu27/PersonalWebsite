import CoverLetterGeneratorPreview from '../assets/CoverLetterGeneratorPreview.png';
import ResearchReport from '../assets/CSE_4106___Data_Science_for_Complex_Networks_Final_Project (1).pdf';

const projects = [
  {
    id: '01',
    title: 'Personal Website',
    preview: 'A responsive portfolio built with React.',
    details: 'My personal website built with React and Tailwind CSS that your currently looking at.',
    image: null,
    tech: ['React', 'Tailwind CSS'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/MichaelXu27/PersonalWebsite'
      }
    ],
  },
  {
    id: '02',
    title: 'Cover Letter Generator',
    preview: 'ChatGPT-based cover letter generator.',
    details: 'Quick little app I made using the Open AI API to assist in speeding up the job application process. Feel free to check the website below or clone the github yourself. Only requirement is an Open API key.',
    image: CoverLetterGeneratorPreview,
    tech: ['Python', 'OpenAI API', "Streamlit", "SQLite"],
    links: [
      {
        label: 'Streamlit Website',
        url: 'https://coverlettergenerator-6wmycaewas4wrhdyv5wiju.streamlit.app/'
      },
      {
        label: 'GitHub',
        url: 'https://github.com/MichaelXu27/Cover_Letter_Generator'
      }
    ],
  },
  {
    id: '03',
    title: 'Musical-Collaboration-Network-Analysis',
    preview: 'A large-scale link prediction on a Discogs music collaboration network.',
    details: 'This project performs large-scale link prediction on a Discogs music collaboration network spanning more than 130 years of music history (1897–2025). It analyzes collaboration patterns among over 1,000 artists connected by more than 10,000 edges, using multiple machine learning and graph-based approaches to predict future collaborations. A central focus of the work is era-specific modeling, which accounts for major shifts in music culture, technology, and artist ecosystems across five distinct musical periods. Feel free to check out the project repository below for a more detailed description.',
    image: null,
    tech: ['Python', 'pandas', 'NumPy', 'NetworkX', 'scikit-learn', 'python-louvain', 'Spotipy', 'Gephi'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/MichaelXu27/Musical-Collaboration-Network-Analysis/tree/main'
      },
      {
        label: 'Research Report',
        url: ResearchReport
      }
    ],
  },
];

export default projects;

