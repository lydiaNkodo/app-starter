import  { ThirdCard } from './ThirdCard'
export const FourthSection = () => {
  return (
    <div class="app-pricing">
      <div class="container">
        <div class="pricing-card">
          <h2>APP PRICING</h2>
        </div>
        <div class="container">
          <div class="row box">
            <ThirdCard/>
            <ThirdCard/>
            <ThirdCard/>
          </div>
        </div>
      </div>
    </div>
  );
};
