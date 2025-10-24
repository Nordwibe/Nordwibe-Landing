export function ActionButtonsSection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#5755C4" }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <a
            href="https://nordwibe.com"
            className="bg-white text-purple-800 px-8 text-center py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors w-full"
          >
            Перейти в Nordwibe
          </a>
        </div>
      </div>
    </section>
  );
}
