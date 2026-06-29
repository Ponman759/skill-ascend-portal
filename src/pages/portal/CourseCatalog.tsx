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
  const [category, setCategory] = useState('All');
  const [typeFilter, setTypeFilter] = useState('all');

  const categories = ['All', ...Array.from(new Set(courses.map(c => c.category)))];

  const filteredCourses = courses.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) || 
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) || 
                         c.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || c.category === category;
    const matchesType = typeFilter === 'all' || (typeFilter === 'diploma' ? c.isDiploma : (typeFilter === 'professional' ? !c.isDiploma : true));
    return matchesSearch && matchesCategory && matchesType;
  });
  });

      <div className=\"text-center mb-12\">
        <h1 className=\"text-4xl font-bold mb-4\">Professional Course Catalog</h1>
        <p className=\"text-muted-foreground max-w-2xl mx-auto\">\n          Gain market-ready skills with our industry-standard IT courses led by expert practitioners.\n        </p>
      </div>
          Gain market-ready skills with our industry-standard IT courses led by expert practitioners.
        </p>
      </div>

      <div className=\"flex flex-col items-center gap-6 mb-12\">\n+        <Tabs value={typeFilter} onValueChange={setTypeFilter} className=\"w-full max-w-2xl\">\n+          <TabsList className=\"grid w-full grid-cols-3\">\n+            <TabsTrigger value=\"all\">All Programs</TabsTrigger>\n+            <TabsTrigger value=\"diploma\">Diploma Programs</TabsTrigger>\n+            <TabsTrigger value=\"professional\">Professional Certs</TabsTrigger>\n+          </TabsList>\n+        </Tabs>\n+      </div>

      <div className=\"flex flex-col md:flex-row gap-4 mb-8\">\n         <div className=\"relative flex-1\">\n@@ -70,10 +72,10 @@
          <Card key={course.id} className=\"flex flex-col hover:shadow-lg transition-all border-none shadow-sm bg-secondary/20 overflow-hidden\">\n             <div className=\"aspect-video w-full overflow-hidden relative\">\n               <img src={course.thumbnail} alt={course.title} className=\"w-full h-full object-cover\" />\n               <Badge className=\"absolute top-3 right-3\">{course.level}</Badge>\n-              <div className=\"absolute top-3 left-3 flex flex-col gap-2\">\n-                {course.isDiploma && <Badge variant=\"secondary\" className=\"bg-primary text-primary-foreground\">Diploma</Badge>}\n-                {course.isNew && <Badge variant=\"destructive\">New Offering</Badge>}\n-              </div>\n+              <div className=\"absolute top-3 left-3 flex flex-wrap gap-2 max-w-[80%]\">\n+                {course.isDiploma && <Badge variant=\"secondary\" className=\"bg-blue-600 hover:bg-blue-700 text-white border-none shadow-sm\">Diploma</Badge>}\n+                {course.isNew && <Badge variant=\"destructive\" className=\"bg-emerald-600 hover:bg-emerald-700 text-white border-none shadow-sm\">New Offering</Badge>}\n+              </div>\n             </div>\n             <CardHeader>\n               <div className=\"flex justify-between items-start mb-2\">\n
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            className="pl-10" 
            placeholder="Search courses..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? 'default' : 'outline'}
              onClick={() => setCategory(cat)}
              className="whitespace-nowrap"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="flex flex-col hover:shadow-lg transition-all border-none shadow-sm bg-secondary/20 overflow-hidden">
            <div className="aspect-video w-full overflow-hidden relative">
              <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
              <Badge className="absolute top-3 right-3">{course.level}</Badge>
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
