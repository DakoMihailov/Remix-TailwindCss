import { Section } from '~/components/section'
import { H1, H3 } from '~/components/typograph'

export default function index() {
    return (
        <>
            <Section
                className="text-gray-800 dark:text-gray-400 mt-12 pb-12"
                as="body" extrapolate
            >
                <div className='mt-24 flex flex-col justify-center'>
                    <div className='mt-4 flex justify-center'>
                        <H1>Become part of our team</H1>
                    </div>
                    <div className="flex container mx-auto mt-8 gap-8">
                        <div className='timing-[cubic-bezier(0.1,0.7,1,0.5)] timing-ease-in-out flex justify-center w-1/2 '>
                            <img src="https://oddstorm.company/img/careers/office-1.webp"/>
                        </div>
                        <div className='justify-center w-1/2'>
                            <div className="flex items-center h-5 gap-8 mt-2">
                                <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-black-900 text-sm focus:ring-blue-500 focus:border-blue-600 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none" placeholder = "Your Name" required />
                                <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-black-900 text-sm focus:ring-blue-500 focus:border-blue-600 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none" placeholder = "Your Email" required />
                            </div>
                            <div className="flex items-center h-5 gap-8 mt-12">
                                <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-black-900 text-sm focus:ring-blue-500 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none" placeholder = "Github(link)" required />
                            </div>
                            <div className="flex items-center h-5 gap-8 mt-12">
                                <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-black-900 text-sm focus:ring-blue-500 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none" placeholder = "Linkedin(link)" required />
                            </div>
                            <div className="flex items-center h-5 gap-8 mt-40">
                                <textarea id="message" rows="12" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Motivational Letter"></textarea>    
                            </div>
                            <div className="flex justify-center items-center h-5 gap-8 mt-36">
                            <button type="submit" className="mt-8 w-30 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                                Submit
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section> 
        </>
    );
}


