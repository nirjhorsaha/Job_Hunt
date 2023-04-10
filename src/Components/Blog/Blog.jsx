import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto mt-8 text-oscuro">
                <div className="flex flex-col justify-center w-full ">
                    <div>
                        <section className="text-gray-700">
                            <div className="container mx-auto">
                                <div className="text-center mb-12">
                                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                                        Frequently Asked Question
                                    </h1>
                                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto tracking-widest">
                                        The most common questions about React Router
                                    </p>
                                </div>
                                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 text-start">
                                    <div className="w-full lg:w-1/2 px-4 py-2">
                                        <details className="mb-4">
                                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                When should you use context API?
                                            </summary>

                                            <span className="px-4 py-2">
                                                Context API is a fairly new concept in the world of React. It is designed to share data that can be considered global for a tree of React components. Context API is primarily used when some data needs to be accessible by many components at different nesting levels. So, When we want to share data between components without using props or actions, we use context API. Because Context API can significantly reduce the complexity of state management in application.
                                            </span>
                                        </details>
                                        <details className="mb-4">
                                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                What is a custom hook?
                                            </summary>

                                            <span className="px-4 py-2">
                                                Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app. We can create the custom hook same way as we create any JS function. Look at it as a refactoring of code into another function to make it reusable. It will speed up productivity and save our time.
                                            </span>
                                        </details>
                                    </div>
                                    <div className="w-full lg:w-1/2 px-4 py-2">
                                        <details className="mb-4">
                                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                What is useRef?
                                            </summary>

                                            <span className="px-4 py-2">
                                                useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined. <br /> <code>useRef</code> hook syntax is: <br /> <code>const refContainer = useRef(initialValue);</code>
                                            </span>
                                        </details>
                                        <details className="mb-4">
                                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                What is useMemo?
                                            </summary>

                                            <span className="px-4 py-2">
                                                The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result. A memoized function remembers the results of output for a given set of inputs.
                                            </span>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;

//
// <div className='bg-slate-200 h-full '>
        //     <h1 className='text-center text-5xl p-6'>Frequently Asked Questions</h1>
        //     <div className="grid grid-rows-4 grid-flow-col gap-4 p-12">
        //         <div className='blog'>
        //             <h1 className=''>
        //                 #1. When should you use context API?
        //             </h1>
        //             <p className='p-4'>
        //                 Context API is a fairly new concept in the world of React. It is designed to share data that can be considered global for a tree of React components. Context API is primarily used when some data needs to be accessible by many components at different nesting levels. So, When we want to share data between components without using props or actions, we use context API. Because Context API can significantly reduce the complexity of state management in application.
        //             </p>
        //         </div>
        //         <div className='blog'>
        //             <h1>
        //                 #2. What is a custom hook?
        //             </h1>
        //             <p className='p-4'>
        //                 Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app. We can create the custom hook same way as we create any JS function. Look at it as a refactoring of code into another function to make it reusable. It will speed up productivity and save our time.
        //             </p>
        //         </div>
        //         <div className='blog'>
        //             <h1>
        //                 #3. What is useRef?
        //             </h1>
        //             <p className='p-4'>
        //                 <code>useRef</code> hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined. <br /> <code>useRef</code> hook syntax is:  <code>const refContainer = useRef(initialValue);</code>

        //             </p>
        //         </div>
        //         <div className='blog'>
        //             <h1>
        //                 #4. What is useMemo?
        //             </h1>
        //             <p className='p-4'>

        //             </p>
        //         </div>
        //     </div>
        // </div>