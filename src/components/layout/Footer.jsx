import {FaGithub} from 'react-icons/fa'

const Footer = () => {

    const year = new Date().getFullYear();

    return <footer className='footer p-8 bg-gray-700 text-primary-content footer-center' >
        <FaGithub className='text-4xl' />
        <p className='text-lg' >Copyright &copy; {year}. All rigts reserved.</p>

    </footer>
}

export default Footer;