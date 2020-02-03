import React from 'react';
import PropTypes from 'prop-types';
import { StyledDiv, StyledCanvas } from './playInfoStyles';

class Waveform extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = null;
    this.canvasRef = null;
    this.setCanvasRef = (element) => {
      this.canvasRef = element;
    };
    this.setContainerRef = (element) => {
      this.containerRef = element;
    };
  }

  componentDidMount() {
    this.updateCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const { waveform, playTime, duration } = this.props;
    const canvas = this.canvasRef;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = playTime === 0 ? 'white' : '#FF5500';

    const barMax = canvas.getBoundingClientRect().height;
    const barWidth = 2;
    const pixelMargin = 2;
    const maxBarCount = canvas.width - (pixelMargin * 2) / 3;
    let barCount = 0;
    for (let i = pixelMargin; i < canvas.width - pixelMargin; i += 3) {
      if (ctx.fillStyle !== 'white') {
        const songPct = playTime / duration;
        const drawPct = i / maxBarCount;
        ctx.fillStyle = drawPct < songPct ? '#FF5500' : 'white';
      }
      const wave = waveform[barCount % waveform.length];
      const drawStart = barMax / 2 - wave * 0.67;
      ctx.fillRect(i, drawStart, barWidth, wave);
      barCount += 1;
    }
  }

  resizeCanvas() {
    this.forceUpdate();
  }

  render() {
    return (
      <StyledDiv ref={this.setContainerRef}>
        <StyledCanvas
          ref={this.setCanvasRef}
          width={this.containerRef ? this.containerRef.getBoundingClientRect().width : 600}
        />
      </StyledDiv>
    );
  }
}


Waveform.propTypes = {
  waveform: PropTypes.arrayOf(PropTypes.number),
  playTime: PropTypes.number,
  duration: PropTypes.number,
};

Waveform.defaultProps = {
  waveform: [],
  playTime: 0,
  duration: 0,
};


export default Waveform;
