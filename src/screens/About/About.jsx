import { SocialIcon } from "react-social-icons";
import "./About.css";
import Lottie from "lottie-react";
import workingAni from "../../animation/Worling.json";
import heart from "../../animation/heart.json";
import { FaRegCopyright } from "react-icons/fa";
const About = () => {
  return (
    <div className="mainAbout">
      <div className="heading">
        <span>About</span><p>Us</p>
      </div>
      <div className="bottomsection">
            <div className="webAppSection">
                <div className="bar">About Ophelia</div>
                <div className="aboutwebapp">
                Every person has been a victim of mental illness at some point in the day. Mental illness can be of any type i.e anxiety, depression, personality disorders, and many more. According to the study, everyone in four-person suffers from mental or neurological disorders at some point in their lives. Sometimes it just ruins your time and energy. It can be very fatal, even leads to suicide. This is common among teenagers.<br/> <br/>To avoid this problem we have come up with a solution. Ophelia is a web app that aims to help users to deal with mental health-related problems. It'll act as a temporardistraction for the time being. It has many features which are designed to help users.
                </div>
            </div>
           
            <div className="developersSection">
                <div className="bar">Meet The Ophelia Team</div>
                <div className="devIntro">
                    <div className="workingAnimation">
                        <Lottie 
                        style={{height:300 }}
                        animationData={workingAni} />
                    </div>
                    <div className='intro' >Ophelia team consists of 2 very enthusiastic developers who are open to learning and experimenting with new techs. We always aim to build something which can help people to deal with problems and can make their life hassle-free. We all have experienced some kind of mental disorder at some point in time.</div>
                    <div className='intro_rest'>As we have interacted with many fellows then we realized that mental health is a big issue to deal with. Then after a lot of meetings and discussions we have come up with this solution, "Ophelia". We hope it will help the users to deal with mental issues.</div>
                </div>                
                <div className="developer">
                    <div className="Kunal contactBox">
                        <div className="img"></div>
                        <div className="developer_info">
                            <div className="name">Vanshika</div>
                            <p>Hey there, My self Vanshika..!<br/>Nice to meet you.<br/>Let's connect</p>
                            <div className="contact_links">
                                <SocialIcon 
                                className='social_icons' 
                                url="https://github.com/kunal838/"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                                <SocialIcon 
                                className='social_icons' 
                                url="https://www.instagram.com/vanshiikaa_04/"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                                <SocialIcon  
                                className='social_icons'
                                url="https://www.linkedin.com/in/vanshika-mukhi-910b9a220/"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                                <SocialIcon 
                                className='social_icons' 
                                url="mailto:vanshika1959.be21@chitkara.edu.in"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                            </div>
                        </div>
                    </div>
                    <div className="Pavitra contactBox">
                        <div className="img"></div>
                        <div className="developer_info">
                            <div className="name">Shivaksh Sharma</div>
                            <p>Hey there, My self Shivaksh...!<br/>Nice to meet you.<br/>Let's connect</p>
                            <div className="contact_links">
                                <SocialIcon 
                                className='social_icons' 
                                url="https://github.com/Shivaxx12"
                                target="_blank"
                                style={{ height: 40, width: 40}}
                                ></SocialIcon>
                                <SocialIcon 
                                className='social_icons' 
                                url="https://www.instagram.com/shivaxx_sharma/"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                                <SocialIcon 
                                className='social_icons' 
                                url="https://www.linkedin.com/in/shivaksh-sharma-aa1490249/"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                                <SocialIcon 
                                className='social_icons' 
                                url="mailto:shivakshsharma2002@gmail.com"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
            <footer className='footersection'>
                <div>Made with</div>
                <Lottie 
                style={{height:50,width:50}}
                className='heart'
                animationData={heart}/>
                <a href="https://reactjs.org/" target='_blank'rel="noreferrer" >Opehlia Team</a>
            </footer>
            <div className="copyright">Copyright <FaRegCopyright/> 2024 Ophelia </div>
        </div>
    </div>
  );
};

export default About;
