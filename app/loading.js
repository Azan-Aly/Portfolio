export default function Loading() {
    return (
        <div className="flex flex-col h-screen w-full items-center justify-center bg-white dark:bg-[#11001F] transition-colors duration-300">
            <div className="relative flex items-center justify-center w-20 h-20 mb-8">
                {/* Outer subtle ring */}
                <div className="absolute inset-0 rounded-full border-[2px] border-slate-100 dark:border-white/5"></div>
                
                {/* Spinning gradient ring */}
                <div className="absolute inset-0 rounded-full border-[2px] border-transparent border-t-fuchsia-600 border-r-violet-600 animate-spin" style={{ animationDuration: '1.2s' }}></div>
                
                {/* Inner reverse spinning ring */}
                <div className="absolute inset-3 rounded-full border-[2px] border-transparent border-b-pink-500 border-l-fuchsia-400 animate-spin" style={{ animationDuration: '0.8s', animationDirection: 'reverse' }}></div>
                
                {/* Center glowing core */}
                <div className="absolute w-2 h-2 rounded-full bg-fuchsia-500 animate-ping opacity-75"></div>
                <div className="absolute w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_10px_2px_rgba(217,70,239,0.6)]"></div>
            </div>
            
            {/* Elegant text */}
            <div className="font-Ovo flex items-center gap-1 text-slate-800 dark:text-white text-xl tracking-[0.15em] font-medium">
                Azan<span className="text-fuchsia-600 font-bold animate-pulse">.</span>
            </div>
        </div>
    );
}