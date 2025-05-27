
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
    id: "riverside-office",
    name: "Riverside Office Complex",
    location: "Ahmedabad, Gujarat",
    type: "Commercial - 5000 sq ft",
    progress: 45,
    startDate: "Feb 15, 2025",
    estimatedCompletion: "Aug 30, 2025",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
    ],
    description: "A modern office complex with open-plan workspaces, collaborative zones, and private meeting rooms. Current phase includes structural work and initial electrical installation."
  },
  {
    id: "heritage-home",
    name: "Heritage Home Renovation",
    location: "Jaipur, Rajasthan",
    type: "Renovation - 2500 sq ft",
    progress: 30,
    startDate: "Mar 05, 2025",
    estimatedCompletion: "Jul 25, 2025",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=600&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1518659527800-a5e69fee613f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Careful restoration of a historic property, preserving original architectural details while incorporating modern amenities. Currently focusing on foundation repairs and structural reinforcement."
  },
  {
    id: "retail-showroom",
    name: "Flagship Retail Showroom",
    location: "Bengaluru, Karnataka",
    type: "Showroom - 3200 sq ft",
    progress: 60,
    startDate: "Dec 20, 2024",
    estimatedCompletion: "May 15, 2025",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=600&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1608731294852-9eb1a5600c1d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?auto=format&fit=crop&w=600&q=80"
    ],
    description: "A contemporary retail space designed to showcase luxury products with custom display units, strategic lighting, and interactive zones. Display fixtures and lighting systems are currently being installed."
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
