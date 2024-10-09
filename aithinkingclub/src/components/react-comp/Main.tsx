import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Lightbulb, Calendar } from "lucide-react"
import Link from "next/link"

export default function Main() {
    return (
        <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Explore the Future of AI
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join our college club to discuss, learn, and shape the future of artificial intelligence.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#join">
                  <Button>Join Now</Button>
                </Link>
                <Link href="#about">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Our Club</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're a community of students passionate about artificial intelligence and its impact on society.
                  Our club focuses on fostering critical thinking, ethical considerations, and practical applications of AI.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Diverse Community</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with students from various disciplines who share your interest in AI.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Lightbulb className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Engaging Discussions</h3>
                <p className="text-sm text-muted-foreground">
                  Participate in thought-provoking debates on the latest AI trends and ethical considerations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Calendar className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Regular Events</h3>
                <p className="text-sm text-muted-foreground">
                  Attend workshops, seminars, and hackathons to enhance your AI knowledge and skills.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for these exciting AI-related events and activities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold">AI Ethics Workshop</h3>
                <p className="text-sm text-muted-foreground">
                  Explore the ethical implications of AI in society with guest speaker Dr. Jane Smith.
                </p>
                <p className="text-sm font-semibold">Date: May 15, 2024</p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold">Machine Learning Hackathon</h3>
                <p className="text-sm text-muted-foreground">
                  Put your ML skills to the test in this 24-hour coding challenge.
                </p>
                <p className="text-sm font-semibold">Date: June 1-2, 2024</p>
              </div>
            </div>
          </div>
        </section>
        <section id="join" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Club</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Become a part of our AI thinking and awareness community. Sign up for our newsletter to stay updated.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
}