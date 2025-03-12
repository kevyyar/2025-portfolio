function WorkExperience() {
  return (
    <section
      id="experience"
      className="flex flex-col my-20 px-6 gap-y-12 md:container md:mx-auto md:px-14 py-12"
    >
      <div className="text-center md:text-left">
        <h2 className="text-5xl font-black text-gray-900 tracking-tight md:text-7xl">Experience</h2>
        <p className="mt-4 text-gray-500 md:text-xl leading-relaxed">
          Over the years, I’ve built a strong foundation in web development, starting as a
          self-taught freelancer and evolving into a versatile software developer, delivering
          impactful solutions for diverse clients and industries.
        </p>
      </div>
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-800">Software Developer</h3>
              <p className="text-lg text-gray-600 font-medium">Softtek</p>
            </div>
            <div>
              <span className="text-md text-gray-500 font-light italic">
                September 2021 – Present
              </span>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-gray-500 leading-relaxed md:text-lg">
              As a Software Developer at Softtek, a dynamic consulting firm, I have contributed to a
              diverse array of projects for clients spanning multiple industries, delivering
              tailored web solutions that address unique client needs and challenges. I work
              extensively with modern front-end frameworks such as React, Next.js, and Nuxt to craft
              high-quality user interfaces, while also diving into back-end development with PHP and
              the Drupal framework to build robust, integrated systems. Collaborating with
              cross-functional teams including designers, back-end developers, and project managers,
              I help build and maintain scalable, user-focused applications, actively participating
              in agile workflows, contributing to code reviews, and refining development practices
              to support the delivery of polished, market-ready solutions.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-800">Freelancer</h3>
              <p className="text-lg text-gray-600 font-medium">Self-Employed</p>
            </div>
            <div>
              <span className="text-md text-gray-500 font-light italic">2018 – September 2021</span>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-gray-500 leading-relaxed md:text-lg">
              As a self-taught freelancer, I independently developed a range of projects for
              clients, including a fully functional eCommerce site built with WordPress and various
              other custom websites tailored to specific client requirements. Through hands-on
              learning and experimentation, I honed my skills in web development, overcoming
              challenges to deliver practical, client-focused solutions. This period of freelance
              work was instrumental in building my technical foundation, fostering problem-solving
              abilities, and igniting my passion for software development, ultimately preparing me
              for a professional career in the field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
