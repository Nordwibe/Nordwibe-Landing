export function Footer() {
  return (
    <footer className="bg-white border-t border-purple-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - Logo, Email, Social */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Logo and Email */}
          <div className="mb-4 md:mb-0">
            <div className="text-purple-800 text-2xl font-bold mb-2">nordwibe</div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="mailto:help@nordwibe.com" className="text-gray-600 underline hover:text-purple-600 transition-colors">
                help@nordwibe.com
              </a>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex gap-3">
            {/* Telegram */}
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.198 3.148L2.75 10.2C1.6 10.65 1.6 11.4 2.4 11.7L6.6 13.2L18.2 6.4C18.6 6.1 18.9 6.3 18.6 6.6L8.8 15.6H8.8L8.8 15.6L8.4 19.8C8.8 19.8 9 19.4 9.2 19.2L11.2 17.2L15.4 20.6C16.2 21.1 16.8 20.8 17 19.8L21.8 5.1C22.1 3.9 21.4 3.3 20.2 3.1L21.198 3.148Z" fill="white"/>
              </svg>
            </div>

            
            {/* YouTube */}
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.4981 4.80824 21.0707 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.42C2.92931 4.55318 2.5019 4.80824 2.1613 5.15941C1.8207 5.51057 1.5788 5.94541 1.46 6.42C1 8.14 1 12 1 12C1 12 1 15.86 1.46 17.58C1.5788 18.0546 1.8207 18.4894 2.1613 18.8406C2.5019 19.1918 2.92931 19.4468 3.4 19.58C5.12 20 12 20 12 20C12 20 18.88 20 20.6 19.58C21.0707 19.4468 21.4981 19.1918 21.8387 18.8406C22.1793 18.4894 22.4212 18.0546 22.54 17.58C23 15.86 23 12 23 12C23 12 23 8.14 22.54 6.42ZM10 15.5V8.5L15 12L10 15.5Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-600 text-sm">
            © 2025 Nordwibe
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-gray-600 text-sm hover:text-purple-600 transition-colors">
              Пользовательское соглашение
            </a>
            <a href="#" className="text-gray-600 text-sm hover:text-purple-600 transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
