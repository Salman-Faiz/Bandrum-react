
import Banner from './Banner/Banner';
import OurServices from './OurServices';
import UpcomingEvents from './UpcomingEvents';



const Home = () => {
    return (
        <div className='container mx-auto md:max-w-7xl'>
            <Banner></Banner>
            <OurServices></OurServices>
            <UpcomingEvents></UpcomingEvents>
        </div>
    );
};

export default Home;