import { Button } from "./Button";
export const ThirdCard = () => {
  return (
    <div class="col-md bg-white p-5  text-center middle">
      <h3 class="text-info">$200</h3>
      <h5 class=" mt-4">ADVANCED</h5>
      <p class="text-dark">40 user</p>
      <p class="text-dark">100GB per User</p>
      <p class="text-dark">Unlimited Support</p>
      <p class="text-dark">2 Year License</p>
      <Button
      btnStyle = 'btn btn-info button text-white w-75 h-15'
      text = 'Register Now'
      />
    </div>
  );
};
