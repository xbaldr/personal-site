// src/components/footer/Footer.tsx
export const Footer = () => (
    <div className="text-center text-sm">
      <p className="mb-2">© 1997 Pixar Animation Studios. All Rights Reserved.</p>
      <p className="mb-2">
        1001 West Cutting Blvd., Richmond, CA 94804 | Phone: 510-236-4000 | Fax: 510-236-0388
      </p>
      <p className="mb-4">
        E-mail: <a href="mailto:webmaster@pixar.com" className="text-red-600 hover:underline">
          webmaster@pixar.com
        </a>
      </p>
      <img 
        src="/api/placeholder/80/80"
        alt="Pixar Lamp"
        className="mx-auto mb-4"
      />
      <p>Last updated: April 28, 1997</p>
    </div>
  );