import { capabilities } from '../../data/profile';

export default function Capabilities() {
  return (
    <section className="relative w-full bg-white text-black rounded-t-[3rem] md:rounded-t-[4rem] px-6 md:px-12 py-24 md:py-40 mt-[-2rem] z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* Left Column - Heading */}
        <div className="w-full md:w-1/3 shrink-0">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight uppercase sticky top-32">
            Capabilities
          </h2>
        </div>

        {/* Right Column - Items */}
        <div className="w-full md:w-2/3 flex flex-col">
          {capabilities.map((item, i) => (
            <div 
              key={i} 
              className="w-full flex flex-col md:flex-row items-start md:items-baseline gap-4 md:gap-12 py-10 md:py-16 border-t border-black/10 group hover:border-black/30 transition-colors first:border-t-0 md:first:pt-0"
            >
              <span className="text-lg md:text-xl font-light text-black/30 w-12 shrink-0">
                {(i + 1).toString().padStart(2, '0')}
              </span>
              
              <div className="flex flex-col gap-4 max-w-xl">
                <h3 className="text-2xl md:text-4xl font-medium uppercase tracking-wide group-hover:tracking-widest transition-all duration-500">
                  {item.title}
                </h3>
                <p className="text-lg md:text-xl text-black/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
