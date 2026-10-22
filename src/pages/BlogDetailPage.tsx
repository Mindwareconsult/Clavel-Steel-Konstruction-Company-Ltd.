import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  UserCheck, 
  ArrowRight,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blog';
import { COMPANY_INFO } from '../data/company';
import SEO from '../components/common/SEO';

interface BlogDetailPageProps {
  onOpenQuoteModal: () => void;
}

export default function BlogDetailPage({ onOpenQuoteModal }: BlogDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();

  const post = BLOG_POSTS.find(p => p.slug === slug || p.id === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2);
  const primaryPhone = COMPANY_INFO.phones[0];

  const breadcrumbs = [
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` }
  ];

  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': post.title,
    'description': post.excerpt,
    'image': post.coverImage,
    'datePublished': post.publishedDate,
    'author': {
      '@type': 'Organization',
      'name': `${COMPANY_INFO.name} - ${post.authorRole}`,
      'url': typeof window !== 'undefined' ? window.location.origin : ''
    },
    'publisher': {
      '@type': 'Organization',
      'name': COMPANY_INFO.name,
      'logo': {
        '@type': 'ImageObject',
        'url': typeof window !== 'undefined' ? `${window.location.origin}/assets/aistudio/LOGO_62a2f7fc.jpg` : ''
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': typeof window !== 'undefined' ? window.location.href : ''
    }
  };

  return (
    <div className="bg-[#032C16] text-white">
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
        ogType="article"
        schema={articleSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Article Header */}
      <section className="relative bg-[#000C00] py-16 md:py-20 border-b border-[#2DA447]/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-industrial opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-tech text-[#D5DD27] uppercase tracking-wider font-semibold">
            <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link>
            <span>/</span>
            <span className="text-white">Technical Guide</span>
          </div>

          <div className="inline-block px-2.5 py-1 bg-white/5 border border-white/10 text-xs font-tech text-[#D5DD27] uppercase tracking-wider font-semibold">
            Category: {post.category}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold uppercase text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-tech text-gray-400">
            <span className="flex items-center gap-1.5 text-white">
              <UserCheck className="w-4 h-4 text-[#2DA447]" /> {post.author} ({post.authorRole})
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#D5DD27]" /> {post.publishedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#2DA447]" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Main Body */}
      <section className="py-16 bg-[#032C16] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Cover Image */}
          <div className="rounded-sm overflow-hidden border-2 border-[#2DA447]/50 shadow-2xl mb-12 bg-black">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-auto max-h-[480px] object-cover"
            />
          </div>

          {/* Formatted Article Content */}
          <div className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
            {post.content.split('\n\n').map((paragraph, idx) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('### ')) {
                return (
                  <h2 key={idx} className="text-2xl sm:text-3xl font-heading font-bold uppercase text-white pt-6 pb-2 border-b border-white/10">
                    {trimmed.replace('### ', '')}
                  </h2>
                );
              }
              if (trimmed.startsWith('#### ')) {
                return (
                  <h3 key={idx} className="text-xl font-heading font-bold uppercase text-[#D5DD27] pt-4">
                    {trimmed.replace('#### ', '')}
                  </h3>
                );
              }
              if (trimmed.startsWith('---')) {
                return <hr key={idx} className="border-white/10 my-8" />;
              }
              if (trimmed.includes('|')) {
                // Render Table
                const lines = trimmed.split('\n').filter(l => l.trim().length > 0);
                return (
                  <div key={idx} className="overflow-x-auto my-6">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse border border-white/20">
                      <tbody>
                        {lines.map((line, lIdx) => {
                          if (line.includes('---')) return null;
                          const cells = line.split('|').filter(c => c.trim().length > 0);
                          const isHeader = lIdx === 0;
                          return (
                            <tr key={lIdx} className={isHeader ? 'bg-[#000C00] font-tech text-[#D5DD27]' : 'bg-[#032C16] border-t border-white/10'}>
                              {cells.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3 border border-white/10">
                                  {cell.trim()}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              }
              if (trimmed.startsWith('- ')) {
                const listItems = trimmed.split('\n');
                return (
                  <ul key={idx} className="space-y-2 pl-4 list-disc marker:text-[#2DA447]">
                    {listItems.map((item, iIdx) => (
                      <li key={iIdx}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Article Footer & Author Info */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#000C00] p-6 rounded-sm border border-white/10">
            <div>
              <span className="text-[10px] font-tech uppercase text-[#D5DD27] font-semibold block">
                Published By
              </span>
              <h4 className="font-heading text-xl uppercase font-bold text-white mt-0.5">
                {COMPANY_INFO.name} Technical Desk
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                Engineering, fabrication, and welding advisory based in Awka, Anambra State.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-2.5 bg-[#D5DD27] hover:bg-[#e0e932] text-black font-tech font-bold uppercase tracking-wider text-xs transition-colors rounded-sm cursor-pointer whitespace-nowrap"
              >
                Inquire With Engineers
              </button>
            </div>
          </div>

          {/* Related Articles Strip */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 space-y-6">
              <h3 className="font-heading text-2xl uppercase font-bold text-white border-l-2 border-[#2DA447] pl-3">
                Further Technical Reading
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/blog/${rel.slug}`}
                    className="p-5 bg-[#000C00] border border-white/10 hover:border-[#2DA447] rounded-sm transition-all group block"
                  >
                    <span className="text-[10px] font-tech text-[#D5DD27] uppercase block">{rel.category}</span>
                    <h4 className="font-heading text-lg uppercase font-bold text-white group-hover:text-[#D5DD27] mt-1 line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-2 line-clamp-2">{rel.excerpt}</p>
                    <span className="text-xs font-tech text-[#2DA447] font-bold uppercase flex items-center gap-1 mt-4">
                      Read Guide <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
