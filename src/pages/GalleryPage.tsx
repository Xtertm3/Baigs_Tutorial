const galleryItems = [
  { title: 'Interactive Session', image: '/images/gallery-1.jpg' },
  { title: 'Mentorship Moment', image: '/images/gallery-2.jpg' },
  { title: 'Focused Learning', image: '/images/gallery-3.jpg' },
  { title: 'Group Study', image: '/images/gallery-4.jpg' },
  { title: 'Topper Celebration', image: '/images/gallery-5.jpg' },
  { title: 'Academic Workshop', image: '/images/gallery-6.jpg' },
]

function GalleryPage() {
  return (
    <section className="section reveal">
      <div className="container">
        <p className="tag">Gallery</p>
        <h2>Campus Life & Learning Moments</h2>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <figure className="gallery-item" key={item.title}>
              <img src={item.image} alt={item.title} />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GalleryPage
