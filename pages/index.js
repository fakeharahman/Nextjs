import Fetch from 'isomorphic-unfetch'
import Prices from '../Components/Prices'

const Index = function Index(props) {
  return (

      <div>
        <h1>Welcome to bitzPrice</h1>
        <p>Check current Bitcoin Rate</p>
        <Prices bpi={props.bpi} />
      </div>

  );
};

Index.getInitialProps=async function(){
    const res = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const data =await res.json()

    return{
        bpi: data.bpi
    }
}

export default Index;
