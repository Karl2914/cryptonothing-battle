import Wallets from './sections/Wallets';
import PrizeAndTimer from './sections/PrizeAndTimer';
import SubmitDonation from './sections/SubmitDonation';
import Events from './sections/Events';
import Leaderboard from './sections/Leaderboard';

export default function Home(){
  return <main>
    <h1>Battle of Wallets — Outsmart, Outspend, Outshine.</h1>
    <p className="sub">Not a lottery — weekly status competition. Top-3 largest single donations win a share of the 10% prize pool.</p>
    <div className="grid2"><Wallets/><PrizeAndTimer/></div>
    <div className="row" style={{marginTop:16}}><div className="card" style={{flex:'1 1 560px'}}><SubmitDonation/></div><div className="card" style={{flex:'1 1 420px'}}><Events/></div></div>
    <div className="card" style={{marginTop:16}}><Leaderboard/></div>
  </main>;
}
