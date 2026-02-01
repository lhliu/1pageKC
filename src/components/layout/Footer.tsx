import { Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div>
                        <h3 className="text-2xl font-bold text-blue-600 mb-4">
                            持家男子 KC
                        </h3>
                        <p className="text-slate-600 mb-6 max-w-md">
                            理性引導家庭決策，用數據解讀居住價值。您在房地產與精緻生活領域最強大的商業夥伴。
                        </p>
                        <div className="flex items-center space-x-2 text-slate-500 hover:text-blue-600 transition-colors">
                            <Mail className="h-5 w-5" />
                            <a href="mailto:kch0263@outlook.com">kch0263@outlook.com</a>
                        </div>
                    </div>

                    <div className="text-sm text-gray-500 space-y-4">
                        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                            <h4 className="font-semibold text-slate-800 mb-2">數據說明</h4>
                            <p>
                                本報告數據採計期間為 2025 年 1 月至 2026 年 1 月。
                                過去一年月均觀眾穩定維持於 15.1萬人，流量正處於強勁上升期，
                                是品牌切入房產與生活風格市場的最佳合作節點。
                            </p>
                        </div>
                        <p className="pt-4">
                            © {new Date().getFullYear()} 持家男子 KC. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
