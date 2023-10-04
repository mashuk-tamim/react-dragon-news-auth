import logo from '../../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center py-5 space-y-2'>
            <img className='mx-auto' src={logo} alt='The Dragon News' />
            <h3 className='text-lg'>Journalism Without Fear or Favour</h3>
            <p className='font-bold text-xl'>{moment().format("dddd,")} <span className='text-gray-500'>{moment().format("MMMM D, YYYY")}</span> </p>
        </div>
    );
};

export default Header;