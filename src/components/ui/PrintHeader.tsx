import logo from '../../assets/header_icon.png';
import avatar from '../../assets/avatar.png';

export function PrintHeader() {
    return (
        <div className="fixed top-8 left-8 z-[100] hidden print:flex items-center gap-3">
            <img
                src={logo}
                className="w-10 h-10 object-contain"
                alt="Logo"
                onError={(e) => {
                    // Fallback to avatar if logo missing
                    e.currentTarget.src = avatar;
                }}
            />
            <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-lg leading-none">持家男子 KC</span>
                <span className="text-blue-600 text-xs font-medium tracking-wider">REAL ESTATE & LIFE</span>
            </div>
        </div>
    );
}
