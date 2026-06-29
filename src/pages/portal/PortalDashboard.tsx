import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useCourses } from '@/hooks/useCourses';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Award, Clock, PlayCircle } from 'lucide-react';

const PortalDashboard = () => {
  const { user } = useAuth();
  const { courses, enrolledCourses, progress } = useCourses();

  const enrolledData = courses.filter(c => enrolledCourses.includes(c.id));

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
          <p className="text-muted-foreground">Track your progress and continue your learning journey.</p>
        </div>
        <Button asChild>
          <Link to="/portal/catalog">Browse All Courses</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{enrolledCourses.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {enrolledCourses.length > 0 
                ? Math.round(Object.values(progress).reduce((a, b) => a + b, 0) / enrolledCourses.length)
                : 0}%
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Certificates Earned</CardTitle>
            <Award className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Object.values(progress).filter(p => p === 100).length}
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-6">My Courses</h2>
      
      {enrolledData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledData.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{progress[course.id] || 0}%</span>
                  </div>
                  <Progress value={progress[course.id] || 0} className="h-2" />
                  <Button className="w-full" asChild>
                    <Link to={`/portal/course/${course.id}`}>
                      <PlayCircle className="mr-2 h-4 w-4" /> 
                      {progress[course.id] > 0 ? 'Continue' : 'Start Learning'}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center">
          <CardContent className="space-y-4">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold">No courses enrolled yet</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Start your learning journey by browsing our professional catalog of IT courses.
            </p>
            <Button size="lg" asChild>
              <Link to="/portal/catalog">Explore Courses</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PortalDashboard;
