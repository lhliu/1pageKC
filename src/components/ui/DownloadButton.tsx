import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

export function DownloadButton() {
    return (
        <motion.a
            href="/kc-presentation.pdf"
            download="KC_RealEstate_Profile.pdf"
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-900/20 transition-all duration-300 print:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Download className="w-5 h-5" />
            <span className="font-medium">下載簡報 (PDF)</span>
        </motion.a>
    );
}
