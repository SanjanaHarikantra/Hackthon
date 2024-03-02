// filename -App.js

import React, { useState } from 'react';
import "./App.css";
import Navbar from "./Component/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import SearchComponent from './SearchComponent';
import ShowCourseComponent from './ShowCourseComponent';
import UserCartComponent from './UserCartComponent';


function App() {
  const [courses, setCourses] = useState([
		{ id: 1, 
		name: 'T-shirt', 
		price: 499, 
		image: 
'https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png'
		},
		{ id: 2, 
		name: 'School Bag', 
		price: 699, 
		image: 
'https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg'
		},
		{ id: 3, 
		name: 'Hoodie', 
		price: 799, 
		image: 
'https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg'
		},{ id: 4, 
			name: 'College Bag', 
			price: 699, 
			image: 
	'https://images.dailyobjects.com/marche/product-images/1201/kelp-lunar-daypack-images/Kelp-Lunar-Daypack.png?tr=cm-pad_resize,v-2,w-768,h-648,dpr-1'
			},
			{ id: 5, 
				name: 'School Bag', 
				price: 699, 
				image: 
		'https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg'
				},
	]);

	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (GFGcourse) => {
		const alreadyCourses = cartCourses
							.find(item => item.product.id === GFGcourse.id);
		if (alreadyCourses) {
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === GFGcourse.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartCourses(latestCartUpdate);
		} else {
			setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
		}
	};

	const deleteCourseFromCartFunction = (GFGCourse) => {
		const updatedCart = cartCourses
							.filter(item => item.product.id !== GFGCourse.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses
			.reduce((total, item) => 
						total + item.product.price * item.quantity, 0);
	};

	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
    <div>
      <Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route
					path="/Cart"
					element={<Cart/>}
				/>
				<Route
					path="/Contact"
					element={<Contact/>}
				/>
				
				<Route path="/Products" element={<Products />} />
				
			</Routes>
		</Router>
      <div className="App">
			<SearchComponent searchCourse={searchCourse} 
							courseSearchUserFunction=
								{courseSearchUserFunction} />
			<main className="App-main">
				<ShowCourseComponent
					courses={courses}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>

				<UserCartComponent
					cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartCourses={setCartCourses}
				/>
			</main>
		</div>
    
		
    </div>
	);
}

export default App;
