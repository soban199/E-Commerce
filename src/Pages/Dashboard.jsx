import React, { useRef, useContext, useEffect } from "react";
import CategoryButtons from "../Components/Products/CategoryButtons";
import Products from "../Components/Products/Pro";
import Slideshow from "../SlideShow";
import { SearchContext } from "../Components/Search/SearchProvider";

const Dashboard = () => {
  const productsRef = useRef(null);
  const { searchQuery } = useContext(SearchContext);

  // Handle scrolling when searchQuery changes
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      // Scroll to Products when search is active
      productsRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Scroll to the top when search is cleared
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-primary overflow-x-hidden">
      <header className="sticky top-0 z-10 bg-primary">
        {/* Ensure full-width container */}
        <div className="w-screen border-b">
          <CategoryButtons />
        </div>
      </header>
      <main className="space-y-6">
        <section className="w-screen overflow-hidden">
          {/* Full-width slideshow */}
          <Slideshow />
        </section>
        <section ref={productsRef} className="px-4">
          <Products />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
