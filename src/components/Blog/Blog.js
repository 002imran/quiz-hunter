import React from 'react';

const Blog = () => {
    return (
      <div className="mx-40 my-20 text-lg">
        <h1 className="text-2xl text-blue-500">Welcome To Blog Our Blog :)</h1>
        <p className="text-red-800 mt-6">Q1. Purpose of react router?</p>
        <p>
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL. Main componet Of React Router are:
          <ul>* BrowserRouter</ul>
          <ul>* Routes </ul>
          <ul>* Route </ul>
          <ul>* Link </ul>
        </p>
        <p className="text-red-800 mt-6">Q1. How context API Work?</p>
        <p>
          Context API is used to pass global variables anywhere in the code. It
          helps when there is a need for sharing state between a lot of nested
          components. It is light in weight and easier to use, to create a
          context just need to call React. createContext()
        </p>
        <p className="text-red-800 mt-6">Q1. How use Ref Works?</p>
        <p>
          The useRef is a hook that allows to directly create a reference to the
          DOM element in the functional component.The useRef returns a mutable
          ref object. This object has a property called .current. The value is
          persisted in the refContainer.current property. These values are
          accessed from the current property of the returned object. The
          .current property could be initialised to the passed argument
          initialValue e.g. useRef(initialValue). The object can persist a value
          for a full lifetime of the component.
        </p>
      </div>
    );
};

export default Blog;