import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

import avatar from '../../assets/avatar.png';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: '頻道定位', href: '#positioning' },
        { name: '受眾分析', href: '#audience' },
        { name: '實際案例', href: '#cases' },
        { name: '合作方案', href: '#cooperation' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <img src={avatar} alt="KC Avatar" className="h-10 w-10 rounded-full border border-amber-500/30" />
                        <span className="text-xl font-bold text-blue-600">
                            持家男子 KC
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <Button size="sm" className="ml-4" onClick={() => window.location.href = 'mailto:kch0263@outlook.com'}>
                                立即聯繫
                            </Button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-slate-200 shadow-xl">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-slate-600 hover:text-slate-900 hover:bg-slate-50 block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <Button className="w-full mt-4" onClick={() => window.location.href = 'mailto:kch0263@outlook.com'}>立即聯繫</Button>
                </div>
            </div>
        </nav>
    );
}
