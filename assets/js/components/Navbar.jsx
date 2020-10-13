import React from "react";
import {Link, NavLink} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="bg-white shadow">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <Link to='/'>
                                    <img className="block h-8 w-auto"
                                         src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                                         alt="Workflow logo" />
                                </Link>
                            </div>
                            <div className="md:ml-6 md:flex">
                                <NavLink to='/' exact activeClassName='border-b-2 border-indigo-500 text-gray-900'
                                   className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out">
                                    Home
                                </NavLink>
                                <NavLink to='/me' exact activeClassName='border-b-2 border-indigo-500 text-gray-900'
                                   className="ml-8 inline-flex items-center px-1 pt-1 border-transparent text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out">
                                    Me
                                </NavLink>
                                <NavLink to='/blog' exact activeClassName='border-b-2 border-indigo-500 text-gray-900'
                                      className="ml-8 inline-flex items-center px-1 pt-1 border-transparent text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out">
                                    Blog
                                </NavLink>
                                <NavLink to='/projects' exact activeClassName='border-b-2 border-indigo-500 text-gray-900'
                                      className="ml-8 inline-flex items-center px-1 pt-1 border-transparent text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out">
                                    Projects
                                </NavLink>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            <button
                                className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
                                aria-label="Notifications">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                                </svg>
                            </button>
                        </div>
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                aria-label="Main menu" aria-expanded="false">
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar