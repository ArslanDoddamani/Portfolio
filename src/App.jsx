// https://mohamed-lifa7.vercel.app/

import React, { useState } from "react";

const projects = [
  {
    title: "Zomato Redesign",
    description: "Redesigned Zomato's main page to elevate the user experience by incorporating modern, intuitive interfaces and streamlined navigation. Focused on improving visual appeal while maintaining a sleek and user-friendly design. The revamp emphasized creating a seamless browsing experience that resonates with Zomato’s dynamic audience. Technologies Used: HTML, CSS, JavaScript, GSAP, and Locomotive.js",
    liveLink: "https://ka-29-coders-reimagine-round2.vercel.app/",
    codeLink: "https://github.com/ArslanDoddamani/KA29_Coders-ReimagineRound2",
    figmaLink: "https://www.figma.com/design/xxsVjxdPeKbqjH0MI36nhw/Zomato?node-id=0-1&t=Kr4TZmc3p086VHMZ-1",
    status: "Completed",
  },
  {
    title: "Revampmoto Redesign",
    description: "Transformed Revampmoto's main page with a contemporary design approach, enhancing functionality and aesthetics to align with the brand’s innovative image. Delivered a visually engaging and user-centric interface, optimizing navigation for a smoother browsing experience tailored to their audience. Technologies Used: HTML, CSS, JavaScript, GSAP, and Locomotive.js",
    liveLink: "https://ka-29-coders-reimagine-round1.vercel.app/", // Not available
    codeLink: "https://github.com/ArslanDoddamani/KA29_Coders-ReimagineRound1",
    figmaLink: "https://www.figma.com/design/FBmyJA1QRgFCAZjxRDgMjd/Revamp-Moto?node-id=0-1&t=Yae8RbbWl4Vh0avh-1",
    status: "Completed",
  },
  {
    title: "BEC IEEE Website",
    description:
      "Built the BEC IEEE Student Branch website from scratch, creating a modern and interactive platform to showcase the branch’s activities, achievements, and events. Designed with a focus on seamless navigation, engaging visuals, and user-friendly functionality, the site delivers a professional and dynamic user experience. Incorporated advanced animations and 3D elements to enhance visual appeal and interactivity. Technologies Used: React.js, GSAP, Tailwind CSS, and React Three Fiber",
    liveLink: "https://id-card-pi.vercel.app/",
    codeLink: null,
    figmaLink: "https://www.figma.com/design/9INhbSbZOO2QZRVwKlVAhZ/BEC-IEEE?node-id=0-1&t=Fv6AtnMU4dLjj7T1-1",
    status: "Working",
  },
  {
    title: "Speech-to-Text",
    description:
      "The speech-to-text converter, with a copy feature, is designed to convert spoken language into written text in real-time, enhancing accessibility and productivity. Technologies Used: React.js and Web Speech API.",
    liveLink: "https://speech-to-text-bay.vercel.app/",
    codeLink: "https://github.com/ArslanDoddamani/Speech_to_Text",
    figmaLink: null,
    status: "Completed",
  },
  {
    title: "Todo Web Application",
    description:
      "Developed a dynamic and responsive Todo web application from scratch, providing users with an intuitive interface to manage tasks efficiently. Designed for simplicity and ease of use, the application includes features like task addition, deletion, and real-time updates. The clean and modern design ensures a seamless user experience across all devices. Technologies Used: React.js and Tailwind CSS",
    liveLink: "https://todo-eosin-five.vercel.app/",
    codeLink: "https://github.com/ArslanDoddamani/Todo",
    figmaLink: null,
    status: "Completed",
  },
  {
    title: "Full-Stack E-Commerce Website",
    description:
      "Developed a feature-rich e-commerce platform with seamless browsing, secure payments, and admin functionality, offering a complete online shopping experience. Technologies Used: MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    liveLink: null,
    codeLink: null,
    figmaLink: null,
    status: "Working",
  },
  {
    title: "University Examination Payment Automation",
    description:
      "Developed a platform to streamline subject registration and exam fee payments with secure online payment integration, enhancing efficiency and user convenience. Technologies Used: MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    liveLink: null,
    codeLink: null,
    figmaLink: null,
    status: "Working",
  },
  {
    title: "Amazon Clone-Main Page",
    description:
      "Created a replica of Amazon’s main page, focusing on a clean, intuitive design and seamless user experience. The clone features product listings, a responsive layout, and smooth navigation to mimic the dynamic shopping experience of the original site. Implemented key design elements and functionality to ensure a visually appealing and user-friendly interface. Technologies Used: HTML, CSS, JavaScript",
    liveLink: "https://vercel.com/arslan-doddamanis-projects/amazon",
    codeLink: "https://github.com/ArslanDoddamani/amazon-",
    figmaLink: null,
    status: "Completed",
  },
  {
    title: "Amazon Clone-Main Page",
    description:
      "Developed an interactive recipe book website that allows users to browse, search, and filter through various recipes. Each recipe page includes detailed instructions, ingredients, and images for easy cooking. The site features a clean, responsive design with smooth navigation, ensuring a seamless experience across all devices.Technologies Used: HTML, CSS, JavaScript",
    liveLink: "https://vercel.com/arslan-doddamanis-projects/recipe-book",
    codeLink: "https://github.com/ArslanDoddamani/RecipeBook",
    figmaLink: null,
    status: "Completed",
  },

];

