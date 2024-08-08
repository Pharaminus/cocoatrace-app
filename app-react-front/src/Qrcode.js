import React from 'react';
import QRCode from 'qrcode.react';
import ReactDOM from 'react-dom';
import {QRCodeSVG} from 'qrcode.react';
function Qrcode() {
  const data = 'https://www.example.com';

  return (
    <div>

<QRCodeSVG value="https://reactjs.org/" />
{/* ReactDOM.render(
  <QRCodeSVG value="https://reactjs.org/" />,
  document.getElementById('mountNode')
); */}
    </div>
  );
}

export default Qrcode;