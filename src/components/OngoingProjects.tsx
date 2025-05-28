import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Images } from "lucide-react";

interface OngoingProject {
  id: string;
  name: string;
  location: string;
  type: string;
  progress: number;
  startDate: string;
  estimatedCompletion: string;
  image: string;
  additionalImages: string[];
  description: string;
}

const ongoingProjectsData: OngoingProject[] = [
  {
    id: "ahmedabad-project",
    name: "Ongoing Project",
    location: "Ahmedabad, Gujarat",
    type: "Residential - 2BHK",
    progress: 25,
    startDate: "Feb 01, 2025",
    estimatedCompletion: "Aug 15, 2025",
    image: "/lovable-uploads/beecc461-cf93-4386-b01b-ac0c5ba6c0ad.png",
    additionalImages: [
      "/lovable-uploads/eebc01af-5d56-4d66-a473-19b306bcf769.png",
      "/lovable-uploads/7d22458a-9f3c-49b4-9c18-50df5fa6403c.png",
      "/lovable-uploads/58d85787-f848-493d-8954-5a78c2394e16.png"
    ],
    description: "Modern residential project in Ahmedabad featuring contemporary design elements and efficient space utilization. Currently in the initial construction phase with structural work and electrical installations underway."
  },
  {
    id: "ongoing-project-2",
    name: "Ongoing Project",
    location: "Ahmedabad, Gujarat",
    type: "Residential",
    progress: 37,
    startDate: "Feb 15, 2025",
    estimatedCompletion: "Aug 30, 2025",
    image: "/lovable-uploads/369542f9-b26a-4e88-b417-3ee0fc5459d3.png",
    additionalImages: [
      "/lovable-uploads/fd2a8803-38b7-488a-a4ab-9c14f86eea27.png",
      "/lovable-uploads/0535fbd8-0c2d-4d66-8d60-303a6f32c7b8.png",
      "/lovable-uploads/07e3cddb-ae28-4331-bebe-a81e7848cdea.png"
    ],
    description: "A modern residential project with open-plan layouts, contemporary finishes, and efficient space design. Current phase includes interior work and finishing installations."
  },
  {
    id: "ongoing-project-3",
    name: "Ongoing Project",
    location: "Ahmedabad, Gujarat",
    type: "Residential",
    progress: 10,
    startDate: "Mar 05, 2025",
    estimatedCompletion: "Jul 25, 2025",
    image: "/lovable-uploads/ff68daed-aeb7-4c2e-b265-9794d092d876.png",
    additionalImages: [
      "/lovable-uploads/7c0d5f67-3f90-4e37-9a4f-de18dfcc302b.png",
      "/lovable-uploads/e0dde710-0474-499c-b7b0-f54de5d88960.png",
      "/lovable-uploads/2807c74c-7381-4dd9-8b25-aaca0c025efb.png"
    ],
    description: "Contemporary residential project with modern design elements and quality finishes. Currently focusing on structural work and interior installations."
  },
];

const OngoingProjects = () => {
  return (
    <div className="mb-8">
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Image</TableHead>
              <TableHead>Project Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Gallery</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ongoingProjectsData.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="w-24">
                  <Link to={`/ongoing-project/${project.id}`}>
                    <AspectRatio ratio={1/1} className="h-16 w-16 rounded-md overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="object-cover h-full w-full"
                      />
                    </AspectRatio>
                  </Link>
                </TableCell>
                <TableCell className="font-medium">
                  <Link to={`/ongoing-project/${project.id}`} className="hover:text-interior-gold transition-colors">
                    {project.name}
                  </Link>
                </TableCell>
                <TableCell>{project.location}</TableCell>
                <TableCell>{project.type}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={project.progress} className="h-2 w-[100px]" />
                    <span className="text-xs font-medium">{project.progress}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Link 
                    to={`/ongoing-project/${project.id}`}
                    className="flex items-center text-xs text-gray-600 hover:text-interior-gold"
                  >
                    <Images size={14} className="mr-1" />
                    <span>{project.additionalImages.length + 1} Images</span>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile view with cards */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {ongoingProjectsData.map((project) => (
          <Link to={`/ongoing-project/${project.id}`} key={project.id} className="no-underline">
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <AspectRatio ratio={3/2}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-medium">{project.name}</h3>
                    <p className="text-sm text-gray-500">{project.location}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="bg-interior-gold/10 text-interior-gold border-interior-gold/20">
                      {project.type}
                    </Badge>
                    <span className="text-xs font-medium">{project.progress}% Complete</span>
                  </div>
                  
                  <Progress value={project.progress} className="h-2" />
                  
                  <div className="flex justify-between text-xs text-gray-500">
                    <div>Started: {project.startDate}</div>
                    <div>Est. Completion: {project.estimatedCompletion}</div>
                  </div>

                  <div className="flex items-center text-xs text-interior-gold mt-2">
                    <Images size={14} className="mr-1" />
                    <span>{project.additionalImages.length + 1} Images</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OngoingProjects;
export { ongoingProjectsData };
