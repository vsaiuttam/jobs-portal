const Hero = ({
  title = '"Elevate Your Job Search Experience with Jobber"',
  subtitle = 'Greetings from Jobs Portal, where we redefine the job search process with a touch of sophistication and humor. Our platform is committed to revolutionizing the traditional approach to job hunting by infusing it with a blend of professionalism and light-heartedness. ',
}) => {
  return (
    <section className='bg-green-600 py-20 mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            {title}
          </h1>
          <p className='my-4 text-xl text-white'>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
