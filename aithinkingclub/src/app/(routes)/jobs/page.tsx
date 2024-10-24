import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, MapPinIcon } from "lucide-react"

const internships = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "TechCorp",
    location: "San Francisco, CA",
    duration: "3 months",
    description: "Join our team to work on cutting-edge web applications using React and Node.js.",
    tags: ["React", "Node.js", "JavaScript"]
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "DataWiz",
    location: "New York, NY",
    duration: "6 months",
    description: "Apply machine learning techniques to solve real-world problems in finance and healthcare.",
    tags: ["Python", "Machine Learning", "SQL"]
  },
  {
    id: 3,
    title: "UX Design Intern",
    company: "DesignMasters",
    location: "Seattle, WA",
    duration: "4 months",
    description: "Create user-centered designs for mobile and web applications.",
    tags: ["UI/UX", "Figma", "User Research"]
  },
  {
    id: 4,
    title: "Cloud Engineering Intern",
    company: "CloudNine",
    location: "Austin, TX",
    duration: "3 months",
    description: "Work with cloud technologies to build scalable and resilient infrastructure.",
    tags: ["AWS", "Docker", "Kubernetes"]
  },
  {
    id: 5,
    title: "Mobile App Development Intern",
    company: "AppGenius",
    location: "Boston, MA",
    duration: "5 months",
    description: "Develop cross-platform mobile applications using React Native.",
    tags: ["React Native", "iOS", "Android"]
  },
  {
    id: 6,
    title: "Cybersecurity Intern",
    company: "SecureNet",
    location: "Washington, D.C.",
    duration: "4 months",
    description: "Assist in identifying and mitigating security vulnerabilities in enterprise systems.",
    tags: ["Network Security", "Penetration Testing", "Cryptography"]
  }
]

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Tech Internships</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internships.map((internship) => (
                <Card key={internship.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{internship.title}</CardTitle>
                    <CardDescription>{internship.company}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-gray-500 mb-4">{internship.description}</p>
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
      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">© 2024 Tech Internships. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}