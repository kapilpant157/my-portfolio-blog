'use client'

import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'
import PropTypes from 'prop-types';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
          Kapil.
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
            Home
          </Link>
          <Link href="/gallery" className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
            Gallery
          </Link>
          <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
            Projects
          </Link>
          <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
            Blog
          </Link>
          <Link href="/systemsim" className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
            Simulation and Modeling
          </Link>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  )
}

export default Header

// const GallerySection = ({ title, description, images }) => {
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto flex flex-wrap">
//         <div className="flex w-full mb-20 flex-wrap">
//           <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
//             {title}
//           </h1>
//           <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
//             {description}
//           </p>
//         </div>
//         <div className="flex flex-wrap md:-m-2 -m-1">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className={`${
//                 index % 3 === 0 ? 'w-full' : 'w-1/2'
//               } md:p-2 p-1`}
//             >
//               <img
//                 alt={`gallery-${index}`}
//                 className="w-full object-cover h-full object-center block"
//                 src={image}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// GallerySection.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default GallerySection;
