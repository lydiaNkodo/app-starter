import { HeaderCard } from "../components/HeaderCard";


export const FirstSection = () => {
  return (
    <div class="bg-dark header-text">
      <div class="welcome">
        <h2 class="text-center">welcome to new app</h2>
        <hr class="line-1" />

        <div class="d-lg-flex ">
        <div class="text-white p-3 img-container">
            <h5>Our Mobile App Team</h5>
            <p class="lorem15">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repudiandae, <br /> nihil dolor quidem in tenetur.</p>
            <p class="lorem20">
            Lorem, ipsum dolor <span class="loremtext2">sit amet consectetur</span> adipisicing elit. Ratione tempore consequatur <br /> nisi repellendus explicabo non temporibus praesentium reprehenderit perspiciatis fuga.
            </p>
        </div>
        <div className="d-md-flex image-container">
        <HeaderCard img="https://media.istockphoto.com/photos/beautiful-happy-woman-sitting-holding-her-luggage-passport-map-and-picture-id1195500401?b=1&k=20&m=1195500401&s=170667a&w=0&h=84-h9S8jR6cUkW9N-nEYl2EL_x8wWCcH9-OgfUPeMdw=" name="Jessie Palmer" title="" />
        <HeaderCard img="https://media.istockphoto.com/photos/beautiful-happy-woman-sitting-holding-her-luggage-passport-map-and-picture-id1195500401?b=1&k=20&m=1195500401&s=170667a&w=0&h=84-h9S8jR6cUkW9N-nEYl2EL_x8wWCcH9-OgfUPeMdw=" name="Jessie Palmer" title="" />
        </div>
        </div>

      </div>
    </div>
  )
}

export default FirstSection
