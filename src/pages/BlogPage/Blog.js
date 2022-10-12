import React from 'react';

const Blog = () => {
    return (
        <div className='container mb-5 mt-4 pb-5'>
            <h2 className='text-info py-3 mt-4'>What is the react router dom ? </h2>
            <p className='lead'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, <br/> and keeps the UI in sync with the URL.
Let us create a simple application to React to understand how the React Router works. <br/><br/> The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
            <h2 className='text-info py-3 mt-4'>How does context api works?</h2>
            <p className='lead'>React context API, In this article you will explore what is Context API and how to use it in your React project. The Context API is a React structure that enables you to exchange unique details <br/><br/>and assists in solving prop-drilling from all levels of your application.
                
                The React Context API is a way for a React app to effectively produce global variables that can be passed around.<br/> This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management <br/>using Redux.

Context API is a (kind of) new feature added in version 16.3 of React that allows<br/><br/> one to share state across the entire app (or part of it) lightly and with ease.</p>

  <h2 className='text-info py-3 mt-4'>Use ref hook uses</h2>
            <p className='lead'>


            useRef() hook creates references.

Calling const reference = useRef(initialValue) with the initial value returns a special object named reference. The reference object has a property current: you can use this property to read the reference value reference.current, or <br/><br/>update reference.current = newValue.

Between the component re-renderings, the value of the reference is persistent.

Updating a reference, contrary to updating state, doesn't trigger component re-rendering.<br/><br/>

References can also access DOM elements. Assign the reference to ref attribute of the element you'd like to access: reference Element — and the element is available at reference.current.

            </p>
        </div>
    );
};

export default Blog;