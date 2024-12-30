import Image from 'next/image'
import { Card } from 'flowbite-react';


export default function Home() {
  return (
    <>
    <main className="flex min-h-full flex-col items-center justify-between">
      <section className="bg-cover bg-fixed w-full bg-no-repeat bg-[url('https://live.staticflickr.com/65535/53415834125_cfdb046471_c.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl text-center py-16 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Welcome to India&#39;s First SIGBED</h1>
            <p className="mb-8  text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Empowering Innovation at the Nexus of Intelligence and Integration: SIGBED - Where Embedded Systems Redefine Possibilities.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="/events" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Our Events
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a href="/gallery" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    A sneak peek
                </a>  
            </div>
        </div>
      </section>
    </main>
    <section className="text-gray-600 bg-white  body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full">
          <h1 className="mb-2 text-2xl font-bold tracking-tight leading-none text-blue-950  md:text-3xl lg:text-4xl">Special Interest Group on Embedded Systems</h1>
          <h2 className="text-base  text-blue-500 tracking-widest font-semibold title-font mb-7">Empowering Innovation, Advancing Embedded Systems</h2>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">ACM SIGBED is a focal point within the Association for Computing Machinery (ACM) for all aspects of embedded computing systems and cyber-physical systems, including both software and hardware.</p>
          <p className="lg:w-4/7 mx-auto mt-5 leading-relaxed text-base">ACM SIGBED is committed to promoting research, development, and application of embedded systems across various domains. We aim to create a vibrant and collaborative environment where professionals and enthusiasts can share ideas, explore emerging trends, and contribute to the evolution of embedded computing.</p>
          <h2 className="text-base text-black tracking-widest font-medium  title-font mt-4">Learn More at <a className='text-blue-600  hover:text-blue-800 hover:duration-300 ' href='https://sigbed.org/'  target="_blank" >sigbed.org</a></h2>
        </div>

      </div>
    </section>
    <section className="text-gray-600 py-8 -mt-5 bg-white body-font">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
      <iframe width={600} height={600} src="https://lottie.host/embed/539219b9-d992-44e2-bcdf-976c0e3b711a/Jx34y0QnXh.json"></iframe>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Us
          </h1>
          <p className="mb-8 leading-relaxed">The Manipal University Jaipur (MUJ) ACM SIGBED Student Chapter is a place where innovation and technology meet to flourish!
          As an integral part of the larger ACM SIGBED, our chapter serves as a focal point within the Association for Computing Machinery (ACM) for all aspects of embedded computing systems, encompassing both software and hardware domains. We as a team work to embrace the attitude of learning, commitment, and hard work, and we extend a warm welcome to students who are passionate about embedded systems and its diverse implementations. Our chapter is a lively gathering place for students to interact with like-minded people, learn about innovative developments, and take part in educational programmes that help them gain a deeper comprehension of the world of robotics and Emebbed culture.</p>
        </div>
      </div>
    </section>



    <section className="text-gray-600 bg-gray-100 body-font overflow-hidden">
    <h1 className="mb-2 text-2xl pt-16 font-bold tracking-tight text-center leading-none text-blue-950 sm:text-5xl md:text-3xl lg:text-4xl">Our Blogs</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100 ">

          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <img className="h-full mr-5 max-w-full rounded-lg hidden sm:hidden md:hidden lg:block" src="https://images.unsplash.com/photo-1456615913800-c33540eac399?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Unmanned Aerial Vehicles (UAVs): Navigating the Skies with Autonomous Airborne Systems</h2>
              <p className="leading-relaxed">Unmanned Aerial Vehicles (UAVs) , in simpler terms also called drones, have transcended their military origins to become transformative technologies based on embedded systems and robotics..</p>
              <a href='https://medium.com/@acm.sigbed/unmanned-aerial-vehicles-uavs-navigating-the-skies-with-autonomous-airborne-systems-77c173299a03' className="text-blue-700 inline-flex items-center mt-4">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <img className="h-full mr-5 max-w-full rounded-lg hidden sm:hidden md:hidden lg:block" src="https://images.unsplash.com/photo-1497912393765-c549da4bd586?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Into the Future: Emerging Trends in UAV Research</h2>
              <p className="leading-relaxed">This blog explores in summarizing the paper “An Overview of Emerging Results in Cooperative UAV Control” highlighting the creativity that is raising the bar for UAV technology. In the rapidly evolving landscape of unmanned aerial vehicles (UAVs), research and development efforts are..</p>
              <a href='https://medium.com/@acm.sigbed/into-the-future-emerging-trends-in-uav-research-0c99e3f41b23' className="text-blue-700 inline-flex items-center mt-4">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <img className="h-full mr-5 max-w-full rounded-lg hidden sm:hidden md:hidden lg:block" src="https://live.staticflickr.com/65535/53414479547_4d25eee817_z.jpg" alt="" />
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">The Era of Humanoid Robots: A Technological Odyssey</h2>
              <p className="leading-relaxed">Robots are on more than just a man-made wonder, it is now a part to be of our everyday lives. Humanoid robots are quickly becoming a reality and will soon be a part of our .....</p>
              <a className="text-blue-700 inline-flex items-center mt-4">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className='flex justify-center'>
        <a href='https://medium.com/@acm.sigbed'>
        <button
          type="button"
          className="text-white mb-12 -mt-12 bg-[#01002F] hover:bg-[#01002F] hover:-translate-y-2 focus:ring-4 hover:duration-300 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-[#01002F] dark:hover:bg-[#01002F] focus:outline-none"
        >
          More Blogs!
        </button></a>
      </div>
    </section>

    <section className="text-gray-600 bg-white body-font overflow-hidden hidden lg:block">
    <h1 className="mb-2 text-2xl pt-16 font-bold tracking-tight text-center leading-none text-blue-950  md:text-3xl lg:text-4xl">Our Projects</h1>
    <div className="container px-5 py-24 mx-auto flex justify-center items-center">
      <a href='/projects'>
      <Card
        className="max-w-sm mx-2"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://live.staticflickr.com/65535/53420797170_a34aa7d830_z.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Quadcopter
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        A versatile aerial drone, the Quadcopter serves multiple applications with its agility and maneuverability. From aerial photography to surveillance, this project explores the potential of unmanned aerial vehicles in various fields. The Quadcopter stands as a testament to innovation.
        </p>
      </Card></a><a href='/projects'>
      <Card
        className="max-w-sm mx-2"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://live.staticflickr.com/65535/53420373396_d858a23434_z.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Bluetooth Car Using Arduino
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Integrating an Arduino and Bluetooth technology, this project results in a remote-controlled car. Beyond the fun aspect, it serves as a practical application of embedded systems and wireless communication in robotics and the use of wireless communication.
        </p>
      </Card></a><a href='/projects'>
      <Card
        className="max-w-sm mx-2"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://live.staticflickr.com/65535/53420378066_4b35868d0d_z.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        CNC Automatic Drawing Machine:
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Bringing precision to art, this project involves a CNC-controlled drawing machine. It combines artistry and technology, enabling the creation of intricate and accurate drawings through automated processes.
        </p>
      </Card></a>
    </div>

      <div className='flex justify-center'>
        <a href='/projects'>
        <button
          type="button"
          className="text-white mb-12 -mt-12 bg-[#01002F] hover:bg-[#01002F] focus:ring-4 hover:duration-300 focus:ring-blue-300 hover:-translate-y-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-[#01002F] dark:hover:bg-[#01002F] focus:outline-none"
        >
          More Projects!
        </button></a>
      </div>
    </section>

    <section className="text-gray-600 bg-white body-font overflow-hidden block sm:hidden">
    <h1 className="mb-2 text-2xl pt-16 font-bold tracking-tight text-center leading-none text-blue-950  md:text-3xl lg:text-4xl">Our Projects</h1>
    <div className="container px-2 sm:px-5 py-10 sm:py-24 mx-auto flex flex-col items-center">
  <a href='/projects' className="mb-4 sm:mb-0">
    <Card
      className="max-w-sm mx-auto"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://live.staticflickr.com/65535/53420797170_a34aa7d830_z.jpg"
    >
      <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Quadcopter
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        A versatile aerial drone, the Quadcopter serves multiple applications with its agility and maneuverability. From aerial photography to surveillance, this project explores the potential of unmanned aerial vehicles in various fields. The Quadcopter stands as a testament to innovation.
      </p>
    </Card>
  </a>
  <a href='/projects' className="mb-4 sm:mb-0">
    <Card
      className="max-w-sm mx-auto"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://live.staticflickr.com/65535/53420373396_d858a23434_z.jpg"
    >
      <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Bluetooth Car Using Arduino
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Integrating an Arduino and Bluetooth technology, this project results in a remote-controlled car. Beyond the fun aspect, it serves as a practical application of embedded systems and wireless communication in robotics and the use of wireless communication.
      </p>
    </Card>
  </a>
  <a href='/projects'>
    <Card
      className="max-w-sm mx-auto"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://live.staticflickr.com/65535/53420378066_4b35868d0d_z.jpg"
    >
      <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        CNC Automatic Drawing Machine
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Bringing precision to art, this project involves a CNC-controlled drawing machine. It combines artistry and technology, enabling the creation of intricate and accurate drawings through automated processes.
      </p>
    </Card>
  </a>
    </div>
    <div className='flex justify-center'>
        <a href='/projects'>
        <button
          type="button"
          className="text-white mb-12 -mt-12 bg-[#01002F] hover:bg-[#01002F] focus:ring-4 hover:duration-300 focus:ring-blue-300 hover:-translate-y-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-[#01002F] dark:hover:bg-[#01002F] focus:outline-none"
        >
          More Projects!
        </button></a>
      </div>
    </section>
  </>
  )
}
