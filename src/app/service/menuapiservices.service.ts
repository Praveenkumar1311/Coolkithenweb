import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MenuapiservicesService {

  constructor() { }

   //fooddetails

   foodDetails = [
    {
      id:1,
      foodName:"Cake",
      foodDetails:"Chocolate Caramel Fudge Cake Half Kg",
      foodprice: 70,
      foodImg:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/simple-easy-cake-recipes.jpg"
    },
    {
      id:2,
      foodName:"Pizza",
      foodDetails:"Fresh non-veg pizza",
      foodprice:220,
      foodImg:"https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg"
    },
    {
      id:3,
      foodName:"Burger",
      foodDetails:"2hot 'N'cheezy burger",
      foodprice:250,
      foodImg:"https://st2.depositphotos.com/1000339/5752/i/600/depositphotos_57527967-stock-photo-burger-and-french-fries.jpg"
    },
    {
      id:4,
      foodName:"Ice",
      foodDetails:"Roasted Almond ice cream",
      foodprice:60,
      foodImg:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/homemade-ice-cream-recipe-500x500.jpg"
    },
    {
      id:5,
      foodName:"Donut",
      foodDetails:"Sweet chocolate donut",
      foodprice:70,
      foodImg:"https://cdn.pixabay.com/photo/2019/09/14/08/08/donut-4475455__340.jpg"
    },
    {
      id:6,
      foodName:"Cookie",
      foodDetails:"Chocolate cookies",
      foodprice:40,
      foodImg:"https://c.ndtvimg.com/2019-09/juihv6c8_eggless-chocolate-chip-cookies_625x300_04_September_19.jpg"
    },
    {
      id:7,
      foodName:"Avocado milkshake",
      foodDetails:"Fresh avocado milkshake",
      foodprice:80,
      foodImg:"https://b.zmtcdn.com/data/pictures/9/900099/edd2e3bb6754533eb9fa7ca089242312.jpg"
    },
    {
      id:8,
      foodName:"Chicken tikka",
      foodDetails:"Full chicken tikka",
      foodprice:220,
      foodImg:"https://headbangerskitchen.com/wp-content/uploads/2021/01/lowfatCHICKENTIKKA-Vertic.jpg"
    }
   ]

}
