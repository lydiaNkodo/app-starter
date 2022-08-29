import { SecondCard } from "./SecondCard";


export const ThirdSection = () => {
    return (
      <div class="app-screenshots">
          <div class="container">
            <div class="text-white text-center p-4">
        <h5>APP SCREENSHOTS</h5>
        <p class="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto velit <br /> rem mollitia perferendis cupiditate. Ab.</p>
            </div>
        </div>
        <div class="container">
        <div class="row p-4">
            <SecondCard img= 'https://images.unsplash.com/photo-1576854288157-8486dde4f145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
            <SecondCard img='https://images.unsplash.com/photo-1576854288157-8486dde4f145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'/>
            <SecondCard img= 'https://images.unsplash.com/photo-1568090819305-e7edcc3b264b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGdyYXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
            <SecondCard img= 'https://images.unsplash.com/photo-1568090819305-e7edcc3b264b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGdyYXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
           
        </div>
        </div>
      </div>
        
    )
}