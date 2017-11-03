import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);

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

  describe('when typing in presendt input field', () => {
    const present = ' 100 000 000$';

    beforeEach(() => {
      gift
        .find('.input-present')
        .simulate('change', { target: { value: present } });
    });

    it('update the present in the `state`', () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe('when clicking the `Remove Gift` button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    });

    it('calls the removeGift callback', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
