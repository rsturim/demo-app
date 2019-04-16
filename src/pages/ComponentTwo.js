import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Address from '../components/Address';

class ComponentTwo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h3 className="display-5">Component 2</h3>
                    <ul className="nav nav-pills mt-4 mb-4">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                one
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                two
                            </a>
                        </li>
                    </ul>

                    <p className="lead">
                        Lorem ipsum dolor sit amet, debitis integer integer
                        viverra, dui mauris feugiat cras facilisis.
                    </p>
                    <hr className="my-4" />
                    <p>
                        Vitaeasdasds sed mi pulvinar, pede nec quisque sed nisl
                        in, sapien nam in tincidunt amet suspendisse vel. Wisi a
                        curabitur. Cum pretium fusce fusce, faucibus etiam
                        ligula, orci pretium ut quam aliquam sociis, arcu
                        luctus. Donec vel lectus quisque vel, libero lorem ac
                        velit quisque bibendum pede, justo imperdiet nullam
                        magna, faucibus euismod dolor.
                    </p>
                    <Address
                        person="Joe Smith"
                        street="123 Cupcake lane"
                        city="Emerald City"
                        state="VT"
                        zip="05445"
                    />
                </div>
            </div>
        );
    }
}

ComponentTwo.propTypes = {};

export default ComponentTwo;