import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

type MarqueeItem = {
  index: string;
  title: string;
  image: string;
  alt: string;
};

const marqueeItemsRow1: MarqueeItem[] = [
  {
    index: '01',
    title: 'AI CODE VULNERABILITY DETECTOR',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=900&q=85',
    alt: 'Code editor on a laptop screen'
  },
  {
    index: '02',
    title: 'REPOBRAIN',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85',
    alt: 'Server racks in a data center'
  },
  {
    index: '03',
    title: 'NEXORA',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',
    alt: 'Circuit board macro photograph'
  },
  {
    index: '04',
    title: 'MACHINE LEARNING',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=85',
    alt: 'Abstract artificial intelligence visualization'
  },
  {
    index: '05',
    title: 'DEEP LEARNING',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=85',
    alt: 'Mathematical formulas on a dark board'
  },
  {
    index: '06',
    title: 'LLMs',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85',
    alt: 'Abstract generative AI illustration'
  }
];

const marqueeItemsRow2: MarqueeItem[] = [
  {
    index: '07',
    title: 'RAG',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
    alt: 'Analytics dashboard with colorful charts'
  },
  {
    index: '08',
    title: 'AI AGENTS',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=85',
    alt: 'Small robotic machine on a desk'
  },
  {
    index: '09',
    title: 'AI SYSTEMS',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85',
    alt: 'Earth viewed from orbit with network lights'
  },
  {
    index: '10',
    title: 'RESEARCH',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85',
    alt: 'Researcher working in a science laboratory'
  },
  {
    index: '11',
    title: 'PYTORCH',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85',
    alt: 'Programming code on a monitor'
  },
  {
    index: '12',
    title: 'ML EXPERIMENTS',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=85',
    alt: 'Robotic arm in a technology laboratory'
  }
];

function ImageTile({ item }: { item: MarqueeItem; key?: string }) {
  return (
    <article className="group relative h-[210px] w-[300px] shrink-0 overflow-hidden rounded-3xl border-gradient bg-[#111] md:h-[300px] md:w-[450px]">
      <img
        src={item.image}
        alt={item.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover grayscale opacity-70 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-90"
        style={{ willChange: 'transform' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
        <h3 className="max-w-[82%] text-lg font-light uppercase tracking-[0.16em] text-white md:text-2xl">
          {item.title}
        </h3>
        <span className="text-xs tracking-[0.2em] text-[#BBCCD7]">{item.index}</span>
      </div>
    </article>
  );
}

export default function Marquee() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <section ref={containerRef} className="w-full py-24 overflow-hidden bg-[#0C0C0C] flex flex-col gap-6 md:gap-10 relative">
      <div className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_100px_50px_#0C0C0C]" />
      
      {/* Abstract large background text */}
      <div className='absolute bottom-1/4 w-full left-0 opacity-5 overflow-hidden pointer-events-none'>
        <div className='flex gap-8 text-[8vw] font-black whitespace-nowrap tracking-tighter text-[#BBCCD7]'>
          <span>MACHINE LEARNING</span> 
          <span>PYTORCH</span> 
          <span>DEEP LEARNING</span> 
          <span>RAG</span> 
          <span>AI AGENTS</span> 
          <span>NEURAL ARCHITECTURE</span>
        </div>
      </div>

      <motion.div
        style={{ x: x1, willChange: 'transform' }}
        className="flex w-fit gap-6 pl-[10vw] [will-change:transform] md:gap-10"
      >
        {[...marqueeItemsRow1, ...marqueeItemsRow1].map((item, i) => (
          <ImageTile key={`${item.index}-${i}`} item={item} />
        ))}
      </motion.div>

      <motion.div
        style={{ x: x2, willChange: 'transform' }}
        className="flex w-fit gap-6 pr-[10vw] [will-change:transform] md:gap-10"
      >
        {[...marqueeItemsRow2, ...marqueeItemsRow2].map((item, i) => (
          <ImageTile key={`${item.index}-${i}`} item={item} />
        ))}
      </motion.div>
    </section>
  );
}
