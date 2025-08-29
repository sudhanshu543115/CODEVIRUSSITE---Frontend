import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCalendar, HiChat, HiArrowRight } from 'react-icons/hi';
import herobg from "../assets/images/blog/b-details.jpg";
const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from API
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => setBlogPosts(data))
      .catch(err => {
        console.error('Error fetching blog posts:', err);
        // Fallback data
        setBlogPosts([
          {
            id: 1,
            title: "Future Trends In Cyber Security Operations Centers",
            date: "Feb 25, 2025",
            comments: 1,
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            excerpt: "Exploring the latest trends and technologies shaping the future of cybersecurity operations centers.",
            category: "Cybersecurity"
          },
          {
            id: 2,
            title: "Building An Effective Cyber Security Operations Center",
            date: "Feb 26, 2025",
            comments: 2,
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            excerpt: "A comprehensive guide to building and maintaining an effective cybersecurity operations center.",
            category: "Operations"
          },
          {
            id: 3,
            title: "Emerging Technologies In Cyber Security Operations",
            date: "Feb 28, 2025",
            comments: 3,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            excerpt: "Discover the cutting-edge technologies revolutionizing cybersecurity operations and threat detection.",
            category: "Technology"
          }
        ]);
      });
  }, []);

  return (
    <section id="blog" className=" bg-gray-50">
      <div className="container-custom" style={{
        backgroundImage: `url('${herobg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            LATEST POST
          </div>
          <div className="max-w-4xl mx-auto text-center 
                bg-white/10 backdrop-blur-md 
                rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Latest News & Blog
            </h2>
            <p className="text-lg text-gray-200">
              Stay updated with the latest insights, trends, and best practices in cybersecurity
              from our team of experts and industry leaders.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <HiCalendar className="w-4 h-4 mr-2" />
                  {post.date}
                  <HiChat className="w-4 h-4 ml-4 mr-2" />
                  {post.comments} Comments
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Read More
                  <HiArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="btn-primary text-lg px-8 py-4 m-5">
            View All Posts
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

