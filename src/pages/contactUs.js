//Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation'
import styled from 'styled-components';

//Images
import instagram from '../img/instagram.svg';
import facebook from '../img/facebook.svg';

const ContactUs = () => {
    return (
        <ContactStyle exit="exit" variants={pageAnimation} initial="hidden" animate="show" >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch and book a photoshoot</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Contact us: +1-202-555-0107</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Send an email: info@capture.nt</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <img src={instagram} alt="instagram" />
                        <h2>Instagram: _Capture_</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <img src={facebook} alt="facebook" />
                        <h2>Facebook: _Capture_</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    );
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: white;
    min-height: 90vh;
    @media (max-width: 1500px){
        padding: 2rem;
        font-size: 1rem;
    }
`;
const Title = styled.div`
    margin-bottom: 4rem;
    @media (max-width: 1500px){
        margin-top: 5rem;
    }
`;
const Hide = styled.div`
    overflow: hidden;
`;
const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
    margin-left: 1.5rem;
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin: 2rem;
    }
`;
  
export default ContactUs;
  