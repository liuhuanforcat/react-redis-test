import './App.css'
import { Button, Carousel } from 'antd';
import LayoutBase from './layout';
function App() {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <LayoutBase />
  )
}

export default App
