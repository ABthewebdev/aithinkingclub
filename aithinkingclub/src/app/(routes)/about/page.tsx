import { Calendar, Lightbulb, Users } from "lucide-react";

export default function Page() {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">About Our Club</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white">
                  We're a community of students passionate about artificial intelligence and its impact on society.
                  Our club focuses on fostering critical thinking, ethical considerations, and practical applications of AI.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold text-white">Diverse Community</h3>
                <p className="text-sm text-muted-foreground text-white">
                  Connect with students from various disciplines who share your interest in AI.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Lightbulb className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold text-white">Engaging Discussions</h3>
                <p className="text-sm text-muted-foreground text-white">
                  Participate in thought-provoking debates on the latest AI trends and ethical considerations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Calendar className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold text-white">Regular Events</h3>
                <p className="text-sm text-muted-foreground text-white">
                  Attend workshops, seminars, and hackathons to enhance your AI knowledge and skills.
                </p>
              </div>
            </div>
          </div>
        </section>
    )
}