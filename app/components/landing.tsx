import { Section } from '~/components/section'
import { H3, H2, H5 } from '~/components/typograph'

export const Landing = () => {
  return (
    <>
      <Section
        className="text-gray-800 dark:text-gray-400 mt-24 pb-12"
        as="body" extrapolate
      >
        <div className="flex container mx-auto">
          <div className='flex flex-col justify-center w-1/2'>
            <H3>Web data scanning and</H3>
            <H3>processing</H3>
            <H2 className='mt-12'>Your solution for instant parsing, comparing and</H2>
            <H2>delivery of big and dynamic data</H2>
          </div>
          <div className='timing-[cubic-bezier(0.1,0.7,1,0.5)] timing-ease-in-out flex justify-center w-1/2 '>
            <img src="https://oddstorm.company/img/home/home-parallax-img.webp"/>
          </div>
        </div>
        <div className='mt-24 flex flex-col justify-center'>
          <div className='mt-4 flex justify-center'>
            <H2>Speed of scanning and the art of well structured data</H2>
          </div>
          <div className='flex mr-24 ml-24 mt-4 justify-center gap-3'>
            <div className='flex flex-col  w-1/4 drop-shadow-2xl p-8 items-center bg-white'>
              <div className='flex justify-center'>
                <img className='w-3/4 hover:scale-75' src="https://oddstorm.company/img/home/values-1.webp" />
              </div>
              <div className='mt-4 flex justify-center'><H5>Global</H5></div>
            </div>
            <div className='flex flex-col  w-1/4 drop-shadow-2xl p-8 items-center bg-white'>
              <img className='hover:scale-75' src="https://oddstorm.company/img/home/values-2.webp" />
              <div className='mt-4 flex justify-center'><H5>Global</H5></div>
            </div>
            <div className='flex flex-col  w-1/4 drop-shadow-2xl p-8 items-center bg-white'>
              <img className='hover:scale-75' src="https://oddstorm.company/img/home/values-3.webp" />
              <div className='mt-4 flex justify-center'><H5>Global</H5></div>
            </div>   
          </div>
        </div>
        <div className='mt-8 flex flex-col justify-center'>
          <div className='mt-4 flex justify-center'>
            <H2>Part of our hard working team</H2>
          </div>
          <div className='flex mr-24 ml-24 mt-12 justify-center gap-24'>
            <div className='flex flex-col  w-1/4 drop-shadow-2xl items-center bg-white dark:bg-gray-600 hover:scale-110'>
              <div className='flex justify-center '>
                <img src="https://oddstorm.company/img/team/team-1.webp"/>
              </div>
              <div className='mt-4 mb-4 flex justify-center'><H5>Chavdar Kopoev</H5></div>
            </div>
            <div className='flex flex-col  w-1/4 drop-shadow-2xl items-center bg-white dark:bg-gray-600 hover:scale-110'>
              <img src="https://oddstorm.company/img/team/team-3.webp" />
              <div className='mt-4 flex justify-center'><H5>Ivaylo Georgiev</H5></div>
            </div>
            <div className='flex flex-col  w-1/4 drop-shadow-2xl items-center bg-white dark:bg-gray-600 hover:scale-110'>
              <img src="https://oddstorm.company/img/team/team-4.webp" />
              <div className='mt-4 flex justify-center'><H5>Lydmila Peneva</H5></div>
            </div>         
          </div>
        </div>
      </Section> 
    </>
  )
}
