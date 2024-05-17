import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function WishocracyLandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">

        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How it Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Discover Wishes
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            GenieDAOs
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Get Involved
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" id="hero">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Unleash the Power of Collective Intelligence
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Wishocracy is a revolutionary platform that harnesses the wisdom of the crowd to identify and
                  prioritize the most impactful wishes for society.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-primary-50 dark:text-primary-900 dark:hover:bg-primary-50/90 dark:focus-visible:ring-primary-300"
                  href="#"
                >
                  Get Involved
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-transparent bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="how-it-works">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm dark:bg-primary-800">
                    How it Works
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Discovering the Most Impactful Wishes
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Wishocracy allows people to submit wishes they believe would have the greatest positive impact on
                    the world. Through a process of voting and discussion, the community collectively determines which
                    wishes are the most important to focus on.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-primary-50 dark:text-primary-900 dark:hover:bg-primary-50/90 dark:focus-visible:ring-primary-300"
                    href="#"
                  >
                    Discover Wishes
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-transparent bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Learn About GenieDAOs
                  </Link>
                </div>
              </div>
              <img
                alt="Wishocracy Platform"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="discover-wishes">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Discovering the Most Impactful Wishes
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Wishocracy allows people to submit wishes they believe would have the greatest positive impact on the
                world. Through a process of voting and discussion, the community collectively determines which wishes
                are the most important to focus on.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <LightbulbIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Submit a Wish</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Share your ideas for how to make the world a better place.
                  </p>
                  <Button variant="link">Learn More</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <ThumbsUpIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Vote on Wishes</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Help the community determine which wishes are the most important.
                  </p>
                  <Button variant="link">Learn More</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <LightbulbIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Discuss and Refine</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Collaborate with others to shape the most promising wishes.
                  </p>
                  <Button variant="link">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="geniedaos">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                GenieDAOs: Teams United by a Common Wish
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                GenieDAOs are special teams formed within Wishocracy where people with shared passions and skills come
                together to work on a specific wish. These teams collaborate to develop innovative solutions and
                strategies to make their chosen wish a reality.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <UsersIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Join a GenieDAO</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Connect with others who share your passion for a specific wish.
                  </p>
                  <Button variant="link">Learn More</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <RocketIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Start a GenieDAO</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Bring together a team to work on the wish you care about most.
                  </p>
                  <Button variant="link">Learn More</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <LightbulbIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Collaborate and Innovate</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Work with your team to develop solutions and strategies to make your wish a reality.
                  </p>
                  <Button variant="link">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t" id="get-involved">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get Involved with Wishocracy</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join the movement to harness the power of collective intelligence and make a real impact on the world.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to stay updated on the latest from Wishocracy.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Wishocracy. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}


function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ThumbsUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}


function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function WandIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8 19 13" />
      <path d="M15 9h0" />
      <path d="M17.8 6.2 19 5" />
      <path d="m3 21 9-9" />
      <path d="M12.2 6.2 11 5" />
    </svg>
  )
}
