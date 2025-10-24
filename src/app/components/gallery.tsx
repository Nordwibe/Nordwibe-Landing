import { GalleryItem } from "./gallery/item";

export function GallerySection() {
  const images = [
    {
      src: "/collection/уют.jpg",
      alt: "Уют",
      text: "Nordwibe - это уют",
      index: 1,
    },
    {
      src: "/collection/комфорт.jpg",
      alt: "Комфорт",
      text: "Nordwibe - это комфорт",
      index: 2,
    },
    {
      src: "/collection/друзья.jpg",
      alt: "Друзья",
      text: "Nordwibe - это друзья",
      index: 3,
    },
    {
      src: "/collection/выгода.jpg",
      alt: "Выгода",
      text: "Nordwibe - это выгода",
      index: 4,
    },
    {
      src: "/collection/безопасность.jpg",
      alt: "Безопасность",
      text: "Nordwibe - это безопасность",
      index: 5,
    },
    {
      src: "/collection/qr.png",
      alt: "Доверие",
      text: "Nordwibe - это доступен в RuStore",
      index: 6,
      isQR: true,
    },
    {
      src: "/collection/fixed-img.jpg",
      alt: "Как хочешь ты",
      text: "Nordwibe - это твой выбор",
      index: 7,
    },
    {
      src: "/collection/Независимость.jpg",
      alt: "Независимость",
      text: "Nordwibe - это независимость",
      index: 8,
    },
    {
      src: "/collection/удобство.jpg",
      alt: "Удобство",
      text: "Nordwibe - это удобство",
      index: 9,
    },
  ];

  return (
    <section
      className="py-8 md:py-20 px-4"
      style={{ backgroundColor: "#5755C4" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-1 md:gap-4">
          {images.map((image) => (
            <GalleryItem
              key={image.index}
              src={image.src}
              alt={image.alt}
              text={image.text}
              isQR={image.isQR}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
