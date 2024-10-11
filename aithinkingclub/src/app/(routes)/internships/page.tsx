import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, MapPinIcon } from "lucide-react"

const internships = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    duration: "3 months",
    description: "Join our team to work on cutting-edge web applications using React and Node.js.",
    tags: ["React", "Node.js", "JavaScript"]
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "DataWiz",
    location: "New York, NY",
    duration: "6 months",
    description: "Apply machine learning techniques to solve real-world problems in finance and healthcare.",
    tags: ["Python", "Machine Learning", "SQL"]
  },
  {
    id: 3,
    title: "Machine Learning Engineer",
    company: "unique.ai",
    location: "Seattle, WA",
    duration: "4 months",
    description: "Create algorithms to trade stocks and print more money than the Federal Reserve.",
    tags: ["Python", "Pytorch", "Math"]
  },
  {
    id: 4,
    title: "Cloud Engineer",
    company: "CloudNine",
    location: "Austin, TX",
    duration: "3 months",
    description: "Work with cloud technologies to build scalable and resilient infrastructure.",
    tags: ["AWS", "Docker", "Kubernetes"]
  },
  {
    id: 5,
    title: "Mobile App Developer",
    company: "AppGenius",
    location: "Boston, MA",
    duration: "5 months",
    description: "Develop cross-platform mobile applications using React Native.",
    tags: ["React Native", "iOS", "Android"]
  },
  {
    id: 6,
    title: "Cybersecurity Specialist",
    company: "SecureNet",
    location: "Washington, D.C.",
    duration: "4 months",
    description: "Assist in identifying and mitigating security vulnerabilities in enterprise systems.",
    tags: ["Network Security", "Penetration Testing", "Cryptography"]
  }
]

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="text-center font-semibold text-2xl">
        <h1 className="text-white">Internships we offer</h1>
      </div>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internships.map((internship) => (
                <Card key={internship.id} className="flex flex-col bg-slate-950">
                  <CardHeader>
                    <CardTitle className="text-white">{internship.title}</CardTitle>
                    <CardDescription className="text-white">{internship.company}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-gray-300 mb-4">{internship.description}</p>
                    <div className="flex items-center mb-2">
                      <MapPinIcon className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-500">{internship.location}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <CalendarIcon className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-500">{internship.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {internship.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}