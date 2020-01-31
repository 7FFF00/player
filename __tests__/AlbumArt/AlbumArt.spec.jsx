import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import AlbumArt from '../../client/src/components/AlbumArt/AlbumArt';
import AlbumModal from '../../client/src/components/AlbumArt/AlbumModal';
import { StyledBox, ModalBackdrop } from '../../client/src/components/AlbumArt/albumStyles';
import 'jest-styled-components';

describe('Test Suite', () => {
  it('should render without throwing an error when passed no props', () => {
    shallow(<AlbumArt />);
  });

  it('modal element should be visible when image is clicked', () => {
    const albumComponent = shallow(<AlbumArt />);
    const artBox = albumComponent.find(StyledBox).first();
    const modalStart = albumComponent
      .find(AlbumModal)
      .first()
      .dive()
      .find(ModalBackdrop)
      .first();

    expect(modalStart.prop('fade')).toBe(false);
    expect(modalStart.prop('show')).toBe(false);
    expect(albumComponent.state('displayModal')).toBe(false);
    expect(albumComponent.state('renderModal')).toBe(false);
    artBox.simulate('click');
    albumComponent.update();

    const modalShown = albumComponent
      .find(AlbumModal)
      .first()
      .dive()
      .find(ModalBackdrop)
      .first();

    expect(modalShown.prop('fade')).toBe(true);
    expect(modalShown.prop('show')).toBe(true);
    expect(albumComponent.state('displayModal')).toBe(true);
    expect(albumComponent.state('renderModal')).toBe(true);
  });

  it('clicking the modal backdrop element should toggle state of parent to hide itself', () => {
    const albumComponent = shallow(<AlbumArt />);
    const artBox = albumComponent.find(StyledBox).first();
    artBox.simulate('click');
    albumComponent.update();

    const modalShown = albumComponent
      .find(AlbumModal)
      .first()
      .dive()
      .find(ModalBackdrop)
      .first();

    modalShown.simulate('click');
    albumComponent.update();
    expect(albumComponent.state('displayModal')).toBe(false);
  });

  it('modal backdrop should fade when props change', () => {
    const treeA = renderer.create(<ModalBackdrop />).toJSON();

    expect(treeA).toHaveStyleRule('background-color', 'rgba(220,220,220,0)');
    expect(treeA).toHaveStyleRule('visibility', 'hidden');

    const treeB = renderer.create(<ModalBackdrop fade="true" show="true" />).toJSON();
    expect(treeB).toHaveStyleRule('background-color', 'rgba(220,220,220,0.7)');
    expect(treeB).toHaveStyleRule('visibility', 'visible');
  });
});
