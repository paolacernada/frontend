import React from "react";
import ImageGallery from "react-image-gallery";

const myPhotos = [
    {
      original: "images/the-book-barn-app-prototype.jpg",
      thumbnail: "images/the-book-barn-app-prototype.jpg",
      description: `The Book Barn App Prototype`,
      originalHeight: "450px",
    },
    {
        original: "images/the-book-barn-app-prototype-homepage.jpg",
        thumbnail: "images/the-book-barn-app-prototype-homepage.jpg",
        description: `The Book Barn App - Home`,
        originalHeight: "450px",
      },
    {
        original: "images/the-book-barn-app-prototype-my-books.jpg",
        thumbnail: "images/the-book-barn-app-prototype-my-books.jpg",
        description: `The Book Barn App - My Books`,
        originalHeight: "450px",
    },
    {
        original: "images/the-book-barn-app-prototype-rate-books.jpg",
        thumbnail: "images/the-book-barn-app-prototype-rate-books.jpg",
        description: `The Book Barn App - Rate Books`,
        originalHeight: "450px",
    },
    {
        original: "images/the-book-barn-app-prototype-settings.jpg",
        thumbnail: "images/the-book-barn-app-prototype-settings.jpg",
        description: `The Book Barn App - Settings`,
        originalHeight: "450px",
    },
    {
        original: "images/the-book-barn-app-prototype-my-profile.jpg",
        thumbnail: "images/the-book-barn-app-prototype-my-profile.jpg",
        description: `The Book Barn App - Profile`,
        originalHeight: "450px",
    },
    {
        original: "images/virtual-reality-UI.jpg",
        thumbnail: "images/virtual-reality-UI.jpg",
        description: `Virtual Reality UI`,
        originalHeight: "450px",
    },
    {
        original: "images/augmented-reality-UI.jpg",
        thumbnail: "images/augmented-reality-UI.jpg",
        description: `Augmented Reality UI`,
        originalHeight: "450px",
    }

    ]

function GalleryPage() {
  return (

    <>
        <h2>Gallery</h2>

        <p>Projects I have completed.</p>

        <article>
            <ImageGallery items={myPhotos} />
        </article>
    </>
  );
}

export default GalleryPage;