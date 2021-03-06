import React from 'react';
import toJson from 'enzyme-to-json';

import PlanetList from '../PlanetList';

import { planets as mockPlanets } from './mockData/data';

/* ==  "in-file" example of using the enzyme-adapter for react */
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('A test', () => {
    /* == mount -- see if list is in "loading" mode */
    test('verify the planet list is loading', () => {
        const wrapper = mount(<PlanetList />);

        expect(wrapper.find('.planet-list > div').text()).toEqual(
            'loading planets',
        );
    });

    /* == loading the planets via a state initialization */
    test('verify the planet list is complete', () => {
        const wrapper = mount(<PlanetList />);

        wrapper.setState({
            isLoading: false,
            planets: mockPlanets,
        });

        /* == verify Endor */
        expect(wrapper.find('li').length).toEqual(10);
        expect(wrapper.find('[data-testid="endor"]').text()).toEqual('Endor');

        let endorHtml = wrapper.find('[data-testid="endor"]').html();
        let expectedHtml = '<li data-testid="endor">Endor</li>';

        expect(endorHtml).toEqual(expectedHtml);
    });

    /* == tweak the state -- see if it's okay */
    test('verify setting state will change the list of planets', () => {
        const wrapper = mount(<PlanetList />);

        /* == verify REMOVING Endor BY updating component state */
        let lessPlanets = mockPlanets.filter(planet => {
            return planet.name !== 'Endor';
        });

        wrapper.setState({
            isLoading: false,
            planets: lessPlanets,
        });

        expect(wrapper.find('li').length).toEqual(9);
        expect(wrapper.find('[data-testid="endor"]')).toEqual({});
        expect(wrapper.find('[data-testid="endor"]').values).toBe(undefined);
    });

    /* == test the componentDidMount lifecycle method */
    test('should run the componentDidMount lifecycle method', () => {
        jest.spyOn(PlanetList.prototype, 'componentDidMount'); // returns a mock function of 'componentDidMount'
        const wrapper = shallow(<PlanetList />);

        expect(PlanetList.prototype.componentDidMount.mock.calls.length).toBe(
            1,
        );

        expect(wrapper.find('.life-cycle').text()).toBe('componentDidMount');
    });

    /* == test componentDidUpdate lifecycle method */
    test('should run the componentDidUpdate lifecycle method', () => {
        jest.spyOn(PlanetList.prototype, 'componentDidUpdate');
        const wrapper = shallow(<PlanetList />);

        wrapper.setState({
            isLoading: false,
            planets: mockPlanets,
        });

        expect(PlanetList.prototype.componentDidUpdate.mock.calls.length).toBe(
            3,
        );

        expect(wrapper.find('.life-cycle').text()).toBe('componentDidUpdate');
    });

    /* == test a components instance method */
    test('can kebabCase a string correctly', () => {
        const wrapper = shallow(<PlanetList />);

        const helloWorldTest = wrapper.instance().kebabCase('Hello World');
        expect(helloWorldTest).toBe('hello-world');

        const falseResult = wrapper.instance().kebabCase('');
        expect(falseResult).toBe('');
    });

    test('should match the snapshot', () => {
        const wrapper = mount(<PlanetList />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