const App = () => {
  return (
    <>
      <div className="bg-black text-white px-6">
        <header className="sticky top-0 z-50 backdrop-blur-sm backdrop-filter">
          <div className="container mx-auto flex w-full max-w-4xl items-center py-4 sm:justify-between sm:space-x-0">
            <div>
              <h1 className="text-xl font-bold sm:text-2xl">
                Arslan Doddamani
              </h1>
              <p className="">Full Stack Web developer and Designer</p>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4">
              <nav className="flex items-center space-x-1">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ArslanDoddamani"
                >
                  <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:border h-9 px-3">
                    <svg
                      viewBox="0 0 438.549 438.549"
                      className="h-[1.2rem] w-[1.2rem] fill-current"
                    >
                      <path
                        fill="currentColor"
                        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                      ></path>
                    </svg>
                  </div>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/arslandoddamani/"
                >
                  <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:border h-9 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 50 50"
                      className="h-[1.5rem] w-[1.5rem] fill-current"
                    >
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                  </div>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://x.com/Arslan_A_D"
                >
                  <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:border h-9 px-3">
                    <svg
                      className="h-[1.2rem] w-[1.2rem] fill-current"
                      height="23"
                      viewBox="0 0 1200 1227"
                      width="23"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
                    </svg>
                    <span className="sr-only">X</span>
                  </div>
                </a>
              </nav>
            </div>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 bg-border h-[1px] w-full bg-zinc-800"
          ></div>
        </header>

        

        <main className="container mx-auto my-4 w-full max-w-4xl">
          <div className="flex flex-col space-y-4">

            <div className="flex justify-start my-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => window.open('path/to/your/resume.pdf', '_blank')}
            >
              Download Resume
            </button>
          </div>

            <section>
              <h2 className="text-xl font-semibold">About</h2>
              <p className="text-justify">
                👋 Hi! I’m a Full Stack Web Developer and UI/UX Designer skilled
                in React, Three.js, Figma, and tools like Redux and SCSS.
                <br />
                <br />
                🚀 I’ve had the opportunity to work as a React Developer Intern
                at a startup, where I contributed to building scalable and
                interactive web applications. This experience has honed my
                problem-solving skills and deepened my understanding of
                real-world development.
                <a
                  className="text-blue-500 hover:underline"
                  href="https://www.vealthx.com/"
                >
                  Website preview 
                </a>
                <br />
                <br />
                🔎 I’m currently on the lookout for exciting opportunities in
                Web Development and UI/UX Design roles. If you’re seeking
                someone who’s detail-oriented, innovative, and eager to create
                impactful digital experiences, let’s connect!
                <br />
                <br />
                📩 Feel free to reach out:{" "}
                <a
                  className="text-blue-500 hover:underline"
                  href="mailto:arslandoddamani11@gmail.com"
                >
                  arslandoddamani11@gmail.com
                </a>
                <br />
                <br />✨ Let’s build something extraordinary together! 🌟
              </p>
            </section>

            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-border h-[1px] w-full bg-zinc-800"
            ></div>

            <section>
              <h2 className="mb-6 text-xl font-semibold mt-2">Projects</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {projects.map((project, index) => {
                  const [isExpanded, setIsExpanded] = useState(false);

                  return (
                    <div
                      key={index}
                      className="rounded-lg border border-zinc-500"
                    >
                      <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="text-2xl font-semibold leading-none tracking-wide flex items-center">
                          <span className="mr-2">{project.title}</span>
                          {project.status && (
                            <div
                              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${
                                project.status == "Completed"
                                  ? "bg-green-700"
                                  : "bg-red-900"
                              }`}
                            >
                              {project.status}
                            </div>
                          )}
                        </h3>
                        {/* <a
                          target="_blank"
                          rel="noreferrer"
                          href={project.figmaLink}
                          className="text-blue-500 hover:underline"
                        >
                          View Figma Design
                        </a> */}
                      </div>
                      <div className="p-6 pt-0 flex-grow">
                        <div className="overflow-hidden">
                          <p
                            className={
                              isExpanded ? "line-clamp-none" : "line-clamp-3"
                            }
                          >
                            {project.description}
                          </p>
                          {project.description.length > 100 && (
                            <button
                              onClick={() => setIsExpanded(!isExpanded)}
                              className="text-blue-500 hover:underline mt-2"
                            >
                              {isExpanded ? "Read less" : "Read more"}
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="p-6 pt-0 flex items-center justify-end">
                        {project.figmaLink && (
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-800 hover:bg-black hover:border h-10 px-4 py-2 "
                            href={project.figmaLink}
                          >
                            Figma
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-800 hover:bg-black hover:border h-10 px-4 py-2 ml-4"
                            href={project.liveLink}
                          >
                            Live
                          </a>
                        )}
                        {project.codeLink && (
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-4 bg-white text-black"
                            href={project.codeLink}
                          >
                            <svg
                              viewBox="0 0 438.549 438.549"
                              className="mr-2 h-4 w-4"
                            >
                              <path
                                fill="currentColor"
                                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                              ></path>
                            </svg>{" "}
                            Code{" "}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </main>

        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full bg-zinc-800 mt-16"
        ></div>

        <section className="p-6 pt-0 flex items-center justify-center">
          <p className="text-center pt-4">
            Working on a new portfolio, it will be live soon. Check out the{" "}
            <a
              href="https://www.figma.com/design/hskMOXOmlE8DsYI7pwwBUl/Portfolio?node-id=0-1&t=yJ53AtCdP8Ina15w-1"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Figma design
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
};

export default App;
