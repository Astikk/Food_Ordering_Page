import "./main.css";

function Main()
{
   //Food Items
    return(
        <div className="main">
           <div id="recomnd">
           <label for="cars"id="sorted">Sorted By:</label>

            <select name="selct" id="option">
               <option value="Recommend">Recommended</option>
               <option value=" "></option>
            </select>

           </div>
           

            <div id="container">


            <section className="sectn1">
            <p className="heart">&#9825;</p> 
         <p className="star">&#11088; 4.2</p> 
         <img className="img_foods" src={require("./images/avocdo.jpg")} alt="Chicken"></img>
         <p className="food_name">Avocado Salad</p>
          <p className="food_size">250g</p>
         <h3 className="prize">$4.99</h3>

            </section>

            <section className="sectn2">
            <p className="heart">&#9825;</p> 
         <p className="star">&#11088; 4.5</p> 
         <img className="img_foods" src={require("./images/brandi.jpg")} alt="Chicken"></img>
         <p>Fruit Salad</p> 
         <p className="food_size">200g</p>
         <h3 className="prize">6.30</h3>

            </section>

            <section className="sectn3">
            <p className="heart">&#9825;</p> 
         <p className="star">&#11088; 5.0</p> 
         <img className="img_foods" src={require("./images/healthy.png")} alt="Chicken"></img>
         <p>Vegetables </p>
          <p className="food_size">240g</p>
         <h3 className="prize">$4.00</h3>

            </section>

            <section className="sectn4">
            <p className="heart">&#9825;</p> 
         <p className="star">&#11088; 4.4</p> 
         <img className="img_foods" src={require("./images/spice.jpg")} alt="Chicken"></img>
         <p>Bean Soup</p>
         <p className="food_size">350g</p>
         <h3 className="prize">$4.40</h3>

            </section>

            <section className="sectn5">
            <p className="heart">&#9825;</p> 
         <p className="star">&#11088; 4.9</p> 
         <img className="img_foods" src={require("./images/wadda.jpg")} alt="Chicken"></img>
         <p>Vadda</p> 
         <p className="food_size">100g</p>
         <h3 className="prize">$3.20</h3>

            </section>

            <section className="sectn6">
            <p className="heart">&#9825;</p> 
         <p className="star">&#11088; 3.9</p> 
         <img className="img_foods" src={require("./images/shell.jpg")} alt="Chicken"></img>
         <p>Seafood</p> 
         <p className="food_size">300g</p>
         <h3 className="prize">$6.10</h3>

            </section>

            <section className="sectn7">
            <p className="heart">&#9825;</p> 
         <p className="star">&#11088; 4.2</p> 
         <img className="img_foods" src={require("./images/healthy.png")} alt="Chicken"></img>
         <p>Vegetable</p>
          <p className="food_size">240g</p>
         <h3 className="prize">$4.20</h3>

            </section>

            <section className="sectn8">
            <p className="heart">&#9825;</p> 
         <p className="star">&#11088; 4.4</p> 
         <img className="img_foods" src={require("./images/avocdo.jpg")} alt="Chicken"></img>
         <p>Stewed Vegetable</p>
          <p className="food_size">400g</p>
         <h3 className="prize">$4.99</h3>

            </section>

           

            </div>
            

        </div>
    );
}

export default Main;