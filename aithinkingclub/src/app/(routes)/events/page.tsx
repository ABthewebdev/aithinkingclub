export default function Page() {
    return (
        <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-muted bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Upcoming Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white">
                  Join us for these exciting AI-related events and activities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold text-white">AI Ethics Workshop</h3>
                <p className="text-sm text-muted-foreground text-white">
                  Explore the ethical implications of AI in society with guest speaker Dr. Jane Smith.
                </p>
                <p className="text-sm font-semibold text-white">Date: May 15, 2024</p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold text-white">AI Hacking Workshop</h3>
                <p className="text-sm text-muted-foreground text-white">
                  Put your hacking skills to the test in this 24-hour coding challenge.
                </p>
                <p className="text-sm font-semibold text-white">Date: June 1-2, 2024</p>
              </div>
            </div>
          </div>
        </section>
    )
}