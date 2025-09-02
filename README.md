# Art Portfolio Frontend

This project serves as a portfolio site for artist and graphic designer *Vojtech Novak*. It is intended to be a first point of contact for prospective customers and followers alike. The portfolio showcases artist’s digital art, paintings and animation. Visual design of the site is aligned with the artist’s overall style and is set to evoke an eerie atmosphere.

## Features

- **Artwork Gallery:** Browse digital graphics, paintings, and animations, each with detailed descriptions and metadata.
- **Animation Showcase:** View embedded video animations directly within the site.
- **CMS Integration:** Artwork data is fetched from a Strapi CMS for easy updates and management.
- **Contact Form:** Visitors can reach out via a secure, integrated contact form.
- **Responsive Design:** Optimized for desktop and mobile devices using Tailwind CSS.
- **Custom Routing:** Deep linking for individual artworks and categories using React Router.
- **Thematic Styling:** Visuals and colors reflect the artist’s unique style.

## Project Structure

```
public/
  portfolio/
    animate/    # Animation artwork data & assets
    graphic/    # Graphic artwork data & assets
    paint/      # Painting artwork data & assets
src/
  components/   # Reusable UI components (gallery items, sidebar, banner, etc.)
  hooks/        # Custom React hooks for fetching artwork data
  pages/        # Main pages (Home, About, Portfolio, Contact, etc.)
  services/     # API and data fetching utilities
  assets/       # Static images and video assets
```

## 🖼️ Artwork Data

Artwork metadata is stored in JSON files under `public/portfolio/{category}/index.json`. Each entry includes fields like `name`, `year`, `technique`, `description`, `image`, and (for animations) `videoURL`.

Example:
```json
{
  "id": 1,
  "name": "Abstract Landscape",
  "year": 2023,
  "technique": "Digital Painting",
  "description": "...",
  "image": "graphic/cock_spray.png",
  "slug": "abstract_landscape"
}
```

## 🛠️ Technologies Used

- **React**: UI library for building interactive interfaces
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Vite**: Fast development/build tool
- **Strapi CMS**: Backend for managing artwork data
- **Axios & Fetch**: Data fetching from APIs and local files

## 💡 Design Philosophy

The site is designed to reflect the artist’s visual identity, blending dark, atmospheric backgrounds with vibrant artwork previews. Navigation is intuitive, and each section provides context and commentary to engage visitors.

## 📬 Contact

For collaboration or inquiries, use the contact form on the site or email [vojta@vojtechnovak.xyz](mailto:vojta@vojtechnovak.xyz).