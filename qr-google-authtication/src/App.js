import QRcode from 'qrcode.react';
function App() {
  return (
    <div>
      <h1> This is app </h1> 
      <QRcode value="https://google.com" includeMargin="true"> </QRcode>
    </div>
  );
}

export default App;
