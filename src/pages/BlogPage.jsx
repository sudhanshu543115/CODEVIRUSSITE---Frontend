import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCalendar, HiChat, HiArrowRight, HiShieldCheck, HiUser, HiTag } from 'react-icons/hi';
import blogBgImage from '../assets/images/blog/blog-1.jpg';
import blogFilterBg from '../assets/images/blog/blog-2.jpg';
import blogContentBg from '../assets/images/blog/blog-3.jpg';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

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
            author: "Sarah Johnson",
            comments: 12,
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            excerpt: "Exploring the latest trends and technologies shaping the future of cybersecurity operations centers, including AI integration, automation, and advanced threat detection.",
            category: "Cybersecurity",
            readTime: "8 min read",
            tags: ["AI", "Automation", "SOC", "Trends"]
          },
          {
            id: 2,
            title: "Building An Effective Cyber Security Operations Center",
            date: "Feb 26, 2025",
            author: "Michael Chen",
            comments: 8,
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            excerpt: "A comprehensive guide to building and maintaining an effective cybersecurity operations center, covering staffing, technology, and best practices.",
            category: "Operations",
            readTime: "12 min read",
            tags: ["SOC", "Best Practices", "Implementation", "Staffing"]
          },
          {
            id: 3,
            title: "Emerging Technologies In Cyber Security Operations",
            date: "Feb 28, 2025",
            author: "Dr. Emily Rodriguez",
            comments: 15,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            excerpt: "Discover the cutting-edge technologies revolutionizing cybersecurity operations and threat detection, from machine learning to quantum computing.",
            category: "Technology",
            readTime: "10 min read",
            tags: ["Machine Learning", "Quantum Computing", "Innovation", "Technology"]
          },
          {
            id: 4,
            title: "The Role of AI in Modern Cybersecurity",
            date: "Mar 1, 2025",
            author: "Alex Thompson",
            comments: 6,
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            excerpt: "How artificial intelligence is transforming cybersecurity operations and enabling more proactive threat detection and response.",
            category: "AI",
            readTime: "9 min read",
            tags: ["Artificial Intelligence", "Machine Learning", "Automation", "Threat Detection"]
          },
          {
            id: 5,
            title: "Compliance and Regulatory Requirements in Cybersecurity",
            date: "Mar 3, 2025",
            author: "Lisa Wang",
            comments: 4,
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            excerpt: "Understanding the complex landscape of cybersecurity compliance and regulatory requirements across different industries.",
            category: "Compliance",
            readTime: "11 min read",
            tags: ["Compliance", "Regulations", "GDPR", "Industry Standards"]
          },
          {
            id: 6,
            title: "Incident Response Best Practices for 2025",
            date: "Mar 5, 2025",
            author: "David Kim",
            comments: 9,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            excerpt: "Updated best practices for incident response in 2025, including new methodologies and tools for effective threat management.",
            category: "Incident Response",
            readTime: "7 min read",
            tags: ["Incident Response", "Best Practices", "Threat Management", "Methodology"]
          }
        ]);
      });
  }, []);

  // Only create categories when blogPosts are loaded
  const categories = blogPosts.length > 0 ? ['all', ...new Set(blogPosts.map(post => post.category))] : ['all'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
               style={{
                 backgroundImage: `url(${blogBgImage})`
               }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <HiShieldCheck className="w-4 h-4 mr-2" />
              LATEST POSTS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Latest News & Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and best practices in cybersecurity 
              from our team of experts and industry leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-8 bg-cover bg-center bg-no-repeat border-t" 
               style={{
                 backgroundImage: ``
               }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-16 bg-cover bg-center bg-no-repeat " 
               style={{
                 backgroundImage: ` url(${blogContentBg})`
               }}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50, scale: 0.95, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  rotateX: 2,
                  transition: { duration: 0.3 }
                }}
                className="group bg-blue-950 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/70 text-white text-sm font-medium rounded-full">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-white mb-4">
                    <HiCalendar className="w-4 h-4 mr-2" />
                    {post.date}
                    <HiUser className="w-4 h-4 ml-4 mr-2" />
                    {post.author}
                    <HiChat className="w-4 h-4 ml-4 mr-2" />
                    {post.comments} Comments
                  </div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-white mb-4 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2"
                    whileHover={{ scale: 1.02, x: 3 }}
                  >
                    {post.title}
                  </motion.h3>
                  
                  <p className="text-white mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                                     {/* Tags */}
                   <div className="mb-6">
                     <div className="flex flex-wrap gap-2">
                       {post.tags && post.tags.map((tag, idx) => (
                         <motion.span 
                           key={idx} 
                           className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center"
                           initial={{ opacity: 0, scale: 0.8 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           transition={{ delay: idx * 0.1 }}
                           whileHover={{ scale: 1.1, backgroundColor: "#e0e7ff" }}
                         >
                           <HiTag className="w-3 h-3 mr-1" />
                           {tag}
                         </motion.span>
                       ))}
                     </div>
                   </div>
                  
                  <motion.div 
                    className="flex items-center text-primary-600 font-semibold"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    Read More
                    <motion.div
                      whileHover={{ x: 4, scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <button className="btn-primary text-lg px-8 py-4">
              Load More Posts
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated with Cybersecurity Insights
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Subscribe to our newsletter to receive the latest cybersecurity news, 
              expert insights, and industry updates directly in your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                />
                <button className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
