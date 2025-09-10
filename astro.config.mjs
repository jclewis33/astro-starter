// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // This is the URL of your live site. Astro uses this for generating canonical URLs and your sitemap.
  site: "https://www.popcandi.ai",
  image: {
    /* Valid: "constrained" | "full-width" | "fixed" 
   
    Override on a per image basis. 
    
    EX: Full width hero set: layout="full-width" to override constrained 
    
    DEFINITIONS:
    - constrained: responsive, but capped at the image’s max size. Great for images sitting inside text/content columns.
		
    - full-width: responsive and stretches to the container width (can grow as wide as the container, even beyond the original pixel size if you let it). Best for hero/banner images.
	  
    - fixed: sticks to a fixed width/height (no responsive resizing).
    */

    layout: "constrained",
    // Adds small global styles so images resize correctly

    responsiveStyles: true,
    // service: imageService(),
  },

  // Optional: If your site is hosted in a subdirectory, specify the base path.
  // base: '/your-subdirectory/',

  // Optional: Control whether URLs have trailing slashes. Options are "always", "never", or "ignore".
  // trailingSlash: 'always',
});
