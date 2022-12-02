import React from 'react';

const Footer = () => {
    return (
        <div className='block'>
            <div>
                <h1>How react works</h1>
                <p>React basically maintains a tree,In fact, that is exactly how the browser treats the DOM ( rendered HTML on the browser). React allows to effectively re-construct DOM in JavaScript and push only those changes to the DOM which have actually occurred. React work with : JSX is syntactic sugar, React Renderer, React Reconciliation, React Keys</p>
            </div>
            <div>
                <h1>Difference Between useState and props</h1>
                <p><strong> Props:</strong>
                    --props are immutable
                    which lets React do fast reference checks
                    are used to pass data down from view-controller
                    on top level component
                    have better performance
                    use this to pass data to child components</p>
                <p><strong> State:-- </strong>

                    should be managed in view-controller
                    on top level component
                    is mutable
                    has worse performance
                    should not be accessed from child components
                    pass it down with props instead</p>
            </div>
        </div>
    );
};

export default Footer;