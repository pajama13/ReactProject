import {Fragment} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/main/Home";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import FoodList from "./components/food/FoodList";
import LocationList from "./components/location/LocationList";
import LocationDetail from "./components/location/LocationDetail";
import RecipeList from "./components/recipe/RecipeList";
import FoodDetail from "./components/food/FoodDetail";
import HotelList from "./components/hotel/HotelList";
import HotelDetail from "./components/hotel/HotelDetail";
import CarList from "./components/car/CarList";
import CarDetail from "./components/car/CarDetail";
import FoodFind from "./components/food/FoodFind";
import NewsList from "./components/news/NewsList";
import FindList from "./components/find/FindList";

function App() {
  return (
      <Router>
        <Fragment>
          <Header/>
          <Routes>
             <Route exact path={"/"} element={<Home/>}/>
             <Route exact path={"/jeju/food_list"} element={<FoodList/>}/>
             <Route exact path={"/jeju/location_list"} element={<LocationList/>}/>
             <Route exact path={"/jeju/location_detail/:no"} element={<LocationDetail/>}/>
             <Route exact path={"/jeju/recipe_list"} element={<RecipeList/>}/>
             <Route exact path={"/jeju/food_detail/:no"} element={<FoodDetail/>}/>
             <Route exact path={"/jeju/food_detail/:no"} element={<FoodDetail/>}/>
             <Route exact path={"/jeju/hotel_list"} element={<HotelList/>}/>
             <Route exact path={"/jeju/hotel_detail/:no"} element={<HotelDetail/>}/>
             <Route exact path={"/jeju/car_list"} element={<CarList/>}/>
             <Route exact path={"/jeju/car_detail/:no"} element={<CarDetail/>}/>
             <Route exact path={"/jeju/food_find"} element={<FoodFind/>}/>
             <Route exact path={"/news/news_list"} element={<NewsList/>}/>
             {/*<Route exact path={"/jeju/find_list"} element={<FindList/>}/>*/}
              <Route exact path={"/jeju/find_list"} element={<FindList/>}/>
          </Routes>
          <Footer/>
        </Fragment>
      </Router>
  );
}

export default App;
