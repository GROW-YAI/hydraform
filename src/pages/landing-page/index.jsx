import React, { useState } from 'react';
import {
  FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF,
  FaInstagram, FaTiktok, FaLinkedin,
} from 'react-icons/fa';
import { StarIcon, QuoteIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/images/vincecolelogo2.png';
import backgroundImage from '../../assets/images/hero-bg.jpg';
import videoFile from '../../assets/videos/video-process.mp4';
import recycleImage from '../../assets/images/recycleimage.webp';
import serviceImage2 from '../../assets/images/l-news-2.jpg';
import serviceImage3 from '../../assets/images/l-news-3.jpg';
import aboutUsImage from '../../assets/images/construction1.webp';
import blogImage1 from '../../assets/images/entrepreneur1.jpeg';
import blogImage2 from '../../assets/images/brickspic4.jpeg';
import blogImage3 from '../../assets/images/brickspic6.jpeg';
import blogImage4 from '../../assets/images/brickspic2.jpeg';
import blogImage5 from '../../assets/images/brickhouse.jpeg';
import blogImage6 from '../../assets/images/brickspic3.jpeg';
import blogImage7 from '../../assets/images/brickwall2.jpg';
import blogImage8 from '../../assets/images/brickspic5.jpeg';
import blogImage9 from '../../assets/images/background3.jpg';
import testimonialImage1 from '../../assets/images/reggieReynolds.jpg';
import testimonialImage2 from '../../assets/images/dianeHampton.jpg';
import testimonialImage3 from '../../assets/images/henryAkwaboah.jpg';

const LandingPage = () => {
  return (
    <>
      {/* Who We Are Section/Video */}

      <section id="home" className="py-20 text-left">
      <motion.div 
    className="container mx-auto px-4 flex flex-wrap items-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  ></motion.div>
  <div className="container mx-auto px-4 flex flex-wrap items-center">
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-3xl font-bold text-red-700 mb-4">WHO WE ARE?</h2>
      <p className="text-gray-700 font-semibold mb-4">
        We are Vincecole Ventures. We specialize in Hydraform Seaweed-Interlock Brick Technology, which involves incorporating seaweed ashes, cement and clay to manufacture bricks for construction.
      </p>
      <div className="mb-6">
        <p className="font-bold text-red-700 mb-2">Motto</p>
        <p className="text-gray-700">Seaweed Interlocking Bricks: Environmentally-Friendly Building Materials, Our Priority!</p>
      </div>
      <div className="mb-6">
        <p className="font-bold text-red-700 mb-2">Mission</p>
        <p className="text-gray-700">Our mission is to produce durable, affordable, and environmentally-friendly building materials for construction.</p>
      </div>
      <div className="mb-6">
        <p className="font-bold text-red-700 mb-2">Vision</p>
        <p className="text-gray-700">Our vision is to provide affordable and durable real estate housing for individuals and retirees.</p>
      </div>
    </div>
    <div className="md:w-1/2 flex justify-center md:pl-32">
      <video controls className="w-full h-auto max-w-full rounded-lg">
        <source src={videoFile} type="video/mp4" />
      </video>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="py-10 bg-gray-100 text-left">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={recycleImage} alt="Service 1" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Hydraform Seaweed-Interlock Bricks</h3>
                <p className="text-gray-700 mt-2">This involves a rigorous combination of seaweed ashes, cement and clay to manufacture bricks for building construction.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={serviceImage2} alt="Service 2" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Consultation Services</h3>
                <p className="text-gray-700 mt-2">We believe strongly in sharing our expertise on how to manufacture your own bricks and are bent on giving expert advice accordingly.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={serviceImage3} alt="Service 3" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Free Strategic Management Sessions</h3>
                <p className="text-gray-700 mt-2">The perfect outcome of your building project is our concern, and so we carefully strategize before commencing any given project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-10 text-left">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img src={aboutUsImage} alt="About Us" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="ml-4 space-y-8">
                <p className="text-gray-700 font-semibold leading-relaxed py-2">
                  We are dedicated to providing the best service in the industry. Our team of experts is here to help you with any questions or concerns you may have. We believe in building strong relationships with our clients and providing top-notch customer service.
                </p>
                <p className="text-gray-700 font-semibold leading-relaxed py-2">
                  Our wide range of products and services are delivered with a touch of professionalism and to your satisfaction; and our extraordinary team, always on standby, eager to deliver nothing short of the best to our valuable clientele.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-10 bg-gray-100 text-left">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
          <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage1} alt="Blog Post 4" className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Brick Production </h3>
                <p className="text-gray-700 mt-2">Getting the bricks ready for construction</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage2} alt="Blog Post 2" className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Finished Product</h3>
                <p className="text-gray-700 mt-2">Construction Site.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage3} alt="Blog Post 3" className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Construction Site</h3>
                <p className="text-gray-700 mt-2">Completed Project.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage4} alt="Blog Post 1" className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Brick manufacturer at work</h3>
                <p className="text-gray-700 mt-2">Building project prelims.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage5} alt="Blog Post 2" className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Completed Project</h3>
                <p className="text-gray-700 mt-2">Construction Site.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage6} alt="Blog Post 3" className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">The Team</h3>
                <p className="text-gray-700 mt-2">Meet the exceptional Project Management team.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage7} alt="Blog Post 4" className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Design Model Template 1</h3>
                <p className="text-gray-700 mt-2">Client's structural prototype.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage8} alt="Blog Post 2" className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Construction in Progress</h3>
                <p className="text-gray-700 mt-2">Framework and more.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage9} alt="Blog Post 3" className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Design Model Template 2</h3>
                <p className="text-gray-700 mt-2">Client's construction blueprint.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-10 text-left">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700 font-semibold">This is an awesome product! I recommend it to anyone looking for durability.</p>
                <div className="flex items-center mt-4">
                  <img src={testimonialImage1} alt="Customer 1" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h4 className="text-red-700 font-semibold">Reggie Reynolds</h4>
                    <p className="text-gray-700">CEO, Reggie Homes, Obuasi</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700 font-semibold">Fantastic service and great product. I will definitely be a repeat customer.</p>
                <div className="flex items-center mt-4">
                  <img src={testimonialImage2} alt="Customer 2" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h4 className="text-red-700 font-semibold">Diane Hampton</h4>
                    <p className="text-gray-700">Facilities Manager, Takoradi</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700 font-semibold">Excellent quality and customer service. Highly recommend to everyone!</p>
                <div className="flex items-center mt-4">
                  <img src={testimonialImage3} alt="Customer 3" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h4 className="text-red-700 font-semibold">Henry Akwaboah</h4>
                    <p className="text-gray-700">Founder, Polaris Estates, Accra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Contact Us Section */}
      <section id="contact" className="py-10 bg-gray-100 text-left">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                      id="message"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                      rows="4"
                      placeholder="Enter your message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-red-700 text-white rounded-lg px-4 py-2 hover:bg-yellow-600"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-20">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Contact Information</h3>
                <p className="text-gray-700">Feel free to get in touch with us through any of the methods below:</p>
                <div className="mt-4">
                  <p className="flex items-center space-x-2">
                    <FaPhoneAlt />
                    <span>(233) - 545061734 / 542877882 </span>
                  </p>
                  <p className="flex items-center space-x-2 mt-2">
                    <FaMapMarkerAlt />
                    <span>1234 Ghana, West Africa</span>
                  </p>
                  <p className="flex items-center space-x-2 mt-2">
                    <FaClock />
                    <span>Open 24/7</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
