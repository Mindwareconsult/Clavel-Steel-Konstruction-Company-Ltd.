import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag, 
  BookOpen, 
  UserCheck
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blog';
import SEO from '../components/common/SEO';

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const allTags = ['All', 'Structural Steel', 'Warehouse Construction', 'Canopy Fabrication', 'Welding Academy', 'Corrosion Control'];

  const filteredPosts = selectedTag === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.tags.some(t => t.toLowerCase().includes(selectedTag.toLowerCase())));

  const breadcrumbs = [
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <div className="bg-[#032C16] text-white">
      <SEO 
        title="Technical Engineering & Steel Construction Blog | Awka, Nigeria"
        description="Authoritative technical guides on structural steel fabrication, warehouse framing, fuel station canopies, SMAW/GTAW welding, and corrosion prevention in Anambra State."
        canonicalPath="/blog"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Header */}
      <section className="relative bg-[#000C00] py-16 md:py-24 border-b border-[#2DA447]/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-industrial opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-tech text-[#D5DD27] uppercase tracking-wider font-semibold">
              <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              <span>/</span>
              <span>Blog</span>
            </div>
            
            <div className="inline-block px-2.5 py-1 bg-white/5 border border-white/10 text-xs font-tech text-[#D5DD27] uppercase tracking-wider font-semibold">
              Technical Insights & Engineering Guides
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold uppercase text-white leading-tight">
              Steel Construction & <br />
              <span className="text-[#2DA447]">Fabrication Knowledge</span> Base
            </h1>

            <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
              In-depth articles from our engineering team covering structural standards, warehouse portal frames, forecourt canopy safety, welding metallurgy, and tropical steel preservation in Anambra State.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="bg-[#000C00] border-b border-white/10 sticky top-[73px] z-20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto gap-2">
          <div className="flex items-center space-x-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 text-xs font-tech uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap cursor-pointer ${
                  selectedTag === tag 
                    ? 'bg-[#228940] text-white font-bold' 
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <span className="text-xs font-tech text-gray-400 hidden sm:block">
            {filteredPosts.length} Technical Articles
          </span>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-[#032C16] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#000C00] border border-white/10 hover:border-[#2DA447] rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-2xl"
              >
                <div className="relative aspect-16/9 overflow-hidden bg-black">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 border border-[#2DA447] text-[10px] font-tech text-[#D5DD27] uppercase font-bold">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-tech text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#2DA447]" /> {post.publishedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#D5DD27]" /> {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl uppercase font-bold text-white group-hover:text-[#D5DD27] transition-colors leading-snug">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-300 mt-3 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {post.tags.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-white/5 text-[10px] font-tech text-gray-400 border border-white/5">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5 text-[#2DA447]" /> {post.author}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-xs font-tech text-[#D5DD27] hover:underline font-bold uppercase flex items-center gap-1"
                    >
                      Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
