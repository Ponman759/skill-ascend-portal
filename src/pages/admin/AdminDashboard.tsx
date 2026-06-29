import React, { useState } from 'react';
import { useCourses, Course } from '@/hooks/useCourses';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash2, LayoutDashboard, BookOpen, Users } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

const AdminDashboard = () => {
  const { user, isAdmin } = useAuth();
  const { courses, addCourse, updateCourse, deleteCourse } = useCourses();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    duration: '',
    level: 'Beginner' as Course['level'],
    thumbnail: '',
    isDiploma: false,
    isNew: false,
  });

  if (!user || !isAdmin) return <Navigate to="/login" />;

  const handleOpenAdd = () => {
    setEditingCourse(null);
    setFormData({
      title: '',
      description: '',
      category: '',
      duration: '5 hours',
      level: 'Beginner',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      isDiploma: false,
      isNew: false,
    });
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (course: Course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      description: course.description,
      category: course.category,
      duration: course.duration,
      level: course.level,
      thumbnail: course.thumbnail,
      isDiploma: !!course.isDiploma,
      isNew: !!course.isNew,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCourse) {
      updateCourse(editingCourse.id, formData);
    } else {
      addCourse({
        ...formData,
        lessons: [{ id: 'l1', title: 'Introduction', content: 'Welcome to the course.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }]
      });
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your courses and learning content.</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleOpenAdd}><Plus className="mr-2 h-4 w-4" /> Add New Course</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>{editingCourse ? 'Edit Course' : 'Create New Course'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Title</label>
                <Input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Category</label>
                  <Input value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} required />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Duration</label>
                  <Input value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} required />
                </div>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Thumbnail URL</label>
                <Input value={formData.thumbnail} onChange={e => setFormData({...formData, thumbnail: e.target.value})} required />
              </div>
              
              <div className="flex items-center space-x-4 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="isDiploma" 
                    checked={formData.isDiploma} 
                    onCheckedChange={(checked) => setFormData({...formData, isDiploma: !!checked})} 
                  />
                  <label htmlFor="isDiploma" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Diploma Course
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="isNew" 
                    checked={formData.isNew} 
                    onCheckedChange={(checked) => setFormData({...formData, isNew: !!checked})} 
                  />
                  <label htmlFor="isNew" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    New Offering
                  </label>
                </div>
              </div>

              <DialogFooter>
                <Button type="submit">{editingCourse ? 'Save Changes' : 'Add Course'}</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{courses.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue (MTD)</CardTitle>
            <LayoutDashboard className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦2.4M</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Management</CardTitle>
          <CardDescription>View, edit, or remove courses from the catalog.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Lessons</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>{course.category}</TableCell>
                  <TableCell>{course.level}</TableCell>
                  <TableCell>{course.lessons.length}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {course.isDiploma && <span className="text-[10px] bg-primary/10 text-primary px-1 rounded font-semibold">DIPLOMA</span>}
                      {course.isNew && <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1 rounded font-semibold">NEW</span>}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="icon" onClick={() => handleOpenEdit(course)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => deleteCourse(course.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
