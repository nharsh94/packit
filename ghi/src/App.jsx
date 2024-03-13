import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './Header'
import ErrorNotification from './ErrorNotification'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import CreateProduct from './CreateProduct'
import ProductsList from './ProductsList'
import Nav from './Nav'
import Construct from './Construct'
import UserPage from './UserPage'
import SignUpUserForm from './SignUpUserForm'
import ForgotPassword from './ForgotPassword'
import AssignRole from './AssignRole.jsx'
import CreateProfile from './CreateProfile'
import { UserProvider } from './UserContext'
import ShopCreate from './ShopCreate'
import ShopsList from './ShopsList'
import OrderList from './list_orders'
import OrderCreate from './order_form'
import TestProductCreate from './TestProductCreate'
import TestProductsList from './TestProductsList'
// import ProductDetails from './ProductDetails'
// import ThreeScene from './ThreeScene'

console.table(import.meta.env)
const API_HOST = import.meta.env.VITE_API_HOST

if (!API_HOST) {
    throw new Error('VITE_API_HOST is not defined')
}

function Navigation() {
    const location = useLocation()
    return location.pathname !== '/' && <Nav />
}

function App() {
    const [error, setError] = useState(null)

    useEffect(() => {
        async function getData() {
            let url = `${API_HOST}/api/launch-details`
            console.log('fastapi url: ', url)
            let response = await fetch(url)

            if (response.ok) {
                console.log('Data fetched successfully!')
            } else {
                console.log('Error fetching data')
                setError('No fetched data')
            }
        }
        getData()
    }, [])

    return (
        <BrowserRouter>
            <UserProvider>
                <div className="App">
                    <Header />
                    <Navigation />
                    <ErrorNotification error={error} />
                    <Routes>
                        <Route path="/" element={<Construct info={{}} />} />
                        <Route path="/orders" element={<OrderList />} />
                        <Route path="/create-order" element={<OrderCreate />} />
                        <Route path="/user" element={<UserPage />} />
                        <Route path="/signup" element={<SignUpUserForm />} />
                        <Route path="/shops">
                            <Route path="create" element={<ShopCreate />} />
                            <Route path="list" element={<ShopsList />} />
                            {/* <Route path="details" element={<ShopDetails shopId={123} />} /> */}
                        </Route>
                        {/* <Route path="/threescene" element={<ThreeScene />} /> */}

                        <Route path="/role" element={<AssignRole />} />
                        <Route path="/profile" element={<CreateProfile />} />
                        <Route
                            path="/forgot-password"
                            element={<ForgotPassword />}
                        />
                        <Route
                            path="/products/create"
                            element={<CreateProduct />}
                        />
                        <Route path="/products">
                            <Route path="create" element={<CreateProduct />} />
                            <Route path="list" element={<ProductsList />} />
                            <Route
                                path="create1"
                                element={<TestProductCreate />}
                            />
                            <Route
                                path="list1"
                                element={<TestProductsList />}
                            />
                            {/* <Route path="details" element={<ProductDetails />} /> */}
                        </Route>
                    </Routes>
                </div>
            </UserProvider>
        </BrowserRouter>
    )
}
export default App
