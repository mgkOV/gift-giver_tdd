import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
  const gift = shallow(<Gift />);

  it('renders properly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('initializes person and gift in `state`', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
  });

  describe('when typing in person input field', () => {
    const person = 'Oleg';
    beforeEach(() => {
      gift
        .find('.input-person')
        .simulate('change', { target: { value: person } });
    });

    it('update the person in the `state`', () => {
      expect(gift.state().person).toEqual(person);
    });
  });
});
