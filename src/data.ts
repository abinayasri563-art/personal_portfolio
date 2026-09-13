import { ProfileData, SkillCategory, Project, CertificateItem, EducationItem } from './types';

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'btech-ise',
    degree: 'B.Tech – Information Science & Engineering',
    institution: "Women's Engineering College, Lawspet, Puducherry",
    status: 'Currently pursuing – 4th Year',
    cgpa: '7.94',
  },
  {
    id: 'higher-secondary-12th',
    degree: 'Higher Secondary Education (12th)',
    percentage: '79.8%',
  },
];

export const PERSONAL_INFO: ProfileData = {
  name: "Hi, I'm Abinayasri",
  brandName: 'Abinayasri',
  headline: 'Data Science & Web Development Enthusiast',
  tagline: '“Bridging the gap between machine learning models and intuitive web experiences.”',
  introduction:
    'I am an Information Science and Engineering student interested in data science, machine learning, web development and practical technology solutions. I enjoy building projects that transform technical concepts into useful and user-friendly applications.',
  aboutText: [
    'I am a B.Tech Information Science and Engineering student with an interest in data science, machine learning, software development and modern web technologies.',
    'I focus on developing practical projects to strengthen my programming, analytical thinking, problem-solving and application development skills.',
    'Through academic and personal projects, I am gaining hands-on experience in Python, C, machine learning, web development, databases, IoT and deployment technologies.',
  ],
  educationCard: {
    title: 'Education',
    value: 'B.Tech – Information Science & Engineering',
    status: 'Currently pursuing – 4th Year',
    cgpa: '7.94',
    institution: "Women's Engineering College, Lawspet, Puducherry",
  },
  education: EDUCATION_DATA,
  interestsCard: {
    title: 'Interests',
    value: 'Data Science, Machine Learning, Web Development, Cloud & IoT',
  },
  focusCard: {
    title: 'Focus',
    value: 'Practical Projects and Industry-Oriented Skills',
  },
  careerGoalCard: {
    title: 'Career Goal',
    value: 'Data Science / Software Development',
  },
  contact: {
    email: 'abinayasri563@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/abinaya-sri-5434873b9/',
    github: 'https://github.com/abinayasri563-art',
  },
  profileImage: '/profile.jpg',
};

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    title: 'PROGRAMMING',
    skills: ['C', 'Python', 'Java'],
  },
  {
    title: 'WEB',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'DATA & MACHINE LEARNING',
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Machine Learning',
      'Data Analysis',
      'Data Visualization',
    ],
  },
  {
    title: 'DATABASE',
    skills: ['SQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'TOOLS',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
  {
    title: 'CLOUD & DEPLOYMENT',
    skills: ['Cloud Computing', 'GitHub Pages', 'Netlify', 'Vercel', 'Streamlit'],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'forest-fire-early-warning',
    title: 'Forest Fire Early Warning System',
    categoryTag: 'Machine Learning',
    categories: ['Machine Learning', 'Data Science'],
    description:
      'A machine learning based early-warning system that analyzes environmental and fire-weather parameters to predict forest fire risk. The system includes data preprocessing, machine learning prediction, visualization and an interactive Streamlit application.',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Machine Learning',
      'Streamlit',
      'Data Visualization',
    ],
    keyFeatures: [
      'Environmental data preprocessing',
      'Fire-weather parameter analysis',
      'Machine learning prediction',
      'Fire-risk classification',
      'Data visualization',
      'Interactive prediction interface',
      'Streamlit application',
    ],
    workflow: [
      'Environmental Data',
      'Data Preprocessing',
      'Feature Processing',
      'Machine Learning Model',
      'Fire Risk Prediction',
      'Visualization',
    ],
    githubUrl: 'https://github.com/abinayasri563-art/Forest-Fire-Early-Warning-System',
    image: '/assets/forest_fire_warning.jpg',
  },
  {
    id: 'industrial-iot-edge-monitoring',
    title: 'Real-Time Industrial IoT Edge Monitoring & Fault Detection System',
    categoryTag: 'IoT & Edge Computing',
    categories: ['IoT'],
    description:
      'A C-based Industrial IoT edge monitoring application designed to monitor industrial machine parameters, process sensor readings and identify abnormal operating conditions.',
    technologies: [
      'C',
      'Industrial IoT',
      'Embedded Systems',
      'SQLite',
      'TCP/IP',
      'Edge Computing',
    ],
    machines: ['Motor-A', 'Pump-B', 'Compressor-C'],
    keyFeatures: [
      'Real-time sensor monitoring',
      'Machine condition monitoring',
      'Fault detection',
      'Sensor data logging',
      'SQLite database integration',
      'TCP client/server communication',
      'Industrial monitoring dashboard',
    ],
    workflow: [
      'Sensor Data',
      'Edge Monitoring',
      'Parameter Analysis',
      'Anomaly Detection',
      'Fault Alert',
    ],
    githubUrl: 'https://github.com/abinayasri563-art/Industrial-IoT-Edge-Monitoring',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'fake-news-detection',
    title: 'Fake News Detection using Machine Learning',
    categoryTag: 'Machine Learning',
    categories: ['Machine Learning', 'Data Science'],
    description:
      'A machine learning classification system that identifies news articles as FAKE or REAL using TF-IDF feature extraction and Logistic Regression.',
    technologies: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'TF-IDF',
      'Logistic Regression',
      'Machine Learning',
    ],
    keyFeatures: [
      'Text preprocessing',
      'TF-IDF feature extraction',
      'Logistic Regression classification',
      'Model training',
      'Accuracy evaluation',
      'ROC-AUC evaluation',
      'Custom input prediction',
    ],
    workflow: [
      'News Input',
      'Text Preprocessing',
      'TF-IDF',
      'Logistic Regression',
      'FAKE / REAL Prediction',
    ],
    githubUrl: 'https://github.com/abinayasri563-art/python-ml-project',
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'voice-assistant',
    title: 'Voice Assistant',
    categoryTag: 'Python & Voice AI',
    categories: ['Machine Learning', 'Data Science'],
    description:
      'A Python-based voice assistant that responds to speech commands and performs useful tasks such as opening websites, retrieving Wikipedia information and providing the current time.',
    technologies: ['Python', 'SpeechRecognition', 'pyttsx3', 'Wikipedia API'],
    keyFeatures: [
      'Speech recognition',
      'Voice command processing',
      'Website opening',
      'Wikipedia information retrieval',
      'Current time response',
      'Text-to-speech response',
      'Live application deployment',
    ],
    workflow: [
      'Voice Input',
      'Speech Recognition',
      'Command Processing',
      'Action / Information Retrieval',
      'Voice Response',
    ],
    githubUrl: 'https://github.com/abinayasri563-art/Voice-assistant',
    image:
      'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    categoryTag: 'Python',
    categories: ['Machine Learning', 'Data Science'],
    description:
      'A practical personal expense tracking and financial management system designed to log expenditures, categorize expenses, analyze spending habits, and generate spending summaries.',
    technologies: [
      'Python',
      'Pandas',
      'Data Analysis',
      'File I/O',
      'Data Visualization',
    ],
    keyFeatures: [
      'Daily expenditure logging',
      'Category-wise budget classification',
      'Expense calculation and summaries',
      'Spending trend visualization',
      'Historical expense tracking',
    ],
    workflow: [
      'Expense Entry',
      'Category Tagging',
      'Data Processing',
      'Spending Analysis',
      'Financial Summary Report',
    ],
    githubUrl: 'https://github.com/abinayasri563-art/expense-tracker',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'search-engine',
    title: 'Search Engine',
    categoryTag: 'Python & Web',
    categories: ['Web Development'],
    description:
      'A search query and document indexing application engineered to crawl, index web or document content, and return ranked search results matching user keyword queries.',
    technologies: [
      'Python',
      'HTML',
      'CSS',
      'Text Indexing',
      'Information Retrieval',
    ],
    keyFeatures: [
      'Document indexing and tokenization',
      'Keyword query processing',
      'Ranked search result retrieval',
      'Clean interactive search interface',
      'Query response optimization',
    ],
    workflow: [
      'Query Input',
      'Tokenization & Parsing',
      'Index Lookup',
      'Ranking Algorithm',
      'Search Results Display',
    ],
    githubUrl: 'https://github.com/abinayasri563-art/search-engine',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
  },
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 'nptel-speaking-presentations',
    title: 'Mastering Speaking and Presentations: A Case-Based Approach',
    issuer: 'NPTEL / IIT Kharagpur',
    date: 'Jan–Apr 2025',
    achievement: 'NPTEL Elite, 60%',
    description:
      'Earned the Elite certification distinction covering professional speaking, persuasive executive communication, and case-based technical presentation strategies.',
    certificateUrl: 'https://drive.google.com/file/d/1ZdqYzXRsjnjunaSaUSG7uYgTt2ETVWol/view?usp=drive_link',
  },
  {
    id: 'genesys-python-ml',
    title: 'Internship Training — Python with Machine Learning',
    issuer: 'Genesys Academy of Computer Science',
    date: 'July 2025',
    achievement: 'Practical Internship Completion',
    description:
      'Completed comprehensive internship training focusing on Python programming, machine learning algorithms, data preprocessing pipelines, and practical model deployment.',
    certificateUrl: 'https://drive.google.com/file/d/1hJqPtWekh2YjCRp3GCfEdD49tNSYvIRo/view?usp=drive_link',
  },
  {
    id: 'vibe-coding-workshop-karaikal',
    title: 'VIBE CODING WORKSHOP',
    issuer: 'Vibe Coding Workshop',
    location: 'Karaikal',
    date: 'July 2025',
    achievement: 'Workshop Participation & Practical Exposure',
    description:
      'Participated in the Vibe Coding Workshop conducted in Karaikal, gaining practical exposure to AI-assisted coding paradigms, rapid software iteration, and modern developer workflows.',
    certificateUrl: 'https://drive.google.com/file/d/1tdaw6vBrGO2p41COT0vz3q1AacgF4HJK/view?usp=drive_link',
  },
  {
    id: 'nptel-industry-4-0-iiot',
    title: 'Introduction to Industry 4.0 and Industrial Internet of Things',
    issuer: 'NPTEL / IIT Kharagpur',
    date: 'Jan–Apr 2026',
    achievement: 'NPTEL Elite, 75%',
    description:
      'Earned the Elite certification distinction covering Industrial IoT reference models, edge sensors, cyber-physical architectures, and real-time smart manufacturing telemetry.',
    certificateUrl: 'https://drive.google.com/file/d/1UhBCmRghyMq99ZSARuNy3v-XPs05TbrX/view?usp=drive_link',
  },
  {
    id: 'alfrin-full-stack',
    title: 'Internship — Full Stack Development',
    issuer: 'Alfrin Technologies',
    date: 'July 2026',
    achievement: 'Full Stack Industry Internship',
    description:
      'Hands-on industry internship experience building responsive web interfaces, modern component-driven architectures, and database-integrated application workflows.',
    certificateUrl: 'https://drive.google.com/file/d/11nk133ifoygGxAJOLGEMllQOFP3ko1e4/view?usp=drive_link',
  },
];

