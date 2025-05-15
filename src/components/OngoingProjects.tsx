
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface OngoingProject {
  id: string;
  name: string;
  location: string;
  type: string;
  progress: number;
  startDate: string;
  estimatedCompletion: string;
  image: string;
}

const ongoingProjectsData: OngoingProject[] = [
  {
    id: "urban-apartment",
    name: "Urban Apartment Redesign",
    location: "Mumbai, Maharashtra",
    type: "Residential - 3BHK",
    progress: 75,
    startDate: "Jan 10, 2025",
    estimatedCompletion: "Jun 20, 2025",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=600&q=80",
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
              <TableHead>Timeline</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ongoingProjectsData.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="w-24">
                  <AspectRatio ratio={1/1} className="h-16 w-16 rounded-md overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="object-cover h-full w-full"
                    />
                  </AspectRatio>
                </TableCell>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>{project.location}</TableCell>
                <TableCell>{project.type}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={project.progress} className="h-2 w-[100px]" />
                    <span className="text-xs font-medium">{project.progress}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="text-xs underline text-gray-600 hover:text-interior-gold">
                        View Timeline
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="font-medium">{project.name}</h4>
                        <div className="grid grid-cols-2 gap-1 text-sm">
                          <div className="text-gray-500">Start Date:</div>
                          <div>{project.startDate}</div>
                          <div className="text-gray-500">Estimated Completion:</div>
                          <div>{project.estimatedCompletion}</div>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                        <div className="flex justify-between text-xs mt-1">
                          <span>Start</span>
                          <span>In Progress</span>
                          <span>Complete</span>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile view with cards */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {ongoingProjectsData.map((project) => (
          <Card key={project.id}>
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OngoingProjects;
