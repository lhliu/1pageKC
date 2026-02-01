import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl opacity-30" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium tracking-wide backdrop-blur-sm">
                    理性數據・真實場景・深度決策
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                    <span className="block text-slate-900 mb-3 text-2xl md:text-4xl lg:text-5xl font-medium">實地走訪新興重劃區，了解最真實的現場環境</span>
                    <span className="block text-blue-600 mt-2">
                        以理性引導看房決策
                    </span>
                </h1>

                <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                    房地產是一種理財形式，也是生活與品位。<br className="hidden md:block" />
                    不需要浮誇話術，KC提供的是真實，符合中產階級需求的分享。
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="rounded-full text-lg px-8 py-6 shadow-blue-900/10 shadow-lg bg-blue-600 hover:bg-blue-700 text-white" onClick={() => document.getElementById('cooperation')?.scrollIntoView({ behavior: 'smooth' })}>
                        洽詢合作
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 border-slate-200 hover:bg-slate-50" onClick={() => document.getElementById('positioning')?.scrollIntoView({ behavior: 'smooth' })}>
                        了解更多
                    </Button>
                </div>
            </div>
        </section>
    );
}
