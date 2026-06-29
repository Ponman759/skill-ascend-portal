import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useCourses } from '@/hooks/useCourses';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CheckCircle2, PlayCircle, ChevronLeft, ArrowRight, Menu } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const CourseView = () => {
  const { courseId } = useParams();
  const { user } = useAuth();
  const { courses, enrolledCourses, progress, updateProgress } = useCourses();
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);

  const course = courses.find(c => c.id === courseId);
  const isEnrolled = enrolledCourses.includes(courseId || '');

  if (!user) return <Navigate to="/login" />;
  if (!course || !isEnrolled) return <Navigate to="/portal/catalog" />;

  const activeLesson = course.lessons[activeLessonIdx];
  const currentProgress = progress[course.id] || 0;

  const markComplete = () => {
    const nextIdx = activeLessonIdx + 1;
    const newProgress = Math.min(100, Math.round(((activeLessonIdx + 1) / course.lessons.length) * 100));
    updateProgress(course.id, newProgress);
    
    if (nextIdx < course.lessons.length) {
      setActiveLessonIdx(nextIdx);
    }
  };

  const Sidebar = () => (
    <div className="flex flex-col h-full bg-secondary/20">
      <div className="p-6 border-b">
        <h2 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h2>
        <Progress value={currentProgress} className="h-2 mb-2" />
        <p className="text-xs text-muted-foreground">{currentProgress}% Completed</p>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {course.lessons.map((lesson, idx) => (
            <button
              key={lesson.id}
              onClick={() => setActiveLessonIdx(idx)}
              className={`w-full flex items-center gap-3 p-3 rounded-md text-sm transition-colors text-left ${
                activeLessonIdx === idx 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-secondary text-muted-foreground'
              }`}
            >
              {idx < (currentProgress / 100) * course.lessons.length ? (
                <CheckCircle2 className="h-4 w-4 shrink-0" />
              ) : (
                <PlayCircle className="h-4 w-4 shrink-0" />
              )}
              <span className="line-clamp-1">{lesson.title}</span>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] overflow-hidden">
      {/* Mobile Sidebar */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b bg-background">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/portal/dashboard"><ChevronLeft className="mr-1 h-4 w-4" /> Back</Link>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon"><Menu className="h-4 w-4" /></Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-80">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 border-r shrink-0">
        <Sidebar />
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto bg-background">
        <div className="max-w-4xl mx-auto p-4 md:p-8">
          <div className="hidden lg:flex items-center mb-6">
            <Button variant="ghost" size="sm" asChild className="-ml-2">
              <Link to="/portal/dashboard"><ChevronLeft className="mr-1 h-4 w-4" /> Back to Dashboard</Link>
            </Button>
          </div>

          <div className="aspect-video bg-black rounded-xl overflow-hidden mb-8 shadow-2xl">
            {activeLesson.videoUrl ? (
              <iframe
                src={activeLesson.videoUrl}
                className="w-full h-full"
                allowFullScreen
                title={activeLesson.title}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white flex-col gap-4">
                <PlayCircle className="h-16 w-16 opacity-50" />
                <p>Video content not available for this lesson</p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Lesson {activeLessonIdx + 1}</span>
                <h1 className="text-3xl font-bold">{activeLesson.title}</h1>
              </div>
              <Button size="lg" onClick={markComplete} className="group">
                {activeLessonIdx === course.lessons.length - 1 ? 'Complete Course' : 'Next Lesson'}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-4">Lesson Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                {activeLesson.content}
              </p>
              <div className="mt-8 p-6 bg-secondary/20 rounded-lg">
                <h4 className="font-bold mb-2">Key Takeaways:</h4>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Understand the fundamental concepts of {activeLesson.title}.</li>
                  <li>Learn how to apply these techniques in real-world scenarios.</li>
                  <li>Master the core principles required for advanced certification.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
