import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  duration: string;
  lessons: Lesson[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  isDiploma?: boolean;
  isNew?: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
}

const DEFAULT_COURSES: Course[] = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of web development with HTML, CSS, and JavaScript.',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/course-web-dev-7e6cb466-1782705882618.webp',
    category: 'Programming',
    duration: '10 hours',
    level: 'Beginner',
    lessons: [
      { id: 'l1', title: 'Getting Started', content: 'Introduction to the web.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: 'l2', title: 'HTML Basics', content: 'Learn about tags and structure.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
  },
  {
    id: '2',
    title: 'Advanced Networking and Security',
    description: 'Master the art of securing networks and understanding complex protocols.',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/course-networking-f1bb31f2-1782705882899.webp',
    category: 'Networking',
    duration: '15 hours',
    level: 'Advanced',
    lessons: [
      { id: 'n1', title: 'OSI Model Deep Dive', content: 'Detailed look at the 7 layers.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
  },
  {
    id: '3',
    title: 'Data Analytics for Professionals',
    description: 'Uncover insights from data using modern tools and techniques.',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/course-data-analytics-41bbdc21-1782705882726.webp',
    category: 'Data Science',
    duration: '12 hours',
    level: 'Intermediate',
    lessons: [
      { id: 'd1', title: 'Excel for Data Analysis', content: 'Power user tips for Excel.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
  },
  {
    id: '4',
    title: 'Diploma in Cybersecurity & Ethical Hacking',
    description: 'A comprehensive 6-month program covering network security, penetration testing, and digital forensics.',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/course-cyber-diploma-a6aa3069-1782707135534.webp',
    category: 'Cybersecurity',
    duration: '6 Months',
    level: 'Advanced',
    isDiploma: true,
    isNew: true,
    lessons: [
      { id: 'cy1', title: 'Ethical Hacking Fundamentals', content: 'Introduction to ethical hacking.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
  },
  {
    id: '5',
    title: 'Diploma in Full Stack Software Engineering',
    description: 'Master frontend and backend development with modern frameworks like React, Node.js, and Python.',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/course-software-diploma-a33757b1-1782707135831.webp',
    category: 'Programming',
    duration: '6 Months',
    level: 'Intermediate',
    isDiploma: true,
    isNew: true,
    lessons: [
      { id: 'fs1', title: 'Architecture of Modern Apps', content: 'Overview of fullstack architecture.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
  },
  {
    id: '6',
    title: 'Diploma in Cloud Computing & DevOps',
    description: 'Learn to manage cloud infrastructure on AWS and Azure, and implement CI/CD pipelines.',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/course-cloud-diploma-ba7942c6-1782707135188.webp',
    category: 'Cloud',
    duration: '4 Months',
    level: 'Intermediate',
    isDiploma: true,
    isNew: true,
    lessons: [
      { id: 'cl1', title: 'Cloud Infrastructure Basics', content: 'Understanding IaaS, PaaS, and SaaS.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
  },
  {
    id: '7',
    title: 'Diploma in Artificial Intelligence & Machine Learning',
    description: 'Dive into the world of AI, neural networks, and deep learning using Python and TensorFlow.',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/course-ai-diploma-471edbb3-1782707134926.webp',
    category: 'AI',
    duration: '6 Months',
    level: 'Advanced',
    isDiploma: true,
    isNew: true,
    lessons: [
      { id: 'ai1', title: 'Introduction to Neural Networks', content: 'Fundamentals of AI.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
  },
  {
    id: '8',
    title: 'Diploma in Data Science & Big Data Analytics',
    description: 'Master data mining, predictive modeling, and big data processing using R, Python, and Spark.',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/course-data-science-diploma-74d50c81-1782730808938.webp',
    category: 'Data Science',
    duration: '6 Months',
    level: 'Advanced',
    isDiploma: true,
    isNew: true,
    lessons: [
      { id: 'ds1', title: 'Statistical Foundations', content: 'Core statistics for data science.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
  },
  {
    id: '9',
    title: 'Diploma in Digital Marketing & E-commerce',
    description: 'Master SEO, SEM, content strategy, and e-commerce platform management to grow businesses online.',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/course-digital-marketing-diploma-dc4e0f4d-1782730809423.webp',
    category: 'Marketing',
    duration: '4 Months',
    level: 'Intermediate',
    isDiploma: true,
    isNew: true,
    lessons: [
      { id: 'dm1', title: 'Digital Strategy Framework', content: 'Building a marketing funnel.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
  },
  {
    id: '10',
    title: 'Diploma in IT Support & Systems Administration',
    description: 'Build a career in IT support, managing Windows/Linux servers, and ensuring business continuity.',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/course-it-support-diploma-8b8d2ff5-1782730808623.webp',
    category: 'Networking',
    duration: '5 Months',
    level: 'Beginner',
    isDiploma: true,
    isNew: true,
    lessons: [
      { id: 'it1', title: 'Hardware Troubleshooting', content: 'Identifying and fixing hardware issues.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
  },
  {
    id: '11',
    title: 'Diploma in UI/UX Design & Product Strategy',
    description: 'Learn to design beautiful, user-centric interfaces and understand product development lifecycles.',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/course-uiux-diploma-0e8d5931-1782730808573.webp',
    category: 'Design',
    duration: '4 Months',
    level: 'Intermediate',
    isDiploma: true,
    isNew: true,
    lessons: [
      { id: 'ux1', title: 'User Research Methods', content: 'How to conduct effective user interviews.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
  },
  {
    id: '12',
    title: 'Diploma in Mobile App Development',
    description: 'Create cross-platform mobile applications for iOS and Android using React Native and Flutter.',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/course-mobile-dev-diploma-adb986c9-1782730809606.webp',
    category: 'Programming',
    duration: '6 Months',
    level: 'Advanced',
    isDiploma: true,
    isNew: true,
    lessons: [
      { id: 'ma1', title: 'React Native Fundamentals', content: 'Setting up your dev environment.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
  },
  {
    id: '13',
    title: 'Diploma in Graphics Design & Visual Communication',
    description: 'Master Adobe Creative Suite and learn the principles of visual storytelling and branding.',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/course-graphics-design-diploma-105efe95-1782730808427.webp',
    category: 'Design',
    duration: '5 Months',
    level: 'Beginner',
    isDiploma: true,
    isNew: true,
    lessons: [
      { id: 'gd1', title: 'Color Theory & Typography', content: 'Essentials of visual design.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
  },
  {
    id: '14',
    title: 'Diploma in Blockchain & Smart Contracts',
    description: 'Explore decentralized finance, blockchain architecture, and develop smart contracts with Solidity.',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/49aba353-0e22-44e0-a31e-02030a6bce7d/course-blockchain-diploma-d57a14d5-1782730810745.webp',
    category: 'Programming',
    duration: '4 Months',
    level: 'Advanced',
    isDiploma: true,
    isNew: true,
    lessons: [
      { id: 'bc1', title: 'Introduction to Ethereum', content: 'How blockchain works.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
  },
];

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);
  const [progress, setProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const savedCourses = localStorage.getItem('ponman_courses');
    if (savedCourses) {
      const parsed = JSON.parse(savedCourses);
      // Ensure any new default courses are added
      const missing = DEFAULT_COURSES.filter(dc => !parsed.find((pc: Course) => pc.id === dc.id));
      if (missing.length > 0) {
        const updated = [...parsed, ...missing];
        setCourses(updated);
        localStorage.setItem('ponman_courses', JSON.stringify(updated));
      } else {
        setCourses(parsed);
      }
    } else {
      setCourses(DEFAULT_COURSES);
      localStorage.setItem('ponman_courses', JSON.stringify(DEFAULT_COURSES));
    }

    const savedEnrolled = localStorage.getItem('ponman_enrolled');
    if (savedEnrolled) {
      setEnrolledCourses(JSON.parse(savedEnrolled));
    }

    const savedProgress = localStorage.getItem('ponman_progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const addCourse = (course: Omit<Course, 'id'>) => {
    const newCourse = { ...course, id: Math.random().toString(36).substr(2, 9) };
    const updatedCourses = [...courses, newCourse as Course];
    setCourses(updatedCourses);
    localStorage.setItem('ponman_courses', JSON.stringify(updatedCourses));
    toast.success('Course added successfully');
  };

  const updateCourse = (id: string, updates: Partial<Course>) => {
    const updatedCourses = courses.map(c => c.id === id ? { ...c, ...updates } : c);
    setCourses(updatedCourses);
    localStorage.setItem('ponman_courses', JSON.stringify(updatedCourses));
    toast.success('Course updated');
  };

  const deleteCourse = (id: string) => {
    const updatedCourses = courses.filter(c => c.id !== id);
    setCourses(updatedCourses);
    localStorage.setItem('ponman_courses', JSON.stringify(updatedCourses));
    toast.success('Course deleted');
  };

  const enrollInCourse = (courseId: string) => {
    if (enrolledCourses.includes(courseId)) {
      toast.info('Already enrolled in this course');
      return;
    }
    const updated = [...enrolledCourses, courseId];
    setEnrolledCourses(updated);
    localStorage.setItem('ponman_enrolled', JSON.stringify(updated));
    toast.success('Enrolled successfully!');
  };

  const updateProgress = (courseId: string, percentage: number) => {
    const updatedProgress = { ...progress, [courseId]: percentage };
    setProgress(updatedProgress);
    localStorage.setItem('ponman_progress', JSON.stringify(updatedProgress));
  };

  return {
    courses,
    enrolledCourses,
    progress,
    addCourse,
    updateCourse,
    deleteCourse,
    enrollInCourse,
    updateProgress
  };
};
