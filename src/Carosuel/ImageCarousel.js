import "./style.css"

export default function ImageCarousel({ active, image }) {
    return (
      <div>
          <img
            key={image.src}
            alt={image.alt}
            width="100%"
            {...(active && {src: image.src})}
            className= {active ? "show": "hide"}
            />
      </div>
    );
  }
  