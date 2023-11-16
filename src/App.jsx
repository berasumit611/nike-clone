import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    // main --check ok
    <main className='relative'>

      {/* nav bar --check ok */}
      <Nav />
  
      {/* hero */}
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>

      {/* polpular products */}
      <section className='padding'>
        <PopularProducts />
      </section>

      {/* super quality */}
      <section className='padding'>
        <SuperQuality />
      </section>

      {/* services */}
      <section className='padding-x py-10'>
        <Services />
      </section>

      {/* spacial offer */}
      <section className='padding'>
        <SpecialOffer />
      </section>

      {/* customer review */}
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>

      {/* subscribe */}
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>

      {/* footer */}
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>

    </main>
  );
};

export default App;
