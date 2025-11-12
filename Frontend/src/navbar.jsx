import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSquareMore } from 'react-icons/ci'; // Help Icon
import { LuLogOut } from 'react-icons/lu'; // Logout Icon
import { FaUserCircle } from 'react-icons/fa'; // Profile Icon
import { MdLocationOn } from 'react-icons/md'; // Location Icon
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'; // Phone & Mail Icons
import { IoHomeOutline } from 'react-icons/io5'; // Home Icon
import { TbPigMoney } from 'react-icons/tb'; // Money Saved Icon
import { FcMultipleDevices } from 'react-icons/fc'; // Devices Icon
import { GoGraph } from 'react-icons/go'; // User Matrix Icon
import { MdOutlineAddAlert } from 'react-icons/md'; // Alerts Icon
import { GiTreeBranch } from 'react-icons/gi'; // Environmental Benefits Icon
import { IoCallOutline } from "react-icons/io5";
import image from './image.jpg';
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { RiHistoryLine } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";
function Navbar() {
  const [showProfile, setShowProfile] = useState(false); // Profile dropdown
  const [showHelp, setShowHelp] = useState(false); // Help dropdown
  // Custom Menu Item Component
  const MenuItem = ({ Icon, name }) => (
    <div style={navLinkStyle}>
      <Icon style={iconStyle} />
      <span>{name}</span>
    </div>
  );

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Horizontal Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '70px',
        backgroundColor: '#fff',
        padding: '0 20px',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      }}>
        {/* Logo/Image centered */}
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <img src={image} alt="Logo" style={{ height: '70px' }} />
        </div>  

        {/* Help, Profile, and Logout */}
        <div style={{ display: 'flex', gap: '20px', position: 'relative' }}>
          {/* Help Icon */}
          <div style={{ position: 'relative' }}>
            <IoCallOutline 
              size={30}
              color="#000"
              style={{ cursor: 'pointer' }}
              onClick={() => setShowHelp(!showHelp)} // Toggle Help dropdown
            />
            {showHelp && (
              <div style={{
                position: 'absolute',
                top: '40px',
                right: '0',
                backgroundColor: '#34495e',
                padding: '10px',
                borderRadius: '5px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                color: '#ecf0f1',
                width: '250px',
                textAlign: 'left',
              }}>
                <p style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
                  <MdLocationOn style={{ marginRight: '10px' }} /> Plot No. 150, Sector 44, Gurgaon, Haryana- 122003
                </p>
                <p style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
                  <AiOutlinePhone style={{ marginRight: '10px' }} /> Customer: 18001033039
                </p>
                <p style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
                  <AiOutlineMail style={{ marginRight: '10px' }} /> care@luminousindia.com
                </p>
              </div>
            )}
          </div>

          {/* Profile Icon */}
          <div style={{ position: 'relative' }}>
            <FaUserCircle
              size={30}
              color="#000"
              style={{ cursor: 'pointer' }}
              onClick={() => setShowProfile(!showProfile)} // Toggle Profile dropdown
            />
            {showProfile && (
              <div style={{
                position: 'absolute',
                top: '40px',
                right: '0',
                backgroundColor: '#34495e',
                padding: '10px',
                borderRadius: '5px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                color: '#ecf0f1',
                width: '200px',
                textAlign: 'left',
              }}>
                <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>Rakesh Malhotra</p>
                <p style={{ margin: '5px 0 10px', fontSize: '14px' }}>****911233</p>
                {/* Logout Button inside Profile */}
                <Link to="/Logout" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    paddingTop: '5px',
                    borderTop: '1px solid #ecf0f1',
                  }}>
                    <LuLogOut size={20} style={{ marginRight: '10px' }} />
                    <span>Logout</span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Vertical Navbar */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '300px',
        height: '100%',
        backgroundColor: '#34495e',
        paddingTop: '100px',
        paddingLeft: '20px',
        borderRadius: '0 40px 40px 0',
        color: '#ecf0f1',
      }}>
        {/* Vertical Menu Items */}
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <MenuItem Icon={IoHomeOutline} name="Home" />
        </Link>
        
        <Link to="/device" style={{ textDecoration: 'none' }}>
          <MenuItem Icon={FcMultipleDevices} name="Devices" />
        </Link>
        <Link to="/Matrix" style={{ textDecoration: 'none' }}>
          <MenuItem Icon={GoGraph} name="Billing and User Metric" />
        </Link>
        <Link to="/Alert" style={{ textDecoration: 'none' }}>
          <MenuItem Icon={MdOutlineAddAlert} name="Alerts" />
        </Link>
        <Link to="/Environment" style={{ textDecoration: 'none' }}>
          <MenuItem Icon={GiTreeBranch} name="Environmental Benefits" />
        </Link>
        <Link to="/Scheduling" style={{ textDecoration: 'none' }}>
          <MenuItem Icon={RiHistoryLine} name="Scheduling" />
        </Link>
        <Link to="/EnergyHistory" style={{ textDecoration: 'none' }}>
          <MenuItem Icon={MdOutlineEnergySavingsLeaf} name="Energy History" />
        </Link>
        <Link to="/Setting" style={{ textDecoration: 'none' }}>
          <MenuItem Icon={CiSettings} name="Setting" />
        </Link>
        
        {/* Logout Link */}
        
      </div>
    </div>
  );
}

// Styles for vertical navbar links and icons
const navLinkStyle = {
  textDecoration: 'none',
  color: '#ecf0f1',
  display: 'flex',
  alignItems: 'center',
  margin: '15px 0',
  fontSize: '18px',
};

const iconStyle = {
  marginRight: '15px',
  fontSize: '24px',
};

export default Navbar;