import Toggle from './toggle';

//Styled
import styled from 'styled-components';
import { About } from '../styles';

//Framer Motion
import { AnimateSharedLayout } from 'framer-motion';
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';


const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>Any Questions<span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="What services do you offer?">
                    <div className="answer">
                        <p>Shooting videos and commercials.</p>
                        <p>Photo shoots at a location or photo studio of your choice</p>
                        <p>Shooting your happy occasions</p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                    <div className="answer">
                        <p>Monday to Friday 9:00-22:00.</p>
                        <p>Saturday and Sunday 10:00-21:00</p>
                    </div>
                </Toggle>
                <Toggle title="Diferrent Payment Methods">
                    <div className="answer">
                        <p>Every payment method is accepted.</p>
                        <p>Credit cards: VISA MasterCard</p>
                    </div>
                </Toggle>
                <Toggle title="What Products do you offer.">
                    <div className="answer">
                        <p>After occasions short video with best moments can be offered.</p>
                        <p>Depevolped pictures</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;

 export default FaqSection;