import React, { useState } from 'react';
import { useCourses } from '@/hooks/useCourses';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Clock, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CourseCatalog = () => {
  const { courses, enrollInCourse, enrolledCourses } = useCourses();
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredCourses = courses.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
                         c.description.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === 'all' || 
                        (typeFilter === 'diploma' ? c.isDiploma : 
                        (typeFilter === 'professional' ? !c.isDiploma : true));
    return matchesSearch && matchesType;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Professional Course Catalog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Gain market-ready skills with our industry-standard IT courses led by expert practitioners.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 mb-12">
        <Tabs value={typeFilter} onValueChange={setTypeFilter} className="w-full max-w-2xl">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Programs</TabsTrigger>
            <TabsTrigger value="diploma">Diploma Programs</TabsTrigger>
            <TabsTrigger value="professional">Professional Certs</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search courses..." 
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-muted/50 group">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={course.thumbnail} 
                alt={course.title} 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                {course.isDiploma && <Badge variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-sm">Diploma</Badge>}
                {course.isNew && <Badge variant="destructive" className="bg-emerald-600 hover:bg-emerald-700 text-white border-none shadow-sm">New Offering</Badge>}
              </div>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{course.category}</span>
              </div>
              <CardTitle className="line-clamp-1">{course.title}</CardTitle>
              <CardDescription className="line-clamp-2 h-10">{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="h-4 w-4" />
                  <span>{course.lessons.length} Lessons</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 pb-6">
              {enrolledCourses.includes(course.id) ? (
                <Button className="w-full" variant="outline" asChild>
                  <Link to={`/portal/course/${course.id}`}>Continue Learning</Link>
                </Button>
              ) : (
                <Button className="w-full" onClick={() => enrollInCourse(course.id)}>Enroll Now</Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {filteredCourses.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No courses found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CourseCatalog;
