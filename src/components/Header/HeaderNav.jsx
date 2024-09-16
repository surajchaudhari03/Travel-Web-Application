import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import Navbar from './Navbar';
import Logo from '../../Images/travel-logo.jpeg';
import '../../Styles/Header.css';
// import BackButton from './BackButton';

const HeaderNav = ({ navigationData, search, onChange, allCityData }) => {

    return (
        <header className="header">
            <div className="header-wrapper navbar-fixed-top">
                {/* <BackButton /> */}
                <div className="left">
                    <Link to={{ pathname: `/` }}>
                        <img id="logo" src={Logo} alt="Headout" />
                    </Link>
                </div>
                <div className="right">
                    <Searchbar search={search} onChange={onChange} allCityData={allCityData} />
                    <Navbar navigationData={navigationData} />
                </div>
            </div>
        </header>
    )
};

export default HeaderNav;