import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledDiv } from './playStyles';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = null;
    this.setCanvasRef = (element) => {
      this.canvasRef = element;
    };
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const { playing } = this.props;
    const canvas = this.canvasRef;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';

    if (!playing) {
      // player is paused, display play icon
      ctx.beginPath();
      ctx.moveTo(23, 12);
      ctx.lineTo(44, 29);
      ctx.lineTo(44, 30);
      ctx.lineTo(23, 47);
      ctx.lineTo(27, 30);
      ctx.lineTo(27, 29);
      ctx.lineTo(23, 12);
      ctx.fill();
    } else {
      // player is playing, display pause icon
      ctx.fillRect(19, 13, 9, 33);
      ctx.fillRect(33, 13, 9, 33);
    }
  }

  render() {
    const { togglePlay } = this.props;
    return (
      <StyledDiv>
        <StyledButton onClick={togglePlay}>
          <canvas ref={this.setCanvasRef} width="60" height="60" />
        </StyledButton>
      </StyledDiv>
    );
  }
}

PlayButton.propTypes = {
  playing: PropTypes.bool,
  togglePlay: PropTypes.func,
};

PlayButton.defaultProps = {
  playing: false,
  togglePlay: () => {},
};

export default PlayButton;
